import type { Subject, Resource, MockTest, NewsItem, BarData, StatCard } from '../types';

export const QUOTES: string[] = [
  "The secret of getting ahead is getting started. Break your preparation into small, daily actions — the compound effect will surprise you.",
  "Success is the sum of small efforts, repeated day in and day out. Your consistency today builds your placement tomorrow.",
  "The expert in anything was once a beginner who refused to give up. Every algorithm you solve puts you one step closer.",
  "Don't watch the clock — do what it does. Keep going. Your dream company is looking for someone exactly like you.",
  "Your placement success is directly proportional to the quality of your daily preparation. Make today count.",
  "Code every day. Even 30 minutes of focused practice beats 4 hours of passive reading. Show up consistently.",
  "Interviews don't test what you know — they test how you think. Practice thinking out loud every single day.",
];

export const SUBJECTS: Subject[] = [
  { name: 'DSA',           color: '#f59e0b', info: 'Arrays, Trees, Dynamic Programming, Graphs & more', progress: 72 },
  { name: 'OOPS',          color: '#10b981', info: 'Classes, Inheritance, Polymorphism, Abstraction',    progress: 80 },
  { name: 'DBMS',          color: '#3b82f6', info: 'Normalization, SQL, Transactions, Indexing',          progress: 55 },
  { name: 'OS',            color: '#ef4444', info: 'Scheduling, Deadlocks, Memory Management, I/O',       progress: 48 },
  { name: 'CN',            color: '#8b5cf6', info: 'OSI Model, TCP/IP, HTTP, DNS, Routing',               progress: 35 },
  { name: 'System Design', color: '#06b6d4', info: 'HLD, LLD, Scalability, Caching, Load Balancing',      progress: 20 },
];

export const RESOURCES: Resource[] = [
  { icon: '💻', bg: 'rgba(245,158,11,0.12)',  name: 'LeetCode',             tag: 'DSA practice · 2500+ problems',   url: 'https://leetcode.com' },
  { icon: '⚡', bg: 'rgba(59,130,246,0.12)',  name: 'Codeforces',           tag: 'Competitive programming',          url: 'https://codeforces.com' },
  { icon: '▶️', bg: 'rgba(239,68,68,0.12)',   name: 'DSA Placement Playlist', tag: 'YouTube · Curated by topic',   url: 'https://youtube.com' },
  { icon: '🧠', bg: 'rgba(16,185,129,0.12)',  name: 'One Short',            tag: 'Quick revision notes',             url: 'https://oneshot.one' },
];

export const MOCK_TESTS: MockTest[] = [
  { subject: 'DSA Full Mock',        date: 'Mar 30', duration: '90 min', diff: 'Hard'   },
  { subject: 'DBMS Concepts',        date: 'Apr 01', duration: '45 min', diff: 'Medium' },
  { subject: 'OS Theory',            date: 'Apr 03', duration: '60 min', diff: 'Medium' },
  { subject: 'Aptitude & Reasoning', date: 'Apr 05', duration: '30 min', diff: 'Easy'   },
];

export const NEWS_ITEMS: NewsItem[] = [
  { abbr: 'G', bgColor: '#4285F4', company: 'Google',    title: 'Google SWE Campus Drive 2025 — Registration Open', desc: 'Eligible: CS/IT 2025 batch. CPI ≥ 7.5. Deadline: April 15.', time: '2h ago', tag: 'New' },
  { abbr: 'I', bgColor: '#007CC2', company: 'Infosys',   title: 'Infosys InfyTQ Certification — April Batch Announced', desc: 'Free certification program. Increases shortlisting chances by 40%.', time: '6h ago', tag: 'Trending' },
  { abbr: 'T', bgColor: '#0052CC', company: 'TCS',       title: 'TCS NQT Pattern Changed for 2025 — Updated Syllabus', desc: 'New sections: Advanced Reasoning. Coding Round now mandatory.', time: '1d ago', tag: 'Important' },
  { abbr: 'M', bgColor: '#00a65a', company: 'Microsoft', title: 'Microsoft MSIDC Intern Drive — Applications Live', desc: 'Summer 2025 internships at MSIDC Hyderabad. Apply before Apr 20.', time: '3h ago', tag: 'New' },
  { abbr: 'A', bgColor: '#FF9900', company: 'Amazon',    title: 'Amazon SDE-1 Off-Campus — OA Round Begins April 10', desc: '2024/2025 graduates eligible. Online assessment on HackerRank.', time: '5h ago', tag: 'Trending' },
  { abbr: 'F', bgColor: '#1877F2', company: 'Meta',      title: 'Meta University Program — Opens for Fall 2025 Interns', desc: 'Internship for 2nd & 3rd year students. Stipend: ₹1.8L/month.', time: '2d ago', tag: 'Important' },
];

export const BAR_DATA: BarData[] = [
  { day: 'Mon', hours: 2 },
  { day: 'Tue', hours: 3.5 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4 },
  { day: 'Fri', hours: 3 },
  { day: 'Sat', hours: 5, isToday: true },
  { day: 'Sun', hours: 0, isFuture: true },
];

export const STAT_CARDS: StatCard[] = [
  { icon: '📚', value: '47',  label: 'Topics Completed',  trend: '↑ +3 this week',    color: '#60a5fa' },
  { icon: '📊', value: '73%', label: 'Mock Test Average',  trend: '↑ +5% vs last',     color: '#a78bfa' },
  { icon: '🔥', value: '12',  label: 'Study Streak (days)',trend: '🏆 Personal best!', color: '#fb923c', trendColor: '#f59e0b', trendBg: 'rgba(245,158,11,0.1)' },
];

export const NEXT_STEPS = [
  { label: 'DBMS Normalization (1NF–3NF)', duration: '~45 min' },
  { label: 'Solve 5 Aptitude questions today', duration: '~20 min' },
  { label: 'OS: Process Scheduling revision', duration: '~30 min' },
];
