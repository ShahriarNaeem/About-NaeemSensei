import React from 'react';
import { Moon, Sun, Layers, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'navbar' | 'floating' | 'footer';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'navbar' }) => {
  const { theme, toggleTheme, setTheme } = useTheme();

  if (variant === 'floating') {
    return (
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 border border-slate-700 dark:border-slate-300"
        aria-label={`Switch to ${theme === 'paper' ? 'Slate' : 'Paper'} mode`}
        title={`Current: ${theme === 'paper' ? 'Paper (Light)' : 'Slate (Dark)'} Mode. Click to switch.`}
      >
        {theme === 'paper' ? (
          <>
            <Moon className="w-4 h-4 text-blue-300" />
            <span className="text-xs font-semibold pr-1 hidden sm:inline">Slate Mode</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold pr-1 hidden sm:inline">Paper Mode</span>
          </>
        )}
      </button>
    );
  }

  // Segmented compact button in Navbar
  return (
    <div className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium">
      <button
        type="button"
        onClick={() => setTheme('paper')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
          theme === 'paper'
            ? 'bg-white text-slate-900 shadow-2xs font-semibold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Paper Mode: Clean architectural light paper theme"
      >
        <FileText className="w-3.5 h-3.5 text-amber-600" />
        <span className="hidden sm:inline">Paper</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('slate')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
          theme === 'slate'
            ? 'bg-slate-900 text-white shadow-2xs font-semibold dark:bg-slate-700'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Slate Mode: Refined dark engineering theme"
      >
        <Moon className="w-3.5 h-3.5 text-blue-400" />
        <span className="hidden sm:inline">Slate</span>
      </button>
    </div>
  );
};
