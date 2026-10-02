import React, { useState } from 'react';
import { portfolioWorks, PortfolioWork } from '../data/initialResumeData';
import { Sparkles, Camera, Sliders, Check, Copy, ExternalLink, X, Award, ChevronRight } from 'lucide-react';

interface PortfolioShowcaseProps {
  onBackToResume: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onBackToResume }) => {
  // Aethel Prompt Generator Interactive State
  const [goal, setGoal] = useState('Build an automated video workflow for college campus event coverage');
  const [tasks, setTasks] = useState('Ingest footage -> Clean audio in Premiere Pro -> Cut short clips in CapCut -> Generate social banners in Canva');
  const [dependencies, setDependencies] = useState('Raw 4K footage from DSLR, branded audio intro stinger');
  const [parallelPaths, setParallelPaths] = useState('Path A: 60-second vertical reels for Instagram; Path B: 5-minute landscape recap for YouTube');
  const [decisions, setDecisions] = useState('If footage lighting is below threshold, apply contrast LUT; else keep natural grade');
  const [mergeOutput, setMergeOutput] = useState('Export MP4 H.264 + 1080x1920 9:16 + Canva thumbnail pack');
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Lightbox Modal for Photography
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioWork | null>(null);

  const handleGeneratePrompt = () => {
    const formatted = `=== AETHEL STRUCTURED PROMPT FRAMEWORK ===
[GOAL]
${goal}

[CORE TASKS & SEQUENCING]
${tasks}

[DEPENDENCIES & PREREQUISITES]
${dependencies}

[PARALLEL EXECUTION PATHS]
${parallelPaths}

[DECISION MATRIX & BRANCHING]
${decisions}

[MERGE & FINAL DELIVERABLE OUTPUT]
${mergeOutput}

[QUALITY CONSTRAINTS]
Enforce crisp pacing, maintain professional color fidelity, and avoid generic filler.`;
    setGeneratedPrompt(formatted);
  };

  const handleCopyPrompt = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Intro Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-xs font-semibold text-[#16325c] tracking-wider uppercase">
            Work Showcase & Interactive Lab
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading mt-1">
            Projects & Creative Works
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Live interactive demonstrations of Rohit Kumar&apos;s AI prompt engineering framework, award-winning photography, video editing workflows, and technical achievements.
          </p>
        </div>
        <button
          onClick={onBackToResume}
          className="text-xs font-medium text-[#16325c] hover:underline flex items-center gap-1 cursor-pointer"
        >
          View Full Document Resume <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Feature 1: Interactive Aethel AI Prompt Generator */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 bg-slate-900 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Project
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 font-heading">
                Aethel — AI Prompt Generator
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                A structured prompting framework developed by Rohit Kumar based on Goals, Tasks, Dependencies, Parallel Paths, Decisions, Merge and Output.
              </p>
            </div>
            <button
              onClick={handleGeneratePrompt}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              Build Framework Prompt
            </button>
          </div>
        </div>

        {/* Framework Interactive Builder Fields */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-2">
              Framework Variables
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                1. Goal (Primary Objective)
              </label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-[#16325c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                2. Tasks & Sequential Steps
              </label>
              <textarea
                rows={2}
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-[#16325c] focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                3. Dependencies & Inputs
              </label>
              <input
                type="text"
                value={dependencies}
                onChange={(e) => setDependencies(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-[#16325c] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                4. Parallel Execution Paths
              </label>
              <input
                type="text"
                value={parallelPaths}
                onChange={(e) => setParallelPaths(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-[#16325c] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  5. Decision Matrix
                </label>
                <input
                  type="text"
                  value={decisions}
                  onChange={(e) => setDecisions(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-[#16325c] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  6. Merge & Output Spec
                </label>
                <input
                  type="text"
                  value={mergeOutput}
                  onChange={(e) => setMergeOutput(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-md focus:ring-2 focus:ring-[#16325c] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Generated Result Output */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                Generated Framework Prompt
              </h3>
              {generatedPrompt && (
                <button
                  onClick={handleCopyPrompt}
                  className="text-xs text-[#16325c] hover:text-slate-900 flex items-center gap-1 font-medium transition-colors"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {generatedPrompt ? (
              <div className="flex-1 bg-slate-900 text-slate-200 p-4 rounded-lg font-mono text-[11px] leading-relaxed overflow-y-auto whitespace-pre-wrap max-h-[360px] border border-slate-800">
                {generatedPrompt}
              </div>
            ) : (
              <div className="flex-1 min-h-[240px] border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center p-6 text-center text-slate-500">
                <Sparkles className="w-8 h-8 text-slate-300 mb-2" />
                <p className="text-xs font-medium text-slate-700">
                  Ready to construct structured prompt
                </p>
                <p className="text-[11px] text-slate-400 mt-1 max-w-xs">
                  Click &quot;Build Framework Prompt&quot; above to compose the prompt using Rohit&apos;s modular methodology.
                </p>
                <button
                  onClick={handleGeneratePrompt}
                  className="mt-4 px-3 py-1.5 text-xs bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors"
                >
                  Compile Demo Now
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature 2: Photography & Visual Arts Showcase */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-amber-700 text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              1st Position — College-Level Photography Competition
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading">
              Photography Portfolio
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Shot across Bilaspur & Himachal Pradesh
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedPhoto(work)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {work.awardOrBadge && (
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-medium truncate">
                    {work.awardOrBadge}
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-[#16325c] uppercase tracking-wide">
                    {work.category}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-[#16325c] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature 3: Digital & Technical Skillset Matrix */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-heading mb-4">
          Technical Workflow Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="space-y-2 border-l-2 border-[#16325c] pl-3">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Content & Video
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Adobe Premiere Pro timeline pacing, CapCut multi-format short video cutting, color grading, audio leveling.
            </p>
          </div>
          <div className="space-y-2 border-l-2 border-amber-600 pl-3">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Design & Visual
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Adobe Photoshop photo retouching, Canva marketing templates, branding layouts, social media collateral.
            </p>
          </div>
          <div className="space-y-2 border-l-2 border-emerald-600 pl-3">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              AI & Automation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              ChatGPT, Claude Artifacts, Gemini, structured prompt templates, Make.com automated scenario workflows.
            </p>
          </div>
          <div className="space-y-2 border-l-2 border-purple-600 pl-3">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Discipline & Credentials
            </h3>
            <p className="text-slate-600 leading-relaxed">
              NCC A Certificate (2019), Rover Ranger Nipun (2026), NSQF Level 4 Automobile certification.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors z-10"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16325c] uppercase">
                <span>{selectedPhoto.category}</span>
                {selectedPhoto.awardOrBadge && (
                  <>
                    <span className="text-slate-300">·</span>
                    <span className="text-amber-700">{selectedPhoto.awardOrBadge}</span>
                  </>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1 font-heading">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedPhoto.description}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Portfolio Highlights
                </h4>
                <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                  {selectedPhoto.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
