import React, { useState } from 'react';
import { ResumeData, EducationItem, SkillCategory, CertificationItem } from '../types/resume';
import { initialResumeData } from '../data/initialResumeData';
import { RotateCcw, Plus, Trash2, Check, User, GraduationCap, Wrench, FolderGit2, Award, Globe, FileText } from 'lucide-react';

interface ResumeEditorProps {
  data: ResumeData;
  onChange: (updated: ResumeData) => void;
  onReset: () => void;
  onPreview: () => void;
}

export const ResumeEditor: React.FC<ResumeEditorProps> = ({
  data,
  onChange,
  onReset,
  onPreview,
}) => {
  const [activeSection, setActiveSection] = useState<
    'basic' | 'summary' | 'education' | 'skills' | 'projects' | 'certs' | 'other'
  >('basic');

  const updateField = <K extends keyof ResumeData>(field: K, value: ResumeData[K]) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  // Education helpers
  const handleEduChange = (id: string, field: keyof EducationItem, val: string) => {
    const updated = data.education.map((item) =>
      item.id === id ? { ...item, [field]: val } : item
    );
    updateField('education', updated);
  };

  const handleAddEdu = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: 'Course / Degree',
      institution: 'Institution / Board',
      gradeOrDetails: 'Grade or Score',
      year: 'Year',
    };
    updateField('education', [...data.education, newItem]);
  };

  const handleDeleteEdu = (id: string) => {
    updateField('education', data.education.filter((i) => i.id !== id));
  };

  // Skills helpers
  const handleSkillChange = (id: string, field: keyof SkillCategory, val: string) => {
    const updated = data.skills.map((item) =>
      item.id === id ? { ...item, [field]: val } : item
    );
    updateField('skills', updated);
  };

  const handleAddSkill = () => {
    const newItem: SkillCategory = {
      id: `skill-${Date.now()}`,
      category: 'New Domain',
      skills: 'Tools, Tech',
    };
    updateField('skills', [...data.skills, newItem]);
  };

  const handleDeleteSkill = (id: string) => {
    updateField('skills', data.skills.filter((i) => i.id !== id));
  };

  // Project bullets helper
  const handleBulletChange = (projId: string, index: number, val: string) => {
    const updated = data.projects.map((p) => {
      if (p.id === projId) {
        const bullets = [...p.descriptionBullets];
        bullets[index] = val;
        return { ...p, descriptionBullets: bullets };
      }
      return p;
    });
    updateField('projects', updated);
  };

  const handleAddBullet = (projId: string) => {
    const updated = data.projects.map((p) => {
      if (p.id === projId) {
        return {
          ...p,
          descriptionBullets: [...p.descriptionBullets, 'New impact bullet statement'],
        };
      }
      return p;
    });
    updateField('projects', updated);
  };

  const handleDeleteBullet = (projId: string, index: number) => {
    const updated = data.projects.map((p) => {
      if (p.id === projId) {
        return {
          ...p,
          descriptionBullets: p.descriptionBullets.filter((_, i) => i !== index),
        };
      }
      return p;
    });
    updateField('projects', updated);
  };

  // Certifications helper
  const handleAddCert = () => {
    const newCert: CertificationItem = {
      id: `cert-${Date.now()}`,
      title: 'Certification or Achievement Name — Year',
    };
    updateField('certifications', [...data.certifications, newCert]);
  };

  const handleCertChange = (id: string, val: string) => {
    const updated = data.certifications.map((c) =>
      c.id === id ? { ...c, title: val } : c
    );
    updateField('certifications', updated);
  };

  const handleDeleteCert = (id: string) => {
    updateField('certifications', data.certifications.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading">
            Resume Studio Editor
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Modify any text, reorder, or add qualifications. Updates apply instantly to the document.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Reset to uploaded resume"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
          </button>
          <button
            onClick={onPreview}
            className="px-3 py-1.5 text-xs bg-[#16325c] hover:bg-[#112444] text-white rounded font-medium transition-colors cursor-pointer"
          >
            Preview Document
          </button>
        </div>
      </div>

      {/* Editor Sub-nav Tabs */}
      <div className="flex flex-wrap gap-1 p-1 bg-slate-200/70 rounded-lg mb-6 text-xs">
        <button
          onClick={() => setActiveSection('basic')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'basic'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <User className="w-3.5 h-3.5" /> Personal
        </button>
        <button
          onClick={() => setActiveSection('summary')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'summary'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileText className="w-3.5 h-3.5" /> Summary
        </button>
        <button
          onClick={() => setActiveSection('education')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'education'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" /> Education
        </button>
        <button
          onClick={() => setActiveSection('skills')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'skills'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" /> Skills
        </button>
        <button
          onClick={() => setActiveSection('projects')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'projects'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5" /> Project
        </button>
        <button
          onClick={() => setActiveSection('certs')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'certs'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-3.5 h-3.5" /> Certifications
        </button>
        <button
          onClick={() => setActiveSection('other')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeSection === 'other'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Globe className="w-3.5 h-3.5" /> Details & Profile
        </button>
      </div>

      {/* Editor Content Area */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        {/* SECTION: BASIC INFO */}
        {activeSection === 'basic' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b pb-2">
              Header & Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={data.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Header Subtitle / Role Tagline
                </label>
                <input
                  type="text"
                  value={data.subtitle}
                  onChange={(e) => updateField('subtitle', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Address
                </label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={data.linkedin}
                  onChange={(e) => updateField('linkedin', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn Display Handle
                </label>
                <input
                  type="text"
                  value={data.linkedinDisplay}
                  onChange={(e) => updateField('linkedinDisplay', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Photo Border Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={data.photoBorderColor}
                    onChange={(e) => updateField('photoBorderColor', e.target.value)}
                    className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={data.photoBorderColor}
                    onChange={(e) => updateField('photoBorderColor', e.target.value)}
                    className="flex-1 text-xs p-2.5 border border-slate-300 rounded focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Footer Tagline
                </label>
                <input
                  type="text"
                  value={data.footerTagline}
                  onChange={(e) => updateField('footerTagline', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* SECTION: SUMMARY */}
        {activeSection === 'summary' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b pb-2">
              Professional Summary
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Executive Paragraph
              </label>
              <textarea
                rows={5}
                value={data.professionalSummary}
                onChange={(e) => updateField('professionalSummary', e.target.value)}
                className="w-full text-xs p-3 border border-slate-300 rounded focus:ring-1 focus:ring-[#16325c] focus:outline-none leading-relaxed"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                {data.professionalSummary.length} characters · ~{data.professionalSummary.split(/\s+/).filter(Boolean).length} words
              </p>
            </div>
          </div>
        )}

        {/* SECTION: EDUCATION */}
        {activeSection === 'education' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Education Entries
              </h3>
              <button
                onClick={handleAddEdu}
                className="text-xs text-[#16325c] hover:underline flex items-center gap-1 font-medium"
              >
                <Plus className="w-3.5 h-3.5" /> Add Degree
              </button>
            </div>

            <div className="space-y-4">
              {data.education.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-3 relative group"
                >
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>Entry #{idx + 1}</span>
                    <button
                      onClick={() => handleDeleteEdu(edu.id)}
                      className="text-rose-600 hover:text-rose-800 p-1"
                      title="Remove entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Degree / Level
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleEduChange(edu.id, 'degree', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Institution / University / Board
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleEduChange(edu.id, 'institution', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        College / Percentage / Status
                      </label>
                      <input
                        type="text"
                        value={edu.gradeOrDetails}
                        onChange={(e) => handleEduChange(edu.id, 'gradeOrDetails', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 mb-1">
                        Year / Expected Completion
                      </label>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => handleEduChange(edu.id, 'year', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION: SKILLS */}
        {activeSection === 'skills' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Technical & Digital Skills
              </h3>
              <button
                onClick={handleAddSkill}
                className="text-xs text-[#16325c] hover:underline flex items-center gap-1 font-medium"
              >
                <Plus className="w-3.5 h-3.5" /> Add Skill Category
              </button>
            </div>

            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-md"
                >
                  <input
                    type="text"
                    value={skill.category}
                    placeholder="Category (e.g. Design)"
                    onChange={(e) => handleSkillChange(skill.id, 'category', e.target.value)}
                    className="w-1/3 text-xs p-1.5 bg-white border border-slate-300 rounded font-medium focus:outline-none"
                  />
                  <span className="text-slate-400">—</span>
                  <input
                    type="text"
                    value={skill.skills}
                    placeholder="Tools or Specifics (e.g. Adobe Photoshop, Canva)"
                    onChange={(e) => handleSkillChange(skill.id, 'skills', e.target.value)}
                    className="flex-1 text-xs p-1.5 bg-white border border-slate-300 rounded focus:outline-none"
                  />
                  <button
                    onClick={() => handleDeleteSkill(skill.id)}
                    className="text-rose-600 hover:text-rose-800 p-1"
                    title="Delete row"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION: PROJECTS */}
        {activeSection === 'projects' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b pb-2">
              Featured Projects
            </h3>
            {data.projects.map((proj) => (
              <div key={proj.id} className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Project Heading
                  </label>
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => {
                      const updated = data.projects.map((p) =>
                        p.id === proj.id ? { ...p, title: e.target.value } : p
                      );
                      updateField('projects', updated);
                    }}
                    className="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:outline-none font-bold"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-semibold text-slate-700">
                      Description Bullets
                    </label>
                    <button
                      onClick={() => handleAddBullet(proj.id)}
                      className="text-xs text-[#16325c] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> Add Bullet
                    </button>
                  </div>
                  <div className="space-y-2">
                    {proj.descriptionBullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-slate-400 text-xs">•</span>
                        <input
                          type="text"
                          value={bullet}
                          onChange={(e) => handleBulletChange(proj.id, idx, e.target.value)}
                          className="flex-1 text-xs p-1.5 bg-white border border-slate-300 rounded focus:outline-none"
                        />
                        <button
                          onClick={() => handleDeleteBullet(proj.id, idx)}
                          className="text-rose-600 hover:text-rose-800 p-1"
                          title="Remove bullet"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECTION: CERTS */}
        {activeSection === 'certs' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Certifications & Achievements
              </h3>
              <button
                onClick={handleAddCert}
                className="text-xs text-[#16325c] hover:underline flex items-center gap-1 font-medium"
              >
                <Plus className="w-3.5 h-3.5" /> Add Certification
              </button>
            </div>

            <div className="space-y-2">
              {data.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded"
                >
                  <input
                    type="text"
                    value={cert.title}
                    onChange={(e) => handleCertChange(cert.id, e.target.value)}
                    className="flex-1 text-xs p-1.5 bg-white border border-slate-300 rounded focus:outline-none"
                  />
                  <button
                    onClick={() => handleDeleteCert(cert.id)}
                    className="text-rose-600 hover:text-rose-800 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION: OTHER DETAILS */}
        {activeSection === 'other' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b pb-2">
              Languages, Personal Details & Profile
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={data.dateOfBirth}
                  onChange={(e) => updateField('dateOfBirth', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Passport Availability
                </label>
                <input
                  type="text"
                  value={data.passportAvailability}
                  onChange={(e) => updateField('passportAvailability', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Profile Declaration Statement
                </label>
                <textarea
                  rows={2}
                  value={data.profileDeclaration}
                  onChange={(e) => updateField('profileDeclaration', e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Interests (Comma-separated)
                </label>
                <input
                  type="text"
                  value={data.interests.join(', ')}
                  onChange={(e) =>
                    updateField(
                      'interests',
                      e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    )
                  }
                  className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
