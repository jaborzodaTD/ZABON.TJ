"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  Play, 
  Flame, 
  Zap, 
  BookOpen, 
  Sparkles,
  Star
} from "lucide-react";

export default function LearnPage() {
  // Список 30-дневного курса (согласно архитектуре ZABON)
  const courseDays = [
    { day: 1, title: "Greetings", topic: "Basic hello & farewell", status: "completed", xp: 50 },
    { day: 2, title: "Introduction", topic: "Saying your name and origin", status: "completed", xp: 50 },
    { day: 3, title: "Numbers", topic: "Counting from 1 to 100", status: "completed", xp: 50 },
    { day: 4, title: "Family", topic: "Family members & relationships", status: "current", xp: 50 },
    { day: 5, title: "Home", topic: "Rooms and furniture", status: "locked", xp: 50 },
    { day: 6, title: "Food", topic: "Meals, drinks & ordering", status: "locked", xp: 50 },
    { day: 7, title: "Review", topic: "Weekly comprehensive check", status: "locked", xp: 100 },
    { day: 8, title: "Work", topic: "Professions & office life", status: "locked", xp: 50 },
    { day: 9, title: "Time", topic: "Hours, days and months", status: "locked", xp: 50 },
    { day: 10, title: "Daily Routine", topic: "Morning and evening habits", status: "locked", xp: 50 },
    { day: 11, title: "Shopping", topic: "Prices, clothes & buying", status: "locked", xp: 50 },
    { day: 12, title: "Transport", topic: "Bus, train, airport & travel", status: "locked", xp: 50 },
    { day: 13, title: "City", topic: "Directions & places in town", status: "locked", xp: 50 },
    { day: 14, title: "Review", topic: "Mid-course progress test", status: "locked", xp: 100 },
    { day: 15, title: "Travel", topic: "Luggage, tickets & tourism", status: "locked", xp: 50 },
    { day: 16, title: "Hotel", topic: "Checking in and booking rooms", status: "locked", xp: 50 },
    { day: 17, title: "Restaurant", topic: "Menus, tips & paying", status: "locked", xp: 50 },
    { day: 18, title: "Health", topic: "At the doctor & pharmacy", status: "locked", xp: 50 },
    { day: 19, title: "Weather", topic: "Seasons, temperature & climate", status: "locked", xp: 50 },
    { day: 20, title: "Friends", topic: "Hobbies, sports & social life", status: "locked", xp: 50 },
    { day: 21, title: "Review", topic: "Advanced grammar & review", status: "locked", xp: 100 },
    { day: 22, title: "Past Tense", topic: "Talking about yesterday", status: "locked", xp: 50 },
    { day: 23, title: "Future", topic: "Plans and upcoming events", status: "locked", xp: 50 },
    { day: 24, title: "Questions", topic: "Advanced interrogation structures", status: "locked", xp: 50 },
    { day: 25, title: "Common Phrases", topic: "Idioms & everyday expressions", status: "locked", xp: 50 },
    { day: 26, title: "Conversation", topic: "Fluid dialogue practice", status: "locked", xp: 50 },
    { day: 27, title: "Listening", topic: "Comprehension drill", status: "locked", xp: 50 },
    { day: 28, title: "Speaking", topic: "Pronunciation mastery", status: "locked", xp: 50 },
    { day: 29, title: "Final Preparation", topic: "Exam readiness check", status: "locked", xp: 50 },
    { day: 30, title: "Final Exam", topic: "ZABON Certification Test", status: "locked", xp: 200 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-16">
      {/* Header bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <div className="h-5 w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-sm">English Course</span>
              <span className="text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold px-2 py-0.5 rounded-full">CEFR A1</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 px-3 py-1.5 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-xs">
              <Zap className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
              <span>450 XP Total</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              30-Day Masterclass
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold">
              English A1 Academy Path
            </h1>
            <p className="text-blue-100 text-sm max-w-md">
              Complete daily lessons, master vocabulary, and build practical conversational fluency step-by-step.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[140px]">
            <span className="text-3xl font-ext500 font-bold">3 / 30</span>
            <span className="text-xs text-blue-200 mt-1">Days Completed</span>
          </div>
        </div>

        {/* Lessons Path Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Curriculum Roadmap</h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">Tap any unlocked day to start</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {courseDays.map((item) => {
              const isCompleted = item.status === "completed";
              const isCurrent = item.status === "current";
              const isLocked = item.status === "locked";

              return (
                <div 
                  key={item.day}
                  className={`flex items-center justify-between p-5 rounded-3xl border transition-all ${
                    isCurrent 
                      ? "bg-white dark:bg-slate-900 border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/5" 
                      : isCompleted 
                      ? "bg-white dark:bg-slate-900 border-emerald-500/30 hover:border-emerald-500" 
                      : "bg-slate-100/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm ${
                      isCompleted 
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400" 
                        : isCurrent 
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" 
                        : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600"
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isLocked ? <Lock className="w-5 h-5" /> : `D${item.day}`}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Day {item.day}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">+{item.xp} XP</span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base mt-0.5">{item.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.topic}</p>
                    </div>
                  </div>

                  <div>
                    {isCurrent ? (
                      <Link 
                        href={`/lesson/${item.day}`}
                        className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Start Lesson
                      </Link>
                    ) : isCompleted ? (
                      <Link 
                        href={`/lesson/${item.day}`}
                        className="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold text-xs hover:bg-emerald-100 transition-colors"
                      >
                        Review
                      </Link>
                    ) : (
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-600 px-3 py-1.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50">
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
