import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTimestamp = null;
      const end = parseInt(value.toString().replace(/,/g, ''), 10);
      if (isNaN(end)) {
        // defer to avoid sync setState inside effect
        setTimeout(() => setCount(value), 0);
        return;
      }

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { label: "Active Students", value: "2500", suffix: "+", highlight: "text-cyan-glow" },
    { label: "Expert Faculty", value: "150", suffix: "+", highlight: "text-purple-400" },
    { label: "Smart Classrooms", value: "50", suffix: "+", highlight: "text-blue-400" },
    { label: "Sports Facilities", value: "12", suffix: "", highlight: "text-emerald-400" },
  ];

  return (
    <section className="py-16 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-navy via-navy to-navy border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Background Glow Effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-glow/5 via-navy/0 to-navy/0 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center justify-center text-center ${i % 2 !== 0 ? 'pl-8' : ''} lg:pl-0 lg:border-l lg:first:border-l-0 border-white/5`}
              >
                <h4 className={`text-4xl md:text-5xl font-outfit font-bold mb-2 ${stat.highlight}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-white/60 font-medium text-sm tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
