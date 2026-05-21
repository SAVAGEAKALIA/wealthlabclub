import { Send } from 'lucide-react';

interface FloatingContactButtonProps {
  telegramUrl: string;
  label?: string;
}

export default function FloatingContactButton({
  telegramUrl,
  label = 'Pay for Course',
}: FloatingContactButtonProps) {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 animate-fab-entrance group">
      {/* Tooltip — visible on hover, desktop only */}
      <span
        className="
          absolute right-full mr-3 top-1/2 -translate-y-1/2
          bg-primary-light text-white text-sm font-medium
          rounded-md px-3 py-1.5 shadow-md border border-gray-800
          whitespace-nowrap
          opacity-0 invisible
          md:group-hover:opacity-100 md:group-hover:visible
          transition-all duration-200
          pointer-events-none
        "
        aria-hidden="true"
      >
        {label}
      </span>

      {/* FAB */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} – Opens Telegram in a new tab`}
        id="floating-contact-button"
        className="
          inline-flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14
          rounded-full
          bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end
          text-white
          shadow-lg
          hover:brightness-110 hover:shadow-xl hover:scale-105
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary
          transition-all duration-200
        "
      >
        <Send className="h-5 w-5 md:h-6 md:w-6" />
      </a>
    </div>
  );
}
