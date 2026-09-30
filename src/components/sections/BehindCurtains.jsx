import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Mail, Phone, Send, Sparkles } from 'lucide-react'
import { profile, socialLinks } from '../../data/siteData'
import { fadeUp, staggerContainer, fadeUpChild } from '../../lib/animations'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionLink = motion(Link)

const engineeringCards = [
  {
    eyebrow: 'IoT Monitoring Platform',
    title: 'IoT, drone, and field workflows',
    description:
      'Products that connect mission planning, monitoring logic, and action-ready feedback for practical agrotech use.',
    points: [
      'Drone route thinking tied to field operations',
      'Monitoring views for crop and sensor data',
      'Applied AI decisions instead of abstract dashboards',
    ],
  },
  {
    eyebrow: 'Cyber Family',
    title: 'APK and mobile protection flow',
    description:
      'Security-focused mobile experiences for APK analysis, dangerous-call detection, and blocking rules that users can actually understand.',
    points: [
      'Readable threat scoring',
      'Protection states for suspicious calls',
      'Safer decisions before damage spreads',
    ],
  },
  {
    eyebrow: 'Engineering Focus',
    title: 'IoT and drone systems with software clarity',
    description:
      'I work at the point where devices, data, and interfaces need to feel reliable together, not as disconnected parts.',
    points: [
      'IoT monitoring and control logic',
      'Drone-oriented system design',
      'Clean web interfaces for technical products',
    ],
  },
]

const contactLinks = [
  { href: socialLinks.email, label: profile.email, icon: Mail },
  { href: socialLinks.phone, label: profile.phoneLabel, icon: Phone },
  { href: socialLinks.instagram, label: profile.instagramHandle, icon: Instagram },
  { href: socialLinks.telegram, label: profile.telegramHandle, icon: Send },
]

function BehindCurtains() {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto flex w-full max-w-[1320px] flex-col justify-center px-4 py-20 md:px-7 lg:py-28"
    >
      <MotionDiv variants={fadeUp} className="mb-14 text-center">
        <p className="section-subtitle mb-4">Engineering Focus</p>
        <h2 className="section-title text-zinc-100">
          What I
          <br />
          <span className="font-script gradient-text">build and protect</span>
        </h2>
      </MotionDiv>

      <div className="grid gap-6 xl:grid-cols-3">
        {engineeringCards.map((card) => (
          <MotionDiv key={card.title} variants={fadeUpChild} className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-zinc-700/80 hover:bg-zinc-900/60 hover:shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                <Sparkles size={12} className="text-emerald-400" />
                {card.eyebrow}
              </div>
              <h3 className="mt-5 text-[2rem] font-black leading-[1.08] tracking-tight text-zinc-100">
                {card.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-zinc-400">
                {card.description}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-zinc-800/60 pt-6">
              {card.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-950/45 px-4 py-3 text-sm text-zinc-300">
                  <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>

      <MotionDiv variants={fadeUpChild} className="mt-8 flex flex-col gap-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/35 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Direct contact</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {profile.name} builds focused systems around AI, IoT, drone engineering, and mobile protection.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <MotionLink
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-900 transition hover:bg-white"
          >
            View work
            <ArrowUpRight size={14} />
          </MotionLink>
          {contactLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100"
              >
                <Icon size={14} />
                {item.label}
              </a>
            )
          })}
        </div>
      </MotionDiv>
    </MotionSection>
  )
}

export default BehindCurtains
