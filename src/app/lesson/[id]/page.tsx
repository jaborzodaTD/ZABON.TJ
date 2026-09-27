"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { X, CheckCircle, AlertCircle, ArrowRight, Zap, Trophy, RefreshCcw } from "lucide-react";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params?.id || "4";

  // Список тестовых упражнений для примера урока (Day 4: Family)
  const exercises = [
    {
      id: 1,
      type: "MULTIPLE_CHOICE",
      question: "Как переводится слово «Mother»?",
      options: ["Мать", "Отец", "Брат", "Сестра"],
      correct: "Мать",
      hint: "Это самый близкий член семьи женского пола."
    },
    {
      id: 2,
      type: "MULTIPLE_CHOICE",
      question: "Выберите перевод для «Brother»:",
      options: ["Дедушка", "Брат", "Дядя", "Сын"],
      correct: "Брат",
      hint: "Это мальчик или мужчина по отношению к другим детям тех же родителей."
    },
    {
      id: 3,
      type: "MULTIPLE_CHOICE",
      question: "Как сказать «Моя семья» по-английски?",
      options: ["Your family", "My family", "Our family", "His family"],
      correct: "My family",
      hint: "Местоимение «Мой» — My."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const currentExercise = exercises[currentIndex];
  const progressPercent = ((currentIndex) / exercises.length) * 100;

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    const correct = selectedOption === currentExercise.correct;
    setIsCorrect(correct);
    setIsAnswered(true);
    if (correct) {
      setEarnedXP(prev => prev + 15);
    }
  };

  const handleNextExercise = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);

    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-950/50 text-amber-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">Lesson Complete!</span>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Day {lessonId} Finished Successfully!</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              You did an amazing job practicing vocabulary and strengthening your skills.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 rounded-2xl p-4 flex items-center justify-center gap-3">
            <Zap className="w-6 h-6 fill-blue-500 text-blue-500" />
            <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">+{earnedXP + 50} XP Earned</span>
          </div>

          <div className="space-y-3 pt-2">
            <Link 
              href="/learn"
              className="block w-full py-3.5 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Continue Roadmap
            </Link>
            <Link 
              href="/dashboard"
              className="block w-full py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between">
      {/* Top Navigation & Progress */}
      <header className="max-w-3xl w-full mx-auto px-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <Link 
            href="/learn"
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </Link>
          <div className="flex-1 mx-6">
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-1 font-bold text-amber-500 text-sm">
            <Zap className="w-4 h-4 fill-current" />
            <span>{earnedXP}</span>
          </div>
        </div>
      </header>

      {/* Main Exercise Card */}
      <main className="max-w-2xl w-full mx-auto px-4 py-8 flex-1 flex flex-col justify-center">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Question {currentIndex + 1} of {exercises.length}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {currentExercise.question}
            </h2>
            {currentExercise.hint && (
              <p className="text-xs text-slate-400 dark:text-slate-500 italic">Hint: {currentExercise.hint}</p>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentExercise.options.map((option) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={option}
                  onClick={() => !isAnswered && setSelectedOption(option)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border text-left font-medium text-sm transition-all ${
                    isSelected 
                      ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 ring-2 ring-blue-600/20" 
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

        </div>
      </main>

      {/* Bottom Action Footer */}
      <footer className={`border-t transition-colors ${
        isAnswered 
          ? isCorrect 
            ? "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/50" 
            : "bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/50"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
      }`}>
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            {isAnswered && (
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <span className="font-bold text-emerald-800 dark:text-emerald-200 text-sm">Correct! Great job.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-6 h-6 text-rose-600" />
                    <span className="font-bold text-rose-800 dark:text-rose-200 text-sm">Incorrect. Correct answer: {currentExercise.correct}</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div>
            {!isAnswered ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${
                  selectedOption 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20" 
                    : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNextExercise}
                className="px-8 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
