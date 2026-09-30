import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  ArrowUpRight,
  CircleDot,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { fadeUp } from '../../lib/animations'
import { profile, socialLinks } from '../../data/siteData'
import TinyChip from '../ui/TinyChip'
import { Globe } from '../ui/globe'
import DevicesMockup from '../ui/DevicesMockup'

const MotionSection = motion.section
const MotionDiv = motion.div
const EMAIL = profile.email
const profilePhoto = '/assets/demo/mansur.jpg'
const agroAiPhone = '/assets/projects/agroai-mobile.svg'
const cyberFamilyPhone = '/assets/projects/cyber-family-mobile.svg'
const iotPhone = '/assets/projects/agroai-tablet.svg'
const quickLinks = [
  { href: socialLinks.telegram, label: 'Telegram', icon: Send },
  { href: socialLinks.instagram, label: 'Instagram', icon: Instagram },
  { href: socialLinks.email, label: 'Email', icon: Mail },
  { href: socialLinks.phone, label: 'Phone', icon: Phone },
].filter((item) => item.href)

function ProjectPhoneScreen({ src, alt, label }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.12),transparent_45%),linear-gradient(165deg,#111827,#0a0f1a)]">
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/42 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
      <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300 shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
        {label}
      </span>
    </div>
  )
}

function TopCardsSection() {
  const [copyToast, setCopyToast] = useState('')
  const [now, setNow] = useState(() => new Date())
  const runeCardRef = useRef(null)
  const runeInView = useInView(runeCardRef, { once: true, amount: 0.28 })

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!copyToast) return undefined
    const toastTimer = window.setTimeout(() => setCopyToast(''), 2200)
    return () => window.clearTimeout(toastTimer)
  }, [copyToast])

  const fallbackCopy = useCallback((value) => {
    const textArea = document.createElement('textarea')
    textArea.value = value
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    const copied = document.execCommand('copy')
    document.body.removeChild(textArea)
    return copied
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const copied = fallbackCopy(EMAIL)
        if (!copied) throw new Error('Clipboard is not available')
      }
      setCopyToast('Email copied to clipboard')
    } catch {
      setCopyToast('Copy failed. Use Ctrl/Cmd + C')
    }
  }, [fallbackCopy])

  return (
    <MotionSection
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="relative mx-auto flex w-full max-w-[1320px] flex-col justify-center px-4 py-20 md:px-7 lg:py-28"
    >
      <div className="grid gap-5 xl:grid-cols-[1fr_1.35fr_1fr]">
        <article className="glass-card flex flex-col items-center py-8 text-center">
          <div className="mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900">
            <img
              src={profilePhoto}
              alt={profile.name}
              className="h-full w-full object-cover object-[60%_18%]"
              loading="eager"
            />
          </div>
          <h2 className="text-3xl font-extrabold leading-none tracking-tight">
            {profile.name}
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{profile.brand} | {profile.title}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-zinc-600">
            {profile.city.toUpperCase()}, UZ | {new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(now)}
          </p>

          <div className="mt-6 w-full border-t border-zinc-800 pt-5">
            <div className="flex justify-center gap-4 text-zinc-500">
              {quickLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="footer-icon" aria-label={item.label}>
                    <Icon size={14} />
                  </a>
                )
              })}
            </div>
            <p className="mt-4 text-[12px] font-semibold tracking-[0.18em] text-zinc-400">
              {profile.email}
            </p>
          </div>
        </article>

        <article className="glass-card relative overflow-hidden py-7">
          <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_50%)]" />
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.34em] text-zinc-500">Applied engineering</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Systems+</p>
          </div>
          <h3 className="text-[2.2rem] font-extrabold leading-[0.92] tracking-tight sm:text-[2.8rem]">Smart tools</h3>
          <p className="font-script text-[2rem] leading-[0.95] text-zinc-300 sm:text-[2.7rem]">for field and family.</p>
          <p className="mt-4 max-w-[420px] text-[13px] leading-relaxed text-zinc-500">
            I build products that connect AI logic, IoT monitoring, drone workflows, and mobile protection into systems that are easy to understand and practical to use.
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            <TinyChip>Agro AI</TinyChip>
            <TinyChip>Drones</TinyChip>
            <TinyChip>IoT</TinyChip>
            <TinyChip>Security</TinyChip>
          </div>
          <div className="mt-4 max-w-[320px] rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-4">
            <p className="text-[13px] font-semibold text-zinc-300">Real-world automation</p>
            <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
              Products shaped around monitoring, control, safety, and actions that matter outside the screen.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-x-10 -bottom-1 h-24 rounded-t-full border border-zinc-800/60 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        </article>

        <article className="glass-card relative flex flex-col py-7">
          <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,transparent_50%)]" />
          <div className="mb-5 flex items-center justify-between">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-zinc-500">
              <CircleDot size={12} />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[10px] text-zinc-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available
            </span>
          </div>
          <h3 className="text-[1.7rem] font-extrabold leading-[1] tracking-tight">
            LET&apos;S BUILD
            <br />SMARTER
          </h3>
          <p className="font-script text-[1.5rem] leading-none text-zinc-400">and safer apps.</p>

          <div className="my-4 h-px bg-zinc-800" />

          <button
            type="button"
            onClick={copyEmail}
            className="cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <p className="font-script text-[1.4rem] text-zinc-100 transition hover:text-amber-300">{EMAIL}</p>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-zinc-600">TAP TO COPY EMAIL</p>
          </button>

          <a
            href={socialLinks.phone}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-900 transition hover:bg-white hover:shadow-lg hover:shadow-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            CALL NOW <ArrowUpRight size={12} />
          </a>
        </article>
      </div>

      <div className="relative mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2">
        <article className="glass-card relative min-h-[340px] overflow-hidden sm:min-h-[380px]">
          <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[150%] w-[150%] bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.05)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[150%] w-[150%] bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05)_0%,transparent_60%)]" />
          <p className="text-[10px] uppercase tracking-[0.33em] text-zinc-500">Available globally</p>
          <h3 className="mt-2 max-w-[260px] text-[1.6rem] font-bold leading-tight">
            Adaptable across time zones
          </h3>
          <div className="absolute inset-x-0 bottom-0 z-[1] flex justify-center">
            <Globe className="translate-y-[10%] opacity-100" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-zinc-950/85 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 z-[3] rounded-[inherit] border border-zinc-800/50" />
          <div className="relative z-[4] mt-3">
            <span className="inline-flex rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
              Practical collaboration
            </span>
          </div>
          <div className="absolute right-5 bottom-5 z-[4] flex items-center gap-2 text-[13px] text-zinc-500">
            <MapPin size={14} />
            <span className="uppercase tracking-wider">Remote</span>
            <span className="font-semibold text-zinc-300">{profile.country}</span>
          </div>
        </article>

        <article ref={runeCardRef} className="rune-card group glass-card relative min-h-[420px] overflow-hidden sm:min-h-[500px]">
          <div className="rune-ambient rune-ambient-a" />
          <div className="rune-ambient rune-ambient-b" />
          <div className="rune-specular" />
          <div className="rune-side-glow rune-side-glow-left" />
          <div className="rune-side-glow rune-side-glow-right" />
          <div className="rune-orbit rune-orbit-outer" />
          <div className="rune-orbit rune-orbit-inner" />

          <div className="relative mx-auto mt-6 h-[370px] w-full max-w-[560px] sm:mt-3 sm:h-[440px]">
            <div className="rune-label-row">
              <span className="rune-project-label rune-project-label-left">Cyber Family</span>
              <span className="rune-project-label rune-project-label-main">IoT Monitoring</span>
              <span className="rune-project-label rune-project-label-right">IoT Lab</span>
            </div>

            <div className="rune-fan">
              <div className="rune-phone rune-phone-left">
                <MotionDiv
                  initial={{ y: 125, opacity: 0 }}
                  animate={runeInView ? { y: 0, opacity: 1 } : { y: 125, opacity: 0 }}
                  transition={{ duration: 0.78, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DevicesMockup
                    device="iphone"
                    scale={0.4}
                    color="black"
                  >
                    <ProjectPhoneScreen src={cyberFamilyPhone} alt="Cyber Family mobile screen" label="Cyber Family" />
                  </DevicesMockup>
                </MotionDiv>
              </div>

              <div className="rune-phone rune-phone-right">
                <MotionDiv
                  initial={{ y: 125, opacity: 0 }}
                  animate={runeInView ? { y: 0, opacity: 1 } : { y: 125, opacity: 0 }}
                  transition={{ duration: 0.78, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DevicesMockup
                    device="iphone"
                    scale={0.4}
                    color="black"
                  >
                    <ProjectPhoneScreen src={iotPhone} alt="IoT systems control screen" label="IoT Lab" />
                  </DevicesMockup>
                </MotionDiv>
              </div>

              <div className="rune-phone rune-phone-main">
                <MotionDiv
                  initial={{ y: 150, opacity: 0, scale: 0.95 }}
                  animate={runeInView ? { y: 0, opacity: 1, scale: 1 } : { y: 150, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.86, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DevicesMockup
                    device="iphone"
                    scale={0.52}
                    color="black"
                  >
                    <ProjectPhoneScreen src={agroAiPhone} alt="IoT Monitoring Platform mobile screen" label="IoT Monitoring" />
                  </DevicesMockup>
                </MotionDiv>
              </div>
            </div>
          </div>
        </article>
      </div>

      {copyToast ? <div className="toast">{copyToast}</div> : null}
    </MotionSection>
  )
}

export default TopCardsSection
