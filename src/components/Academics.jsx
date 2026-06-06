import React from 'react';
import './Academics.css';
import { Award, GraduationCap, ClipboardList, FileText, BookOpen, Link } from 'lucide-react';

const stats = [
  { icon: Award, title: 'NEP 2020 Aligned', desc: 'Curriculum and pedagogy shaped for 21st century learning.' },
  { icon: GraduationCap, title: 'Holistic Development', desc: 'Balanced emphasis on cognitive, social and emotional growth.' },
  { icon: ClipboardList, title: 'Project-Based Learning', desc: 'Authentic projects that build skills and curiosity.' },
  { icon: FileText, title: 'Continuous Assessment', desc: 'Formative feedback and personalised learning pathways.' }
];

const Academics = () => {
  return (
    <section id="academics" className="academics-section py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#051124]">Academics</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A joyful, meaningful learning experience that nurtures curiosity, creativity and confidence — structured from Nursery through Grade 12.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card">
            <img src="https://www.dreamindia.com/images/dis%20(6).jpg" alt="School Programs" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">Foundational to Secondary Programs</h3>
              <p className="card-desc">Comprehensive programs from Nursery to Grade 12 aligned with NEP 2020 and NCERT, ensuring smooth transitions and holistic growth.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://www.dreamindia.com/images/dis%20(11).jpg" alt="Code of Conduct" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">Student Code of Conduct</h3>
              <p className="card-desc">Clear expectations for respect, integrity and accountability to build a safe and supportive learning atmosphere.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://www.dreamindia.com/images/dis%20(12).jpg" alt="Health and Safety" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">Health & Safety</h3>
              <p className="card-desc">Strict hygiene standards, regular health checkups and well‑equipped emergency facilities on campus.</p>
            </div>
          </div>
        </div>

        <div className="academics-grid mb-12">
          <div className="detail-column">
            <article className="detail-card">
              <h4 className="detail-heading">Assessment & Evaluation</h4>
              <p className="detail-lead">Ongoing evaluation that balances academic progress with socio-emotional development. Teachers provide personalised feedback and learning plans.</p>

              <ul className="detail-list">
                <li><FileText className="inline-icon" /> Continuous evaluation with formative tools</li>
                <li><Award className="inline-icon" /> Personalised feedback and goal setting</li>
                <li><BookOpen className="inline-icon" /> Emphasis on growth mindset and competencies</li>
              </ul>
            </article>

            <article className="detail-card mt-6">
              <h4 className="detail-heading">Syllabus 2025–26</h4>
              <p className="detail-lead">We follow the NCERT syllabus for 2025–26, integrating national standards with real-world applications to promote conceptual clarity.</p>

              <ul className="detail-list">
                <li><BookOpen className="inline-icon" /> NCERT-aligned core curriculum</li>
                <li><Link className="inline-icon" /> Interdisciplinary and competency-based units</li>
                <li><GraduationCap className="inline-icon" /> Pathways for inquiry, enrichment and remedial support</li>
              </ul>
            </article>
          </div>

          <aside className="stats-column">
            <div className="stats-grid">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="stat-card">
                    <div className="stat-icon"><Icon /></div>
                    <div className="stat-body">
                      <h5 className="stat-heading">{s.title}</h5>
                      <p className="stat-desc">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>

        <footer className="mt-10 text-center">
          <p className="text-slate-600">Our academic programs go beyond textbooks—fostering curiosity, innovation, and confidence in every child through meaningful learning experiences.</p>
        </footer>
      </div>
    </section>
  );
};

export default Academics;
