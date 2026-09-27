"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Flame, Zap, Award, User, Settings, CheckCircle2, Star } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"stats" | "leaderboard">("stats");

  const leaderboardUsers = [
    { rank: 1, name: "Farhod S.", xp: 1450, avatar: "FS", badge: "🏆" },
    { rank: 2, name: "Malika R.", xp: 1220, avatar: "MR", badge: "🥈" },
    { rank: 3, name: "Jaborzoda (You)", xp: 450, avatar: "JZ", badge: "🥉", isMe: true },
    { rank: 4, name: "Shahrom K.", xp: 390, avatar: "SK", badge: "" },
    { rank: 5, name: "Zuhro N.", xp: 310, avatar: "ZN", badge: "" },
  ];

  const achievements = [
    { title: "First Step", desc: "Completed your first lesson", icon: "🚀", unlocked: true },
    { title: "Word Collector", desc: "Saved 5 words in dictionary", icon: "📚", unlocked: true },
    { title: "Streak Master", desc: "Reached a 3-day active streak", icon: "🔥", unlocked: true },
    { title: "Polyglot Pro", desc: "Complete CEFR A1 Level", icon: "👑", unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-16">
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
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <User className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">User Profile</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto px-4 py-8 space-y-8">
        
        {/* User Card Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-ext500 font-bold shadow-xl shadow-blue-500/20">
            JZ
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Jaborzoda</h1>
              <span className="inline-block bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-0.5 rounded-full text-xs">
                CEFR A1 Student
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Member since September 2026 • ZABON Academy</p>

            {/* Stats Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900/50">
                <Flame className="w-4 h-4 fill-current" />
                <span>3 Day Streak</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900/50">
                <Zap className="w-4 h-4 fill-current" />
                <span>450 Total XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-slate-200/60 dark:bg-slate-900 p-1.5 rounded-2xl max-w-sm mx-auto sm:mx-0">
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "stats" 
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Achievements & Stats
          </button>
          <button
            onClick={() => setActiveTab("leaderboard")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "leaderboard" 
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" 
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Leaderboard
          </button>
        </div>

        {/* Tab Content: Achievements & Stats */}
        {activeTab === "stats" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Your Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-3xl border flex items-center gap-4 transition-all ${
                    item.unlocked 
                      ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm" 
                      : "bg-slate-100/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                    <span className={`inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.unlocked 
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" 
                        : "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    }`}>
                      {item.unlocked ? "Unlocked" : "Locked"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Leaderboard */}
        {activeTab === "leaderboard" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Weekly Leaderboard</h2>
              <span className="text-xs text-slate-500 dark:text-slate-400">Resets every Monday</span>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              {leaderboardUsers.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 last:border-none ${
                    user.isMe ? "bg-blue-50/50 dark:bg-blue-950/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 text-center font-bold text-sm ${
                      user.rank === 1 ? "text-amber-500" : user.rank === 2 ? "text-slate-400" : user.rank === 3 ? "text-amber-700" : "text-slate-500"
                    }`}>
                      #{user.rank}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                      {user.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                        {user.name} <span>{user.badge}</span>
                      </h3>
                      {user.isMe && <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">That's you</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 text-sm">
                    <Zap className="w-4 h-4 fill-current" />
                    <span>{user.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
