"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Settings, Key, Database, Users, BookOpen, CheckCircle, Save, AlertTriangle } from "lucide-react";

export default function AdminPage() {
  const [apiKey, setApiKey] = useState("");
  const [translationKey, setTranslationKey] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

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
              <div className="w-8 h-8 rounded-xl bg-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">Admin Control Center</span>
            </div>
          </div>

          <span className="text-xs bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-semibold px-2.5 py-1 rounded-full">
            Restricted Access
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl w-full mx-auto px-4 py-8 space-y-8">
        
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Total Students</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">1,245</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">+18% this week</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Active Lessons</span>
              <BookOpen className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">30 Days</p>
            <p className="text-xs text-slate-400">CEFR A1 Curriculum</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>Database Status</span>
              <Database className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">Online</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">PostgreSQL Connected</p>
          </div>
        </div>

        {/* API Credentials Configuration Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <Key className="w-6 h-6 text-rose-600" />
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">API Keys & Provider Configuration</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Manage environment secrets for AI Tutor and Translator integration</p>
            </div>
          </div>

          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                OpenAI API Key (`OPENAI_API_KEY`)
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Translation Provider API Key (`TRANSLATION_API_KEY`)
              </label>
              <input
                type="password"
                value={translationKey}
                onChange={(e) => setTranslationKey(e.target.value)}
                placeholder="api-key-..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              {isSaved ? (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Settings updated successfully!</span>
                </div>
              ) : (
                <div className="text-xs text-slate-400 italic">
                  Changes require restarting or environment reload.
                </div>
              )}

              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/20 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Configuration</span>
              </button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}
