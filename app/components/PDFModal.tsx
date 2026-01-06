"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PDFModal({
  isOpen,
  onClose,
  pdfUrl,
  title = "Document Preview",
}: PDFModalProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
          <h3 className="text-sm md:text-base font-medium text-slate-400">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close PDF viewer"
            className="text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* PDF Container */}
        <div className="relative w-full h-[75vh] bg-black">
          {/* Black loading mask */}
          {!loaded && (
            <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
              <span className="text-neutral-400 text-sm">
                Loading document…
              </span>
            </div>
          )}

          <iframe
            src={pdfUrl}
            className="w-full h-full"
            onLoad={() => setLoaded(true)}
            title={title}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end px-4 py-3 border-t border-neutral-800">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
