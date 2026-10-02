import React from 'react';
import { ViewTab } from '../types/resume';
import { Printer, Download, Sparkles } from 'lucide-react';

interface TopNavProps {
  currentTab: ViewTab;
  onTabChange: (tab: ViewTab) => void;
  onPrint: () => void;
  onShare: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentTab,
  onTabChange,
  onPrint,
  onShare,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onTabChange('document')}
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-heading hover:text-[#16325c] transition-colors text-left"
          >
            Rohit Kumar
          </button>
        </div>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="flex items-center gap-1 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600 overflow-x-auto py-1">
          <button
            onClick={() => onTabChange('document')}
            className={`whitespace-nowrap transition-colors py-1 px-1.5 sm:px-0 border-b-2 ${
              currentTab === 'document'
                ? 'text-[#16325c] font-semibold border-[#16325c]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => onTabChange('showcase')}
            className={`whitespace-nowrap transition-colors py-1 px-1.5 sm:px-0 border-b-2 ${
              currentTab === 'showcase'
                ? 'text-[#16325c] font-semibold border-[#16325c]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => onTabChange('editor')}
            className={`whitespace-nowrap transition-colors py-1 px-1.5 sm:px-0 border-b-2 ${
              currentTab === 'editor'
                ? 'text-[#16325c] font-semibold border-[#16325c]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Studio Edit
          </button>
          <button
            onClick={() => onTabChange('ats')}
            className={`whitespace-nowrap transition-colors py-1 px-1.5 sm:px-0 border-b-2 ${
              currentTab === 'ats'
                ? 'text-[#16325c] font-semibold border-[#16325c]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            ATS Scanner
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#16325c] rounded-md hover:bg-[#112444] transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            title="Download or Print PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / Save PDF</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </div>
    </header>
  );
};
