import React from 'react';
import { ResumeData } from '../types/resume';
import { ExternalLink, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';

interface ResumeDocumentProps {
  data: ResumeData;
  scale?: number;
  highlightSection?: string | null;
  onSelectSection?: (sectionKey: string) => void;
  showPhoto?: boolean;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  data,
  scale = 1,
  highlightSection,
  onSelectSection,
  showPhoto = true,
}) => {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div
      style={{
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: 'top center',
      }}
      className="transition-transform duration-200"
    >
      {/* A4 Sheet Container */}
      <div
        id="resume-document-sheet"
        className="print-page w-full max-w-[850px] mx-auto bg-white text-slate-900 shadow-2xl rounded-sm p-8 sm:p-12 md:p-14 select-text border border-slate-200/80 transition-all relative overflow-hidden"
      >
        {/* Header Section */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4 pb-4">
          <div className="flex-1 pr-2">
            <h1
              className="text-2xl sm:text-3xl md:text-[34px] font-black tracking-tight text-[#16325c] uppercase leading-none font-heading"
              title="Rohit Kumar"
            >
              {data.fullName}
            </h1>
            <p className="mt-1.5 text-xs sm:text-[13px] md:text-sm font-semibold tracking-wider text-slate-800 uppercase">
              {data.subtitle}
            </p>

            {/* Contact details */}
            <div className="mt-3 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
              <p className="flex flex-wrap items-center gap-x-1.5">
                <span>{data.address}</span>
                <span className="text-slate-400">|</span>
                <span className="inline-flex items-center gap-1 group">
                  <a
                    href={`tel:${data.phone}`}
                    className="hover:text-[#16325c] transition-colors"
                  >
                    {data.phone}
                  </a>
                  <button
                    onClick={(e) => handleCopy(data.phone, 'phone', e)}
                    className="no-print opacity-0 group-hover:opacity-100 hover:text-slate-900 transition-opacity p-0.5 text-slate-400"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </span>
                <span className="text-slate-400">|</span>
              </p>
              <p className="flex items-center gap-1.5 mt-0.5 group">
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-[#16325c] hover:underline transition-colors"
                >
                  {data.email}
                </a>
                <button
                  onClick={(e) => handleCopy(data.email, 'email', e)}
                  className="no-print opacity-0 group-hover:opacity-100 hover:text-slate-900 transition-opacity p-0.5 text-slate-400"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </p>
              <p className="mt-0.5">
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16325c] hover:underline transition-colors inline-flex items-center gap-1"
                >
                  {data.linkedinDisplay}
                  <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                </a>
              </p>
            </div>
          </div>

          {/* Profile Photo with Gold / Brass Border */}
          {showPhoto && data.photoUrl && (
            <div className="shrink-0 self-start sm:self-auto sm:ml-4">
              <div
                className="w-24 h-28 sm:w-28 sm:h-32 p-0.5 shadow-sm bg-white"
                style={{
                  border: `2px solid ${data.photoBorderColor || '#b89552'}`,
                }}
              >
                <img
                  src={data.photoUrl}
                  alt={data.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to avatar if missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Heavy Dark Divider Bar */}
        <div className="h-[2px] bg-slate-900 my-3 w-full" />

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-5 text-slate-800 mt-4">
          {/* ================= LEFT COLUMN (Col 1-7) ================= */}
          <div className="md:col-span-7 flex flex-col gap-5">
            {/* 1. PROFESSIONAL SUMMARY */}
            <section
              onClick={() => onSelectSection?.('summary')}
              className={`group transition-all ${
                highlightSection === 'summary'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[11.5px] sm:text-[12.5px] text-slate-700 leading-relaxed text-justify">
                {data.professionalSummary}
              </p>
            </section>

            {/* 2. EDUCATION */}
            <section
              onClick={() => onSelectSection?.('education')}
              className={`group transition-all ${
                highlightSection === 'education'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                EDUCATION
              </h2>
              <div className="space-y-2.5 text-[11.5px] sm:text-[12.5px]">
                {data.education.map((edu) => (
                  <div key={edu.id} className="leading-snug">
                    <p className="font-semibold text-slate-900">
                      {edu.degree} — {edu.institution}
                    </p>
                    <p className="text-slate-600 text-[11px] sm:text-[12px] mt-0.5">
                      {edu.gradeOrDetails}{' '}
                      {edu.year && (
                        <>
                          <span className="text-slate-400">|</span> {edu.year}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. TECHNICAL & DIGITAL SKILLS */}
            <section
              onClick={() => onSelectSection?.('skills')}
              className={`group transition-all ${
                highlightSection === 'skills'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                TECHNICAL & DIGITAL SKILLS
              </h2>
              <div className="space-y-1.5 text-[11.5px] sm:text-[12.5px]">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="text-slate-800">
                    <span className="font-medium text-slate-900">
                      {skill.category}
                    </span>
                    {skill.skills ? (
                      <>
                        <span className="text-slate-500 font-normal"> — </span>
                        <span className="text-slate-700">{skill.skills}</span>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PROJECT */}
            <section
              onClick={() => onSelectSection?.('projects')}
              className={`group transition-all ${
                highlightSection === 'projects'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                PROJECT
              </h2>
              {data.projects.map((proj) => (
                <div key={proj.id} className="text-[11.5px] sm:text-[12.5px]">
                  <p className="font-semibold text-slate-900 mb-1.5">
                    {proj.title}
                  </p>
                  <ul className="space-y-1 text-slate-700 list-disc list-outside pl-4 leading-relaxed">
                    {proj.descriptionBullets.map((bullet, idx) => (
                      <li key={idx} className="pl-0.5">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* ================= RIGHT COLUMN (Col 8-12) ================= */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* 1. CERTIFICATIONS & ACHIEVEMENTS */}
            <section
              onClick={() => onSelectSection?.('certifications')}
              className={`group transition-all ${
                highlightSection === 'certifications'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                CERTIFICATIONS & ACHIEVEMENTS
              </h2>
              <div className="space-y-1.5 text-[11.5px] sm:text-[12.5px] text-slate-700">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="leading-snug">
                    <span>{cert.title}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. LANGUAGES */}
            <section
              onClick={() => onSelectSection?.('languages')}
              className={`group transition-all ${
                highlightSection === 'languages'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                LANGUAGES
              </h2>
              <div className="space-y-1 text-[11.5px] sm:text-[12.5px] text-slate-700">
                {data.languages.map((lang) => (
                  <div key={lang.id}>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. INTERESTS */}
            <section
              onClick={() => onSelectSection?.('interests')}
              className={`group transition-all ${
                highlightSection === 'interests'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                INTERESTS
              </h2>
              <div className="space-y-1 text-[11.5px] sm:text-[12.5px] text-slate-700">
                {data.interests.map((interest, idx) => (
                  <div key={idx}>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PERSONAL DETAILS */}
            <section
              onClick={() => onSelectSection?.('personal')}
              className={`group transition-all ${
                highlightSection === 'personal'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                PERSONAL DETAILS
              </h2>
              <div className="space-y-1.5 text-[11.5px] sm:text-[12.5px] text-slate-700">
                <div>
                  <span className="font-normal">Date of Birth</span>
                  <span className="text-slate-400"> — </span>
                  <span>{data.dateOfBirth}</span>
                </div>
                <div>
                  <span className="font-normal">Passport availability</span>
                  <span className="text-slate-400"> - </span>
                  <span>{data.passportAvailability}</span>
                </div>
              </div>
            </section>

            {/* 5. PROFILE */}
            <section
              onClick={() => onSelectSection?.('profile')}
              className={`group transition-all ${
                highlightSection === 'profile'
                  ? 'bg-amber-50/70 p-2 -m-2 rounded'
                  : ''
              }`}
            >
              <h2 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2 font-heading">
                PROFILE
              </h2>
              <p className="text-[11.5px] sm:text-[12.5px] text-slate-700 leading-relaxed">
                {data.profileDeclaration}
              </p>
            </section>
          </div>
        </div>

        {/* Footer Area */}
        <div className="mt-10 pt-4 border-t border-slate-300 text-center">
          <p className="text-[11px] sm:text-xs tracking-[0.25em] text-slate-700 font-semibold uppercase font-heading">
            {data.footerTagline}
          </p>
        </div>
      </div>
    </div>
  );
};
