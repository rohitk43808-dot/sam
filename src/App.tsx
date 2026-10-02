import React, { useState, useEffect } from 'react';
import { ResumeData, ViewTab } from './types/resume';
import { initialResumeData } from './data/initialResumeData';
import { TopNav } from './components/TopNav';
import { ResumeDocument } from './components/ResumeDocument';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ResumeEditor } from './components/ResumeEditor';
import { AtsAnalysis } from './components/AtsAnalysis';
import {
  Printer,
  Edit3,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  Share2,
  Check,
  RotateCcw,
  Image as ImageIcon,
  Eye,
  Briefcase,
  FileCheck,
} from 'lucide-react';

const STORAGE_KEY = 'rohit_kumar_resume_data_v1';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return initialResumeData;
  });

  const [currentTab, setCurrentTab] = useState<ViewTab>('document');
  const [scale, setScale] = useState<number>(1);
  const [showPhoto, setShowPhoto] = useState<boolean>(true);
  const [highlightSection, setHighlightSection] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    } catch {
      // ignore
    }
  }, [resumeData]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyFeedback('Link copied to clipboard!');
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handleResetData = () => {
    if (window.confirm('Reset all changes back to the original resume details?')) {
      setResumeData(initialResumeData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleSelectSectionFromDoc = (sectionKey: string) => {
    setHighlightSection(sectionKey);
    setCurrentTab('editor');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* 3-Zone Top Navigation */}
      <TopNav
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onPrint={handlePrint}
        onShare={handleShare}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* TAB 1: EXACT RESUME DOCUMENT VIEW */}
        {currentTab === 'document' && (
          <div className="py-6 px-3 sm:px-6">
            {/* Document Controls Ribbon */}
            <div className="no-print max-w-[850px] mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-lg border border-slate-200/90 shadow-sm text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Exact Document View
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500 hidden sm:inline">A4 Standard Format</span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Zoom Controls */}
                <div className="flex items-center bg-slate-100 rounded p-0.5 border border-slate-200">
                  <button
                    onClick={() => setScale((s) => Math.max(0.75, Number((s - 0.1).toFixed(2))))}
                    className="p-1 hover:bg-white rounded transition-colors text-slate-700"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 font-mono text-[11px] text-slate-600">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={() => setScale((s) => Math.min(1.25, Number((s + 0.1).toFixed(2))))}
                    className="p-1 hover:bg-white rounded transition-colors text-slate-700"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setScale(1)}
                    className="p-1 hover:bg-white rounded transition-colors text-slate-700 ml-0.5"
                    title="Reset to 100%"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Photo Toggle */}
                <button
                  onClick={() => setShowPhoto(!showPhoto)}
                  className={`px-2.5 py-1 rounded border text-xs flex items-center gap-1 transition-colors ${
                    showPhoto
                      ? 'bg-amber-50 text-amber-900 border-amber-200'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                  title="Toggle Portrait Photo"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Photo</span>
                </button>

                {/* Edit Button */}
                <button
                  onClick={() => setCurrentTab('editor')}
                  className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded text-xs flex items-center gap-1 font-medium transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#16325c]" />
                  <span>Edit Resume</span>
                </button>

                {/* Reset Button */}
                <button
                  onClick={handleResetData}
                  className="p-1.5 hover:bg-slate-100 text-slate-500 rounded border border-transparent hover:border-slate-200 transition-colors"
                  title="Reset to uploaded resume"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Share Feedback Toast */}
            {copyFeedback && (
              <div className="no-print max-w-sm mx-auto mb-4 p-2.5 bg-slate-900 text-white text-xs rounded-lg text-center flex items-center justify-center gap-2 shadow-lg animate-fade-in">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{copyFeedback}</span>
              </div>
            )}

            {/* The Pixel-Perfect Resume Document */}
            <div className="overflow-x-auto pb-8">
              <ResumeDocument
                data={resumeData}
                scale={scale}
                highlightSection={highlightSection}
                onSelectSection={handleSelectSectionFromDoc}
                showPhoto={showPhoto}
              />
            </div>

            {/* Quick action bar below document */}
            <div className="no-print max-w-[850px] mx-auto mt-6 p-4 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
              <div className="flex items-center gap-4 text-slate-600">
                <span>Looking for technical roles across IT, digital & creative</span>
                <span className="text-slate-300 hidden md:inline">·</span>
                <span className="hidden md:inline">Himachal Pradesh, India</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTab('showcase')}
                  className="text-[#16325c] hover:underline font-medium flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Explore Aethel & Portfolio
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => setCurrentTab('ats')}
                  className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  ATS Scan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE PORTFOLIO & WORK SHOWCASE */}
        {currentTab === 'showcase' && (
          <PortfolioShowcase onBackToResume={() => setCurrentTab('document')} />
        )}

        {/* TAB 3: RESUME STUDIO EDITOR */}
        {currentTab === 'editor' && (
          <ResumeEditor
            data={resumeData}
            onChange={setResumeData}
            onReset={handleResetData}
            onPreview={() => setCurrentTab('document')}
          />
        )}

        {/* TAB 4: ATS SCANNER & RECRUITER VIEW */}
        {currentTab === 'ats' && (
          <AtsAnalysis
            data={resumeData}
            onNavigateToResume={() => setCurrentTab('document')}
          />
        )}
      </main>
    </div>
  );
}
