"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bookmark, Volume2, Sparkles, Trash2, BookOpen, Layers } from "lucide-react";

export default function VocabularyPage() {
  const [words, setWords] = useState([
    { id: 1, word: "Achieve", translation: "Достигать, добиваться", level: "B1", phonetic: "/əˈtʃiːv/" },
    { id: 2, word: "Improve", translation: "Улучшать, совершенствовать", level: "A2", phonetic: "/ɪmˈpruːv/" },
    { id: 3, word: "Confidence", translation: "Уверенность", level: "B1", phonetic: "/ˈkɒnfɪdəns/" },
    { id: 4, word: "Schedule", translation: "Расписание, график", level: "A2", phonetic: "/ˈʃedjuːl/" },
    { id: 5, word: "Environment", translation: "Окружающая среда, среда", level: "B2", phonetic: "/ɪnˈvaɪrənmənt/" },
  ]);

  const handleDeleteWord = (id: number) => {
    setWords(prev => prev.filter(w => w.id !== id));
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
              <div className="w-8 h-8 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                <Bookmark className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">My Vocabulary</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-1 rounded-full">
              {words.length} Saved Words
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto px-4 py-8 flex-1 space-y-6">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Spaced Repetition
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Review & Memorize
            </h1>
            <p className="text-amber-100 text-sm max-w-md">
              Review your saved words regularly to transfer them from short-term to long-term memory.
            </p>
          </div>
          <button 
            onClick={() => alert("Flashcard training mode activated.")}
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-amber-50 transition-colors shadow-lg flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Start Flashcards</span>
          </button>
        </div>

        {/* Words List */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Saved Words Collection</h2>

          {words.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-3">
              <p className="text-slate-500 dark:text-slate-400 text-sm">No saved words yet. Search and save words from the Dictionary!</p>
              <Link 
                href="/dictionary"
                className="inline-block px-5 py-2.5 rounded-xl bg-amber-600 text-white font-semibold text-xs hover:bg-amber-700 transition-colors"
              >
                Go to Dictionary
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {words.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900 dark:text-white text-base">{item.word}</span>
                      <span className="text-xs bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded-full">
                        {item.level}
                      </span>
                      <span className="text-xs text-slate-400">{item.phonetic}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.translation}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => alert(`Pronunciation for ${item.word}`)}
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteWord(item.id)}
                      className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors"
                      title="Remove word"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
