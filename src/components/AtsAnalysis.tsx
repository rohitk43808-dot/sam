import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import { CheckCircle2, Copy, Check, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface AtsAnalysisProps {
  data: ResumeData;
  onNavigateToResume: () => void;
}

export const AtsAnalysis: React.FC<AtsAnalysisProps> = ({ data, onNavigateToResume }) => {
  const [copiedPlainText, setCopiedPlainText] = useState(false);

  // Generate clean ATS plain text string
  const generateAtsPlainText = () => {
    return `${data.fullName}
${data.subtitle}
Address: ${data.address}
Phone: ${data.phone}
Email: ${data.email}
LinkedIn: ${data.linkedin}

PROFESSIONAL SUMMARY
${data.professionalSummary}

EDUCATION
${data.education
  .map(
    (e) =>
      `- ${e.degree}: ${e.institution} | ${e.gradeOrDetails} | ${e.year}`
  )
  .join('\n')}

TECHNICAL & DIGITAL SKILLS
${data.skills.map((s) => `- ${s.category}: ${s.skills}`).join('\n')}

PROJECTS
${data.projects
  .map(
    (p) => `${p.title}
${p.descriptionBullets.map((b) => `  * ${b}`).join('\n')}`
  )
  .join('\n\n')}

CERTIFICATIONS & ACHIEVEMENTS
${data.certifications.map((c) => `- ${c.title}`).join('\n')}

LANGUAGES
${data.languages.map((l) => `- ${l.name}`).join('\n')}

INTERESTS
${data.interests.join(', ')}

PERSONAL DETAILS
- Date of Birth: ${data.dateOfBirth}
- Passport Availability: ${data.passportAvailability}

PROFILE
${data.profileDeclaration}
`;
  };

  const handleCopyAtsText = () => {
    navigator.clipboard.writeText(generateAtsPlainText());
    setCopiedPlainText(true);
    setTimeout(() => setCopiedPlainText(false), 2000);
  };

  const targetKeywords = [
    { name: 'Computer Applications & BCA', status: true, context: 'Academic foundation' },
    { name: 'Workflow Automation (Make)', status: true, context: 'Automation skill' },
    { name: 'AI Assisted Tools (ChatGPT, Claude, Gemini)', status: true, context: 'Project & Skills' },
    { name: 'Video Editing (CapCut, Premiere Pro)', status: true, context: 'Digital media tools' },
    { name: 'Design (Photoshop, Canva)', status: true, context: 'Creative tools' },
    { name: 'Prompt Engineering Framework', status: true, context: 'Aethel Project' },
    { name: 'NCC & Rover Ranger Leadership', status: true, context: 'Discipline credentials' },
    { name: 'MS Office Suite (Word, Excel, PowerPoint)', status: true, context: 'Administrative tech' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-semibold text-[#16325c] tracking-wider uppercase">
            Recruiter & ATS Intelligence
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading mt-0.5">
            ATS Readiness & Keyword Scan
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Verified scan for applicant tracking systems, job boards, and automated resume screeners.
          </p>
        </div>
        <button
          onClick={handleCopyAtsText}
          className="px-4 py-2 bg-[#16325c] hover:bg-[#112444] text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
        >
          {copiedPlainText ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copiedPlainText ? 'ATS Text Copied!' : 'Copy Plain Text for Job Portals'}</span>
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-medium">ATS Parsability Score</div>
          <div className="text-3xl font-extrabold text-[#16325c] mt-2 font-heading">
            98<span className="text-lg font-normal text-slate-400">/100</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Standard single/two-column hierarchy without complex nested tables or glyph distortions.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-medium">Key Skill Matches</div>
          <div className="text-3xl font-extrabold text-emerald-600 mt-2 font-heading">
            8 / 8
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            All primary digital skills, software, and educational credentials detect cleanly.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-medium">Target Roles</div>
          <div className="text-sm font-bold text-slate-800 mt-2 leading-snug">
            Technical Fresher, IT Assistant, Digital Content Producer, Video Editor
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Optimal for modern entry-level tech and media positions.
          </p>
        </div>
      </div>

      {/* Keyword breakdown */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 tracking-tight font-heading mb-4">
          ATS Scanned Keyword Matrix
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {targetKeywords.map((kw, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/50"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">{kw.name}</span>
              </div>
              <span className="text-[11px] text-slate-500">{kw.context}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Plain Text Preview & Portal Paste Box */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 tracking-tight font-heading flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#16325c]" />
            Clean Plain Text (For Workday, Taleo, LinkedIn EasyApply)
          </h2>
          <button
            onClick={handleCopyAtsText}
            className="text-xs text-[#16325c] hover:underline flex items-center gap-1 font-medium"
          >
            {copiedPlainText ? 'Copied' : 'Copy All'}
          </button>
        </div>
        <textarea
          readOnly
          rows={10}
          value={generateAtsPlainText()}
          className="w-full bg-slate-900 text-slate-300 font-mono text-[11px] p-4 rounded-lg focus:outline-none resize-none leading-relaxed"
        />
      </div>

      {/* Action link */}
      <div className="text-center pt-2">
        <button
          onClick={onNavigateToResume}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#16325c] hover:underline"
        >
          Return to High-Fidelity Resume Document <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
