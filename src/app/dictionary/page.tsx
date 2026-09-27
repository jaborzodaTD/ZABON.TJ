"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Bookmark, Volume2, Sparkles, BookOpen, Check } from "lucide-react";

export default function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWord, setSelectedWord] = useState<{
    word: string;
    phonetic: string;
    partOfSpeech: string;
    level: string;
    translation: string;
    definition: string;
    examples: string[];
    synonyms: string[];
  } | null>({
    word: "Achieve",
    phonetic: "/əˈtʃiːv/",
    partOfSpeech: "verb",
    level: "B1",
    translation: "Достигать, добиваться",
    definition: "To successfully bring about or reach a desired objective or result through effort, skill, or courage.",
    examples: [
      "She worked hard to achieve her goals.",
      "The academy helps students achieve fluency."
    ],
    synonyms: ["accomplish", "attain", "reach", "fulfill"]
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Имитация поиска слова
    setSelectedWord({
      word: searchQuery,
      phonetic: "/wɜːd/",
      partOfSpeech: "noun / verb",
      level: "A2",
      translation: `Перевод для "${searchQuery}"`,
      definition: `Detailed dictionary definition and linguistic context for "${searchQuery}".`,
      examples: [
        `Example sentence using ${searchQuery} in daily conversation.`,
        `Another context showing how to apply ${searchQuery} correctly.`
      ],
      synonyms: ["sample", "example", "term"]
    });
    setIsSaved(false);
  };

  const handleSaveWord = () => {
    setIsSaved(true);
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
              <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">ZABON Dictionary</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto px-4 py-8 flex-1 space-y-6">
        
        {/* Search Bar Form */}
        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any word in English, Russian, Tajik..."
            className="w-full pl-12 pr-4 py-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm shadow-lg shadow-slate-200/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 px-6 rounded-2xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
          >
            Search
          </button>
        </form>

        {/* Word Details Card */}
        {selectedWord && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Word Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-ext500 font-bold text-slate-900 dark:text-white">{selectedWord.word}</h1>
                  <span className="text-xs bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-semibold px-2.5 py-1 rounded-full">
                    {selectedWord.level}
                  </span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium px-2.5 py-1 rounded-full uppercase">
                    {selectedWord.partOfSpeech}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                  <span>{selectedWord.phonetic}</span>
                  <button 
                    onClick={() => alert("Audio pronunciation playback (TTS engine ready).")}
                    className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-purple-600 dark:text-purple-400 transition-colors"
                    title="Listen pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleSaveWord}
                disabled={isSaved}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-all ${
                  isSaved 
                    ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50" 
                    : "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20"
                }`}
              >
                {isSaved ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved to Vocabulary</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Save Word</span>
                  </>
                )}
              </button>
            </div>

            {/* Translation block */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Translation</h3>
              <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{selectedWord.translation}</p>
            </div>

            {/* Definition block */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Definition</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{selectedWord.definition}</p>
            </div>

            {/* Examples block */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Examples</h3>
              <div className="space-y-2">
                {selectedWord.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 italic">
                    "{ex}"
                  </div>
                ))}
              </div>
            </div>

            {/* Synonyms block */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Synonyms</h3>
              <div className="flex flex-wrap gap-2">
                {selectedWord.synonyms.map((syn, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                    {syn}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>
    </div>
  );
}
