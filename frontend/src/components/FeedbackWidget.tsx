import React, { useEffect, useState } from 'react';
import { PageRoute } from '../data/showcaseData';

interface FeedbackWidgetProps {
  activePage: PageRoute;
  isMobile?: boolean;
}

interface FeedbackSubmission {
  id: string;
  rating: number;
  topic: string;
  nameOrEmail: string;
  message: string;
  page: PageRoute;
  createdAt: string;
}

const PAGE_TO_TOPIC: Record<PageRoute, string> = {
  landing: 'Overall Showcase',
  transformation: 'Transformation',
  partnership: 'Partnership',
  delivery: 'Delivery Highlights',
  future: '2027 Priority',
};

const TOPIC_OPTIONS = [
  'Overall Showcase',
  'Transformation',
  'Partnership',
  'Delivery Highlights',
  '2027 Priority',
];

const RATING_LABELS: Record<number, string> = {
  1: 'Needs Improvement',
  2: 'Fair',
  3: 'Good',
  4: 'Great',
  5: 'Exceptional',
};

const DEFAULT_GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1nIsz8_tsfObY9sO6_Xo0Q2o4F_o5QykS3jwpgF4kTMA/edit';

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ activePage, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [topic, setTopic] = useState<string>(PAGE_TO_TOPIC[activePage] || 'Overall Showcase');
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sheetUrl, setSheetUrl] = useState<string>(DEFAULT_GOOGLE_SHEET_URL);
  const [syncedToSheet, setSyncedToSheet] = useState<boolean>(true);

  // Sync default topic chip when user navigates pages (unless form is actively open)
  useEffect(() => {
    if (!isOpen) {
      setTopic(PAGE_TO_TOPIC[activePage] || 'Overall Showcase');
    }
  }, [activePage, isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!message.trim() && !rating) || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const entryId = `fb-${Date.now()}`;
    const entry: FeedbackSubmission = {
      id: entryId,
      rating,
      topic,
      nameOrEmail: nameOrEmail.trim(),
      message: message.trim(),
      page: activePage,
      createdAt: new Date().toISOString(),
    };

    try {
      const existingRaw = window.localStorage.getItem('demo_landing_feedback');
      const existing: FeedbackSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(entry);
      window.localStorage.setItem('demo_landing_feedback', JSON.stringify(existing.slice(0, 100)));
    } catch {
      // Ignore storage quota errors
    }

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: entryId,
          rating,
          topic,
          nameOrEmail: nameOrEmail.trim(),
          message: message.trim(),
          page: activePage,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || `Failed to submit feedback (${response.status})`);
      }

      const data = await response.json();
      if (data.sheetUrl) {
        setSheetUrl(data.sheetUrl);
      }
      setSyncedToSheet(Boolean(data.syncedToSheet));
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Unable to save feedback to server. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsOpen(false);
    window.setTimeout(() => {
      setIsSubmitted(false);
      setSubmitError(null);
      setMessage('');
      setRating(5);
    }, 200);
  };

  const displayRating = hoverRating ?? rating;

  return (
    <div
      className={`fixed z-[70] flex flex-col items-end ${
        isMobile ? 'bottom-20 right-3.5' : 'bottom-4 right-5'
      }`}
    >
      {/* Transparent click-outside catcher (no screen blur, strictly behind the popover) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-transparent"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Popover Feedback Form */}
      {isOpen && (
        <div
          className={`relative z-[70] mb-3 rounded-2xl shadow-2xl text-left google-animated-border p-[2px] select-text ${
            isMobile
              ? 'w-[calc(100vw-1.75rem)] max-w-[356px]'
              : 'w-[340px] sm:w-[368px]'
          }`}
          role="dialog"
          aria-label="Collect Feedback Form"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`w-full rounded-[14px] bg-white p-4 overflow-y-auto ${
              isMobile ? 'max-h-[calc(100vh-165px)]' : 'max-h-[calc(100vh-115px)]'
            }`}
          >
          {/* Top Header */}
          <div className="flex items-start justify-between gap-2 pb-2.5 mb-3 border-b border-outline-variant/30">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-google-blue"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-google-green"></span>
                <span className="font-mono text-[9px] text-google-blue font-bold uppercase tracking-wider ml-1">
                  Executive Showcase Feedback
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-on-surface leading-tight">
                Share Your Feedback
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors shrink-0"
              title="Close feedback form"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-4 px-2 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E6F4EA] border border-google-green/30 text-google-green flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-[26px]">check_circle</span>
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-on-surface">
                  Thank You for Your Feedback!
                </h4>
                <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Your input on <strong className="text-on-surface">{topic}</strong> has been stored
                  in Cloud SQL and populated into the Google Sheet.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F0FE] text-google-blue font-mono text-[10px] font-semibold border border-google-blue/30">
                  <span className="material-symbols-outlined text-[12px]">database</span>
                  Cloud SQL Saved
                </span>
                {syncedToSheet && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E6F4EA] text-google-green font-mono text-[10px] font-semibold border border-google-green/30">
                    <span className="material-symbols-outlined text-[12px]">table_View</span>
                    Google Sheet Synced
                  </span>
                )}
              </div>
              <div>
                <a
                  href={sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-google-blue hover:underline"
                >
                  <span>Open Feedback Google Sheet</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
              <div className="pt-1 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-mono text-[11px] font-semibold border border-outline-variant/40 transition-colors"
                >
                  Submit Another
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-3.5 py-1.5 rounded-lg bg-google-blue hover:bg-primary text-white font-mono text-[11px] font-semibold shadow-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* 1. Star Rating */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                    Overall Experience
                  </label>
                  <span className="font-mono text-[10px] font-semibold text-google-blue">
                    {RATING_LABELS[displayRating]}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1.5 bg-surface-container-low p-1.5 rounded-xl border border-outline-variant/30">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = star <= displayRating;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className={`flex-1 py-1 rounded-lg flex items-center justify-center transition-all ${
                          active
                            ? 'bg-white text-[#FBBC05] shadow-sm scale-[1.02]'
                            : 'text-outline-variant hover:text-[#FBBC05]/70'
                        }`}
                        title={`${star} - ${RATING_LABELS[star]}`}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {active ? 'star' : 'star_outline'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Topic / Pillar Selector */}
              <div>
                <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block mb-1">
                  Section / Topic
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {TOPIC_OPTIONS.map((item) => {
                    const selected = topic === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold transition-all border ${
                          selected
                            ? 'bg-[#E8F0FE] text-google-blue border-google-blue/40 shadow-sm'
                            : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:text-on-surface'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Name / Email (Optional) */}
              <div>
                <label
                  htmlFor="feedback-name"
                  className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block mb-1"
                >
                  Name or Email <span className="font-normal text-outline">(Optional)</span>
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  value={nameOrEmail}
                  onChange={(e) => setNameOrEmail(e.target.value)}
                  placeholder="e.g. Alex Rivera / alex@company.com"
                  className="w-full px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-google-blue focus:bg-white focus:outline-none font-body text-xs text-on-surface placeholder:text-outline transition-colors"
                />
              </div>

              {/* 4. Feedback Message */}
              <div>
                <label
                  htmlFor="feedback-message"
                  className="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block mb-1"
                >
                  Your Feedback
                </label>
                <textarea
                  id="feedback-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share thoughts, questions, or suggestions on this showcase..."
                  className="w-full px-3 py-2 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-google-blue focus:bg-white focus:outline-none font-body text-xs text-on-surface placeholder:text-outline resize-none transition-colors leading-relaxed"
                />
              </div>

              {submitError && (
                <div className="px-2.5 py-1.5 rounded-lg bg-red-50 border border-red-200 font-body text-[11px] text-red-700">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-1 flex items-center justify-between gap-2">
                <a
                  href={sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-google-blue hover:underline"
                  title="Open Live Feedback Google Sheet"
                >
                  <span>Google Sheet</span>
                  <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    disabled={isSubmitting}
                    className="px-3 py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-mono text-[11px] font-semibold transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-google-blue hover:bg-primary text-white font-mono text-[11px] font-semibold shadow-sm hover:shadow transition-all disabled:opacity-60"
                  >
                    <span>{isSubmitting ? 'Saving...' : 'Submit Feedback'}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      {isSubmitting ? 'sync' : 'send'}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
          </div>
        </div>
      )}

      {/* Floating Hovering Circle Icon Button */}
      <div className="relative z-[70] flex items-center gap-2 group select-none">
        {!isOpen && (
          <span className="pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-outline-variant/50 shadow-md font-mono text-[10px] font-bold text-on-surface whitespace-nowrap">
            Collect Feedback
          </span>
        )}
        <button
          type="button"
          id="collect-feedback-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Collect Feedback"
          title="Collect Feedback"
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border ${
            isOpen
              ? 'bg-on-surface text-white border-on-surface'
              : 'bg-google-blue hover:bg-primary text-white border-white/40 ring-4 ring-google-blue/15'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isOpen ? 'close' : 'rate_review'}
          </span>
        </button>
      </div>
    </div>
  );
};
