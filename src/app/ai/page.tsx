"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Sparkles, Bot, User, AlertCircle } from "lucide-react";

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello, Jaborzoda! I am your ZABON AI Language Tutor. How can I help you practice your English today? You can ask me to explain grammar rules, translate phrases, or correct your mistakes."
    }
  ]);
  const [input, setInput] = useState("");
  const [isConfigured] = useState(false); // Флаг отсутствия ключа API согласно правилам ZABON

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Имитация ответа с предупреждением о конфигурации
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        role: "assistant",
        content: "AI provider is not configured. Please add your OPENAI_API_KEY to environment variables to enable live AI tutoring."
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between">
      {/* Header bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <div className="h-5 w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">ZABON AI Tutor</span>
            </div>
          </div>

          <span className="text-xs bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 font-semibold px-2.5 py-1 rounded-full">
            GPT-4o Engine
          </span>
        </div>
      </header>

      {/* Chat Messages Container */}
      <main className="max-w-3xl w-full mx-auto px-4 py-6 flex-1 flex flex-col space-y-4 overflow-y-auto">
        
        {/* Configuration Notice Banner */}
        {!isConfigured && (
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 p-4 flex items-start gap-3 text-amber-800 dark:text-amber-200 text-xs shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">AI Provider is not configured</span>
              You are in Demo Mode. Real AI streaming responses require setting up backend credentials and environment variables.
            </div>
          </div>
        )}

        {messages.map((msg) => {
          const isUser = msg.role === "user";
          return (
            <div 
              key={msg.id}
              className={`flex items-start gap-3 max-w-[85%] sm:max-w-[75%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
            >
              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                isUser ? "bg-blue-600 text-white" : "bg-gradient-to-tr from-cyan-500 to-blue-600 text-white"
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`p-4 rounded-3xl text-sm leading-relaxed ${
                isUser 
                  ? "bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10" 
                  : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-tl-none shadow-sm"
              }`}>
                {msg.content}
              </div>
            </div>
          );
        })}
      </main>

      {/* Input Box Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 sticky bottom-0">
        <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI: 'Explain Past Simple' or 'How to say...'"
            className="flex-1 py-3 px-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </footer>
    </div>
  );
}
