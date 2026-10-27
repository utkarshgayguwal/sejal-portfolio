import {
  User,
  Briefcase,
  Star,
  Trophy,
  GraduationCap,
  Mail,
  Linkedin,
  MapPin,
  Lightbulb,
  TrendingUp,
  UserSearch,
  Users,
  Building2,
  UserPlus,
  CalendarCheck,
  Handshake,
  BarChart3,
  Network,
  Check,
  Users2,
  Heart,
} from "lucide-react";

/* ------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH
   Edit anything in this file and the whole site updates.
   Icons come from lucide-react (https://lucide.dev/icons).
------------------------------------------------------------------- */

// One email used by the navbar button, hero and footer
export const email = "sejal.julme@gmail.com";
export const mailto = `mailto:${email}`;

// Theme colours -> injected as CSS variables in App.jsx
export const theme = {
  navy: "#0b1f5c",
  navyLight: "#1d3a8a",
  peach: "#fde0d0",
  peachDark: "#f5c4a8",
  cream: "#fff8f5",
  gold: "#f4b25a",
};

export const profile = {
  name: "Sejal Julme",
  initials: "SJ",
  role: "HR Professional",
  photo: "/sejal.jpg", // put the image in /public
  resumeUrl: "/Sejal_Julme_Resume.pdf", // put the PDF in /public
  siteTitle: "Sejal Julme | HR Professional",
};

export const navCta = { label: "Let's Connect", href: mailto };

export const hero = {
  tagline: ["Building People.", "Building Possibilities."],
  headline: "Talent Acquisition & Talent Management",
  description:
    "An HR Professional passionate about attracting talent, nurturing potential and creating a positive workplace culture.",
  primaryCta: { label: "View My Work", href: "#experience" },
  secondaryCta: { label: "Download Resume", href: profile.resumeUrl },
  badgeText: "HR Professional",
  BadgeIcon: Users2,
  scrollText: "Scroll",
};

export const about = {
  title: "About Me",
  Icon: User,
  // Words wrapped in **double asterisks** are rendered bold
  text: "I am **Sejal Julme**, an MBA in Human Resource Management with a strong foundation in Civil Engineering. I bring a blend of analytical thinking and people skills to drive effective talent solutions and contribute to organizational growth.",
  values: [
    {
      label: "People Focused",
      text: "Every hire is a person first. I build relationships that last beyond the offer letter.",
      Icon: Handshake,
    },
    {
      label: "Solution Driven",
      text: "Analytical thinking from engineering helps me turn hiring challenges into clear solutions.",
      Icon: Lightbulb,
    },
    {
      label: "Growth Mindset",
      text: "Always learning, always improving - for the people I hire and for myself.",
      Icon: TrendingUp,
    },
  ],
};

export const experience = {
  title: "Professional Experience",
  Icon: Briefcase,
  items: [
    {
      company: "Lloyds Infrastructure & Construction",
      role: "HR Professional",
      period: "Current",
      highlights: ["Talent Acquisition", "HR Operations", "Stakeholder Management"],
    },
    {
      company: "5M India Technologies",
      role: "HR Executive",
      period: "Dec 2024 – Feb 2025",
      highlights: ["IT & Non-IT Recruitment", "Candidate Coordination"],
    },
    {
      company: "Ambuja Cement Ltd.",
      role: "HR Executive",
      period: "Jul – Oct 2024",
      highlights: ["Contract Labour", "Compliance", "Hiring"],
    },
    {
      company: "Numetry Technologies",
      role: "HR Recruiter",
      period: "Jun – Jul 2024",
      highlights: ["Sourcing", "Screening", "Interview Coordination"],
    },
  ],
};

export const skills = {
  title: "Core HR Skills",
  Icon: Star,
  items: [
    { label: "Talent Acquisition & Recruitment", Icon: UserSearch },
    { label: "Talent Management", Icon: Users },
    { label: "HR Operations", Icon: Building2 },
    { label: "Employee Onboarding", Icon: UserPlus },
    { label: "Interview Coordination", Icon: CalendarCheck },
    { label: "Stakeholder Management", Icon: Network },
    { label: "HR Dashboards & Reporting", Icon: BarChart3 },
    { label: "Naukri & LinkedIn Sourcing", Icon: Linkedin },
  ],
};

export const achievements = {
  title: "Key Achievements",
  Icon: Trophy,
  CheckIcon: Check,
  // Animated count-up numbers
  stats: [
    { value: 20, suffix: "+", label: "IT profiles closed" },
    { value: 2, suffix: " mo", label: "To close them all" },
    { value: experience.items.length, suffix: "", label: "Organizations" },
  ],
  items: [
    "Successfully closed 20 IT profiles in 2 months.",
    "End-to-end recruitment experience for IT & Non-IT roles.",
    "Prepared recruitment dashboards for stakeholders.",
  ],
};

export const education = {
  title: "Education",
  Icon: GraduationCap,
  items: [
    {
      badge: "MBA",
      degree: "MBA - Human Resource",
      institute:
        "JSPM's Jaywant Institute of Management Studies, Tathwade, Pune",
      cgpa: 8.01,
      outOf: 10,
      period: "Aug 2023 – July 2025",
    },
    {
      badge: "BE",
      degree: "B.E. Civil",
      institute:
        "Prof. Ram Meghe Institute of Technology Research, Badnera, Amravati",
      cgpa: 9.11,
      outOf: 10,
      period: "Aug 2018 – June 2022",
    },
  ],
};

export const quote = {
  Icon: Heart,
  lines: ["Together, we can build a better tomorrow", "— with the right people."],
};

export const contact = {
  title: "Get in Touch",
  subtitle: "Let's connect for opportunities and collaborations.",
  MailIcon: Mail,
  items: [
    { Icon: Mail, label: email, href: mailto },
    {
      Icon: Linkedin,
      label: "linkedin.com/in/sejal-julme",
      href: "https://linkedin.com/in/sejal-julme",
    },
    { Icon: MapPin, label: "Pune, Maharashtra" },
  ],
  cta: { label: "Contact Me", href: mailto },
};

export const footer = {
  year: 2025,
  text: "HR Professional | Turning Talent into Success",
};
