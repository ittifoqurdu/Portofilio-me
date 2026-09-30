import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutSection from './components/sections/AboutSection'
import BehindCurtains from './components/sections/BehindCurtains'
import BlogsSection from './components/sections/BlogsSection'
import FooterSection from './components/sections/FooterSection'
import HeaderNav from './components/layout/HeaderNav'
import HeroSection from './components/sections/HeroSection'
import MarqueeRibbon from './components/sections/MarqueeRibbon'
import SkillsSection from './components/sections/SkillsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import TopCardsSection from './components/sections/TopCardsSection'
import NoiseLayer from './components/ui/NoiseLayer'
import CustomCursor from './components/ui/CustomCursor'
import SmoothScroll from './components/ui/SmoothScroll'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import { profile, projects } from './data/siteData'
import NotFoundPage from './components/pages/NotFoundPage'

const STATIC_SITE_URL = 'https://mansu7dev.uz'
const DEFAULT_IMAGE_PATH = '/assets/demo/mansur.jpg'

function getSiteOrigin() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }

  return STATIC_SITE_URL
}

function buildSiteUrl(path = '/') {
  if (!path) return getSiteOrigin()
  if (path.startsWith('http://') || path.startsWith('https://')) return path

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${getSiteOrigin()}${normalizedPath}`
}

const DEFAULT_SEO = {
  title: `${profile.name} | ${profile.brand} | IoT, Drone and AI Engineer`,
  description:
    'Portfolio of Durdimatov Mansur, also known as M@nsu7Dev, building AI, IoT, drone, and mobile security products from Uzbekistan.',
  image: buildSiteUrl(DEFAULT_IMAGE_PATH),
}
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'))
const WorkDetailPage = lazy(() => import('./components/pages/WorkDetailPage'))

function RouteFallback() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pb-16 pt-28 text-zinc-500 md:px-7 lg:pt-32">
      Loading...
    </section>
  )
}

function upsertMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <TopCardsSection />
      <SkillsSection />
      <MarqueeRibbon />
      <AboutSection />
      <BlogsSection />
      <TestimonialsSection />
      <BehindCurtains />
      <FooterSection />
    </>
  )
}

function WorkPage() {
  return (
    <>
      <Suspense fallback={<RouteFallback />}>
        <ProjectsSection />
      </Suspense>
      <AboutSection />
      <FooterSection />
    </>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (!location.hash) return
    const targetId = location.hash.replace('#', '')

    const scrollToHashTarget = () => {
      const target = document.getElementById(targetId)
      if (!target) return
      const offset = window.innerWidth < 768 ? 84 : 112
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    const timer = window.setTimeout(scrollToHashTarget, 120)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const path = location.pathname
    const normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
    const isHome = normalizedPath === '/'
    const isWorkRoot = normalizedPath === '/work'
    const isWorkDetailRoute = normalizedPath.startsWith('/work/')
    const projectId = isWorkDetailRoute ? normalizedPath.replace('/work/', '') : null
    const matchedProject = projectId ? projects.find((item) => item.id === projectId) : null
    const isKnownPath = isHome || isWorkRoot || Boolean(matchedProject)

    let seo = {
      title: DEFAULT_SEO.title,
      description: DEFAULT_SEO.description,
      image: DEFAULT_SEO.image,
      url: buildSiteUrl(normalizedPath),
    }

    if (isWorkRoot) {
      seo = {
        ...seo,
        title: `Work | ${profile.brand}`,
        description:
          'Selected projects by Durdimatov Mansur: IoT Monitoring Platform and Cyber Family.',
      }
    }

    if (matchedProject) {
      const projectImage = matchedProject.deviceScreens?.desktop || DEFAULT_SEO.image
      const absoluteImage = buildSiteUrl(projectImage)
      seo = {
        ...seo,
        title: `${matchedProject.name} | Work | ${profile.brand}`,
        description: matchedProject.description || matchedProject.tagline || DEFAULT_SEO.description,
        image: absoluteImage,
      }
    }

    if (!isKnownPath) {
      seo = {
        ...seo,
        title: `404 | Page not found | ${profile.brand}`,
        description: 'The requested page was not found.',
      }
    }

    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'robots', isKnownPath ? 'index, follow, max-image-preview:large' : 'noindex, nofollow')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', profile.brand)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', seo.url)
    upsertMeta('property', 'og:image', seo.image)
    upsertMeta('property', 'og:locale', 'en_US')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', seo.image)
    upsertCanonical(seo.url)
  }, [location.pathname])

  return (
    <SmoothScroll>
      <CustomCursor>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-zinc-100 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900"
        >
          Skip to content
        </a>
        <div className="relative isolate min-h-[100dvh] overflow-x-clip bg-[#07090d] text-zinc-100">
          <NoiseLayer />
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute -left-[10%] -top-[8%] h-[38%] w-[38%] rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute right-[6%] top-[18%] h-[30%] w-[30%] rounded-full bg-amber-300/10 blur-[120px]" />
            <div className="absolute -bottom-[14%] -right-[12%] h-[40%] w-[40%] rounded-full bg-rose-400/10 blur-[130px]" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 soft-grid opacity-50" />
          <HeaderNav />

          <main className="relative z-10 pb-0 pt-0" id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route
                path="/work/:projectId"
                element={(
                  <Suspense fallback={<RouteFallback />}>
                    <WorkDetailPage />
                  </Suspense>
                )}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <ScrollToTopButton />
        </div>
      </CustomCursor>
    </SmoothScroll>
  )
}

export default App
