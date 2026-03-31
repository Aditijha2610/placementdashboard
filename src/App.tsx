import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { QuoteBanner } from './components/QuoteBanner';
import { StatCards } from './components/StatCards';
import { SubjectFolders } from './components/SubjectFolders';
import { QuickResources } from './components/QuickResources';
import { ActivityHeatmap } from './components/ActivityHeatmap';
import { WeeklySessions } from './components/WeeklySessions';
import { SubjectProgress } from './components/SubjectProgress';
import { MockTests } from './components/MockTests';
import { NewsFeed } from './components/NewsFeed';

const App: React.FC = () => (
  <div className="outer">
    <Sidebar />
    <div className="main">
      <Topbar />
      <div className="content">
        <QuoteBanner />
        <StatCards />
        <div className="grid-2">
          <SubjectFolders />
          <QuickResources />
        </div>
        <div className="grid-2">
          <ActivityHeatmap />
          <WeeklySessions />
        </div>
        <div className="grid-2">
          <SubjectProgress />
          <MockTests />
        </div>
        <NewsFeed />
      </div>
    </div>
  </div>
);

export default App;
