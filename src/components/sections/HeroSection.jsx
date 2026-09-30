import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Layers3, MapPin, Send } from 'lucide-react'
import { profile, socialLinks } from '../../data/siteData'
import { fadeUp } from '../../lib/animations'

const MotionSection = motion.section
const heroImage = '/assets/demo/mansur.jpg'

function HeroSection() {
  return (
    <MotionSection
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="relative isolate min-h-[92svh] w-full overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={profile.name}
          className="h-full w-full object-cover object-[76%_26%] sm:object-[74%_24%] lg:object-[72%_22%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,12,0.96)_0%,rgba(5,8,12,0.9)_26%,rgba(5,8,12,0.62)_48%,rgba(5,8,12,0.42)_63%,rgba(5,8,12,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_80%_74%,rgba(245,158,11,0.18),transparent_26%),linear-gradient(180deg,rgba(7,9,13,0.2)_0%,rgba(7,9,13,0.04)_38%,rgba(7,9,13,0.82)_100%)]" />
        <div className="absolute inset-y-0 right-[11%] hidden w-px bg-gradient-to-b from-transparent via-white/18 to-transparent lg:block" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-[1320px] flex-col justify-between px-4 pb-8 pt-24 md:px-7 md:pb-10 lg:pt-28">
        <div className="max-w-[660px] pt-8 sm:pt-14 lg:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-200/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
            DURDIMATOV MANSUR
          </p>
          <h1 className="hero-name mt-5 leading-[0.84] tracking-tight text-zinc-50">{profile.brand}</h1>
          <p className="mt-4 text-[clamp(1rem,1.45vw,1.25rem)] font-medium tracking-[0.08em] text-zinc-100/90">
            {profile.title}
          </p>
          <p className="mt-6 max-w-[38ch] text-[clamp(0.98rem,1.4vw,1.18rem)] leading-[1.7] text-zinc-300">
            I build practical products around IoT monitoring, drone engineering,
            AI automation, and mobile protection systems that work cleanly in the real world.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {['IoT Systems', 'Drone Engineering', 'AI Automation', 'Mobile Security'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200/90 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="group inline-flex items-center justify-center rounded-full bg-zinc-100 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 shadow-[0_18px_45px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              View work
              <ArrowUpRight size={14} className="ml-2 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-black/28 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Telegram
              <Send size={14} className="ml-2" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.22em] text-zinc-300 sm:grid-cols-3 sm:gap-6 sm:text-[12px]">
          <div>
            <MapPin size={14} className="mb-2 text-emerald-400" />
            <p className="font-semibold text-zinc-100">Based in {profile.city}</p>
            <p className="mt-1 text-zinc-400">{profile.country}</p>
          </div>
          <div>
            <Layers3 size={14} className="mb-2 text-blue-400" />
            <p className="font-semibold text-zinc-100">Core Projects</p>
            <p className="mt-1 text-zinc-400">IoT Monitoring Platform / Cyber Family</p>
          </div>
          <div className="sm:text-right">
            <Send size={14} className="mb-2 sm:ml-auto text-amber-300" />
            <p className="font-semibold text-zinc-100">Direct Contact</p>
            <p className="mt-1 text-zinc-400">{profile.telegramHandle}</p>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default HeroSection
