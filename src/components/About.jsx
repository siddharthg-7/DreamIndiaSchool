import { motion } from 'framer-motion';
import { GraduationCap, Users, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-5 border border-[#e9e9ef] shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-lg bg-[#0c1c33] text-[#c28e34] flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="font-outfit font-black text-[#051124] text-sm">{title}</h4>
    </div>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-6 md:px-12 bg-white relative overflow-hidden select-none scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Visual and quick stats */}
          <div className="col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#c28e34]/10 shadow-lg bg-slate-50">
              <img src="/images/dis-banner-4.png" alt="Dream India School" className="w-full h-72 sm:h-96 object-cover" />
              <div className="absolute bottom-4 left-4 bg-[#051124]/90 text-[#c28e34] px-3 py-2 rounded-lg font-extrabold text-xs uppercase font-outfit border border-[#c28e34]/30">Established 15+ Years</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0c1c33] rounded-2xl p-4 text-white flex flex-col items-start gap-2">
                <span className="text-2xl font-black font-outfit">15+</span>
                <span className="text-[11px] uppercase tracking-widest text-[#c28e34] font-extrabold">Years of Excellence</span>
              </div>
              <div className="bg-[#0c1c33] rounded-2xl p-4 text-white flex flex-col items-start gap-2">
                <span className="text-2xl font-black font-outfit">10k+</span>
                <span className="text-[11px] uppercase tracking-widest text-[#c28e34] font-extrabold">Alumni & Community</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-span-7">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-[#c28e34] font-bold tracking-wider uppercase text-xs block font-outfit">About Us</span>
              <h2 className="text-3xl md:text-4xl font-outfit font-black text-[#051124] mt-2 mb-4">
                Dream India School, Tiruvuru — A Regional Leader in CBSE Education
              </h2>

              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Dream India School, Tiruvuru stands as a landmark institution in the region’s educational landscape. We take immense pride in being the first CBSE-affiliated school in Tiruvuru, marking a historic milestone in the town’s academic journey. Today, we are widely recognized as one of the leading CBSE schools in the entire Tiruvuru region, committed to delivering excellence in education.
                </p>

                <p>
                  Our affiliation with the Central Board of Secondary Education (CBSE) reflects our adherence to national academic standards, structured curriculum design, and competency-based learning practices. From strong foundational instruction to advanced academic preparation, we ensure that our students receive education that is both rigorous and future-oriented.
                </p>

                <p>
                  We have built a team of highly qualified and experienced educators from across India, bringing diverse expertise, innovative teaching methodologies, and a shared passion for nurturing young minds. Our faculty is supported by modern infrastructure, technology-enabled classrooms, and a safe, disciplined campus environment.
                </p>

                <p>
                  At Dream India School, we believe education is not merely about examinations — it is about shaping character, leadership, creativity, and resilience. Our mission is to empower every student to dream big, achieve excellence, and emerge as confident, responsible citizens ready to contribute meaningfully to society.
                </p>
              </div>

              {/* Feature grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={GraduationCap}
                  title="CBSE Affiliation & Standards"
                  desc="Structured curriculum, competency-based assessments, and continuous improvement to meet national learning outcomes."
                />
                <FeatureCard
                  icon={Users}
                  title="Experienced Faculty"
                  desc="A diverse team of educators applying modern pedagogy, formative assessment, and mentorship-driven learning."
                />
                <FeatureCard
                  icon={ShieldCheck}
                  title="Safe, Tech-Enabled Campus"
                  desc="Smart classrooms, monitored campus safety, and future-ready labs for hands-on STEM and creative learning."
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="#admissions" className="inline-flex items-center px-6 py-3 rounded-md bg-[#c28e34] hover:bg-[#a67526] text-white font-extrabold text-sm font-outfit uppercase tracking-widest shadow-md transition-all">Apply Now</a>
                <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-md border border-white/10 bg-white/5 text-[#051124] font-bold text-sm font-outfit uppercase tracking-widest shadow-sm transition-all">Get In Touch</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
