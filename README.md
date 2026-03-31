# AI Placement Assistant Dashboard

A fully componentised React + TypeScript dashboard for placement preparation,
built with Vite. Fresh amber/slate dark theme.

## Project Structure

```
placement-dashboard/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── main.tsx              ← Entry point
    ├── App.tsx               ← Root layout
    ├── index.css             ← Global styles (amber/slate theme)
    ├── types/
    │   └── index.ts          ← All TypeScript interfaces
    ├── data/
    │   └── index.ts          ← Static data (subjects, news, tests…)
    ├── hooks/
    │   ├── useClock.ts       ← Live clock hook
    │   └── useHeatmap.ts     ← Heatmap data generation hook
    └── components/
        ├── Sidebar.tsx       ← Icon sidebar with nav + tooltips
        ├── Topbar.tsx        ← Header bar with clock + readiness
        ├── QuoteBanner.tsx   ← Rotating motivational quotes
        ├── StatCards.tsx     ← 3 KPI stat cards
        ├── SubjectFolders.tsx← Subject chips with info preview
        ├── QuickResources.tsx← Curated external links
        ├── ActivityHeatmap.tsx← 6-month study heatmap
        ├── WeeklySessions.tsx ← Bar chart + recommended next steps
        ├── SubjectProgress.tsx← Animated progress bars per subject
        ├── MockTests.tsx     ← Upcoming test schedule
        └── NewsFeed.tsx      ← Placement news cards grid
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# → http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Customising

- **Change subjects / progress** → `src/data/index.ts` → `SUBJECTS` array
- **Change news items**          → `src/data/index.ts` → `NEWS_ITEMS` array
- **Change mock tests**          → `src/data/index.ts` → `MOCK_TESTS` array
- **Change color theme**         → `src/index.css` → `:root` CSS variables
- **Add a new page/view**        → Create a component in `src/components/`
                                    and wire it to the active nav index in `Sidebar.tsx`

## Tech Stack

| Tool        | Version |
|-------------|---------|
| React       | 18      |
| TypeScript  | 5       |
| Vite        | 5       |
| CSS Modules | —       |
| Google Fonts| Outfit + DM Mono |
