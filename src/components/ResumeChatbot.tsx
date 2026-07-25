import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { yearsOfExp } from '../data/resumeData';

interface ResumeChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ResumeChatbot: React.FC<ResumeChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I am Shashidhara H V's AI Assistant. You can ask me anything about his ${yearsOfExp} years of full stack Java experience, Kubernetes FTP sync projects, Qualcomm awards, or technical stack!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "What is Shashidhara's experience with Kubernetes & EKS?",
    "Tell me about his key achievements at Qualcomm.",
    "What core skills does he have in backend & databases?",
    "What awards has Shashidhara received?",
  ];

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const sendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });
      
      const contentType = res.headers.get('content-type');
      let botReply = '';
      
      if (res.ok && contentType && contentType.includes('application/json')) {
        const data = await res.json();
        botReply = data.response;
      }

      if (!botReply) {
        botReply = `Shashidhara is a Senior Software Engineer with ${yearsOfExp} years of experience in Java, Spring Boot, Microservices, and Kubernetes. Contact him directly at hvshashidhar@gmail.com or +91 7676215649!`;
      }
      
      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm having trouble connecting right now. Feel free to contact Shashidhara directly at hvshashidhar@gmail.com or +91 7676215649!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[560px] max-h-[90vh]">
        
        {/* Header */}
        <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600 text-white shadow-md">
              <Sparkles className="w-4 h-4 text-blue-100" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Ask Shashidhara's AI Assistant
              </h3>
              <span className="text-[10px] font-mono text-blue-400">Powered by Gemini AI</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="p-1.5 rounded-lg bg-slate-800 text-blue-400 shrink-0 border border-slate-700">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-slate-950 text-slate-200 border border-slate-800'
                }`}
              >
                {msg.content}
              </div>

              {msg.role === 'user' && (
                <div className="p-1.5 rounded-lg bg-blue-900 text-blue-300 shrink-0 border border-blue-800">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-blue-400 font-mono p-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing resume data...</span>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Sample Questions Chips */}
        {messages.length < 3 && (
          <div className="p-2.5 bg-slate-950/80 border-t border-slate-800 flex flex-wrap gap-1.5">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(q)}
                className="text-left text-[11px] px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask anything about Shashidhara's background..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};

