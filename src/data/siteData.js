import {
  FileCode2,
  Paintbrush,
  FileJson,
  Atom,
  Zap,
  Webhook,
  Wind,
  Server,
  Database,
  GitCommit,
  Github,
} from 'lucide-react'

export { projects } from './projectsData'

export const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Work', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export const profile = {
  name: 'Durdimatov Mansur',
  brand: 'M@nsu7Dev',
  title: 'IoT and Drone Engineer',
  subtitle: 'Full Stack Dasturchi (Unusual jamoasi)',
  city: 'Urgench',
  country: 'Uzbekistan',
  email: 'durdimatovm3909@gmail.com',
  emailHref: 'mailto:durdimatovm3909@gmail.com',
  phone: '+998886603909',
  phoneLabel: '+998 88 660 39 09',
  phoneHref: 'tel:+998886603909',
  instagramHandle: '@mansurdurdimatov1',
  telegramHandle: '@durdimatov_mansur',
}

export const skillset = [
  { name: 'IoT Systems', icon: Server, color: '#4ade80' },
  { name: 'Drone Engineering', icon: Zap, color: '#f59e0b' },
  { name: 'AI Automation', icon: Atom, color: '#22d3ee' },
  { name: 'APK Analysis', icon: FileJson, color: '#c084fc' },
  { name: 'Mobile Security', icon: GitCommit, color: '#fb7185' },
  { name: 'React Interfaces', icon: FileCode2, color: '#60a5fa' },
  { name: 'Tailwind UI', icon: Paintbrush, color: '#facc15' },
  { name: 'Node APIs', icon: Webhook, color: '#34d399' },
  { name: 'Data Layer', icon: Database, color: '#93c5fd' },
  { name: 'Vite Workflow', icon: Wind, color: '#38bdf8' },
  { name: 'Version Control', icon: Github, color: '#f4f4f5' },
]

export const testimonials = [
  {
    name: 'Alisher Xodjayev',
    role: 'CEO at Agrosmart',
    content: 'Mansur built an incredible IoT monitoring system for our greenhouses. The precision and automation have significantly improved our yield.',
    avatar: null,
  },
  {
    name: 'Bekzod Abdullayev',
    role: 'Tech Lead at CyberSec',
    content: 'His expertise in mobile security and APK analysis is top-notch. The Cyber Family app he developed is both robust and user-friendly.',
    avatar: null,
  },
]

export const marqueeWords = [
  'AGRO AI',
  'DRONE ENGINEERING',
  'IOT SYSTEMS',
  'APK ANALYSIS',
  'MOBILE SECURITY',
  'ROBOTIC WORKFLOWS',
  'AI AUTOMATION',
  'SMART FARMING',
  'REAL-TIME MONITORING',
]

export const blogPosts = []

export const aboutText = {
  heading: 'AI, IoT and drone systems',
  headingHighlight: 'built for practical impact',
  paragraphs: [
    'Hozirda Unusual jamoasida IoT va dron texnologiyalari bo\'yicha ishlayman, Full Stack Dasturchiman.',
    'I build products where software meets real devices: IoT monitoring, drone workflows, and mobile tools that solve practical problems.',
    'My work covers React and Vite interfaces, backend logic, monitoring flows, and automation thinking that keeps systems clear and usable.',
    'In one line: I build useful systems around IoT, drones, mobile security, and AI automation.',
  ],
}

export const footerColumns = [
  {
    title: 'General',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'Skills', href: '/#skills' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Me', href: '/#about' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'IoT Monitoring Platform', href: '/work/agro-ai' },
      { label: 'Agro Robo Operations', href: '/work/agro-robo' },
      { label: 'Cyber Family', href: '/work/cyber-family' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/mansurdurdimatov1/' },
      { label: 'Telegram', href: 'https://t.me/durdimatov_mansur' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Email', href: 'mailto:durdimatovm3909@gmail.com' },
      { label: 'Phone', href: 'tel:+998886603909' },
      { label: 'Instagram', href: 'https://www.instagram.com/mansurdurdimatov1/' },
      { label: 'Telegram', href: 'https://t.me/durdimatov_mansur' },
    ],
  },
]

export const socialLinks = {
  github: 'https://github.com/durd1ma7ov06',
  linkedin: 'https://www.linkedin.com/in/mansur-durdimatov',
  twitter: 'https://twitter.com/mansu7dev',
  telegram: 'https://t.me/durdimatov_mansur',
  instagram: 'https://www.instagram.com/mansurdurdimatov1/',
  email: 'mailto:durdimatovm3909@gmail.com',
  phone: 'tel:+998886603909',
}
