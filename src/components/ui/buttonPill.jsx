import { Send } from 'lucide-react';

export default function TelegramPillButton() {
  return (
    <section className="relative w-full">
      <button className="relative flex items-center justify-between bg-cyan-400 rounded-full px-4 py-4 sm:px-8 sm:py-6 w-20 sm:w-32">
        <div className="absolute right-2 bg-gray-900 rounded-full p-2">
          <Send className="w-2 h-2 sm:w-5 sm:h-5 text-white" />
        </div>
      </button>
    </section>
  );
}

