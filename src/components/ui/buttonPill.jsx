import { Send } from 'lucide-react';

export default function TelegramPillButton() {
  return (
    <section className="relative w-full">
      <button className="relative flex items-center justify-between bg-cyan-400 rounded-full px-8 py-6 w-32">
        <div className="absolute right-2 bg-gray-900 rounded-full p-2">
          <Send className="w-5 h-5 text-white" />
        </div>
      </button>
    </section>
  );
}