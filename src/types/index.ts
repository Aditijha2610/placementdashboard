export interface Subject {
  name: string;
  color: string;
  info: string;
  progress: number;
}

export interface Resource {
  icon: string;
  bg: string;
  name: string;
  tag: string;
  url: string;
}

export interface MockTest {
  subject: string;
  date: string;
  duration: string;
  diff: 'Easy' | 'Medium' | 'Hard';
}

export interface NewsItem {
  abbr: string;
  bgColor: string;
  company: string;
  title: string;
  desc: string;
  time: string;
  tag: 'New' | 'Trending' | 'Important';
}

export interface BarData {
  day: string;
  hours: number;
  isToday?: boolean;
  isFuture?: boolean;
}

export interface HeatCell {
  date: Date;
  level: 0 | 1 | 2 | 3 | 4;
  isFuture: boolean;
}

export interface StatCard {
  icon: string;
  value: string;
  label: string;
  trend: string;
  color: string;
  trendColor?: string;
  trendBg?: string;
}
