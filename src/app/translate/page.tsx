"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRightLeft, Copy, Volume2, Bookmark, Languages, AlertCircle, Check } from "lucide-react";

export default function TranslatePage() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("tg");
  const [isCopied, setIsCopied] = useState(false);
  const [isApiConfigured] = useState(false); // Флаг наличия ключа перевода

  const handleTranslate = () => {
    if (!sourceText.trim()) return;

    if (!isApiConfigured) {
      setTranslatedText("Translation provider is not configured. Please add TRANSLATION_API_KEY to environment variables.");
      return;
    }

    // Заглушка для реального API перевода
    setTranslatedText(`[Translated to ${targetLang}]: ${sourceText}`);
  };

  const handleCopy = () => {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSwapLangs = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
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
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Languages className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">Smart Translator</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Translation Container */}
      <main className="max-w-4xl w-full mx-auto px-4 py-8 flex-1 space-y-6">
        
        {/* API Warning Notice */}
        {!isApiConfigured && (
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 p-4 flex items-start gap-3 text-amber-800 dark:text-amber-200 text-xs shadow-sm">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Translation provider is not configured</span>
              Live multi-language translation requires configuring an external provider API key in your environment settings.
            </div>
          </div>
        )}

        {/* Translation Card Layout */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          
          {/* Language Selection Bar */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="flex-1 py-2.5 px-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="en">🇬🇧 English</option>
              <option value="ru">🇷🇺 Russian</option>
              <option value="tg">🇹🇯 Tajik</option>
              <option value="kk">🇰🇿 Kazakh</option>
              <option value="uz">🇺🇿 Uzbek</option>
              <option value="de">🇩🇪 German</option>
              <option value="es">🇪🇸 Spanish</option>
              <option value="ar">🇸🇦 Arabic</option>
            </select>

            <button
              onClick={handleSwapLangs}
              className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors flex-shrink-0"
              title="Swap Languages"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="flex-1 py-2.5 px-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="tg">🇹🇯 Tajik</option>
              <option value="ru">🇷🇺 Russian</option>
              <option value="en">🇬🇧 English</option>
              <option value="de">🇩🇪 German</option>
              <option value="es">🇪🇸 Spanish</option>
              <option value="fr">🇫🇷 French</option>
              <option value="ar">🇸🇦 Arabic</option>
              <option value="ja">🇯🇵 Japanese</option>
            </select>
          </div>

          {/* Text Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Source Text Area */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Source Text
              </label>
              <textarea
                rows={5}
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Type or paste text to translate..."
                className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              ></textarea>
              <div className="flex justify-end">
                <button
                  onClick={handleTranslate}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                >
                  Translate
                </button>
              </div>
            </div>

            {/* Translated Output Area */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Translation
              </label>
              <div className="w-full h-[142px] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm overflow-y-auto">
                {translatedText || <span className="text-slate-400 italic">Translation will appear here...</span>}
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!translatedText}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-50"
                  title="Copy Translation"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
