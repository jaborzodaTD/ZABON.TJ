"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Flame, 
  Zap, 
  BookOpen, 
  Sparkles, 
  Languages, 
  Award, 
  Compass, 
  User, 
  Settings, 
  ChevronRight,
  BookmarkCheck,
  TrendingUp
} from "lucide-react";

export default function DashboardPage() {
  const [streak] = useState(7);
  const [xp] = useState(450);
  const [level] = useState(3);
  const [dailyGoalPercent] = useState(80);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-12">
      {/* Top Header Bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md shadow-blue-500/20">
                Z
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white hidden sm:inline">ZABON</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">
              <span>🇬🇧 English</span>
              <span className="text-slate-400">→</span>
              <span>🇹🇯 Tajik</span>
            </div>
          </div>

          {/* Gamification Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 px-3 py-1.5 rounded-full text-amber-600 dark:text-amber-400 font-semibold text-sm">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{streak} days</span>
            </div>

            <div className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 px-3 py-1.5 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-sm">
              <Zap className="w-4 h-4 fill-blue-500 text-blue-500" />
              <span>{xp} XP</span>
            </div>

            <Link 
              href="/profile" 
              className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold hover:ring-2 hover:ring-blue-500 transition-all"
            >
              JF
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left/Main Column: Courses & Daily Progress */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-500/10">
            <span className="inline-block bg-white/25 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              Level {level} Scholar
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Ready to learn today, Jaborzoda?
            </h1>
            <p className="text-blue-100 text-sm max-w-lg mb-6">
              Complete today's daily goal to maintain your {streak}-day streak and unlock bonus XP rewards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/learn" 
                className="px-6 py-3 rounded-2xl bg-white text-blue-600 font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors"
              >
                Continue Course
              </Link>
              <Link 
                href="/ai" 
                className="px-6 py-3 rounded-2xl bg-blue-700/60 text-white font-bold text-sm border border-white/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                Practice with AI Tutor
              </Link>
            </div>
          </div>

          {/* Daily Goal Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Daily Goal</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">XP Earned Today: 40 / 50 XP</p>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{dailyGoalPercent}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${dailyGoalPercent}%` }}></div>
            </div>
          </div>

          {/* Quick Tools Grid */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Academy Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
              <Link href="/translate" className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Languages className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Smart Translator</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Multi-language translation</p>
              </Link>

              <Link href="/dictionary" className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Dictionary</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Deep word analysis</p>
              </Link>

              <Link href="/vocabulary" className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <BookmarkCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">My Vocabulary</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Saved words & SRS</p>
              </Link>

            </div>
          </div>

        </div>

        {/* Right Column: Sidebar Navigation & Leaderboard Preview */}
        <div className="space-y-6">
          
          {/* Navigation Menu Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 px-2">Navigation</h3>
            
            <Link href="/learn" className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Learn Courses</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link href="/ai" className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span>AI Tutor</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link href="/leaderboard" className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Leaderboard</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link href="/profile" className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-purple-500" />
                <span>My Profile</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link href="/settings" className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4 text-slate-500" />
                <span>Settings</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Active 30-Day Course Preview Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">30-Day Course</h3>
              <span className="text-xs bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold px-2 py-0.5 rounded-full">Day 4 / 30</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Topic: Family & Relationships</p>
            <Link 
              href="/learn" 
              className="block w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-center font-semibold text-xs text-slate-700 dark:text-slate-300 transition-all"
            >
              Resume Lesson
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}
