import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { StatsBanner } from '@/app/components/StatsBanner';
import { LiveSale } from '@/app/components/LiveSale';
import { UpcomingSales } from '@/app/components/UpcomingSales';
import { PastProjects } from '@/app/components/PastProjects';
import { PlatformStats } from '@/app/components/PlatformStats';
import { ProjectDetailPage } from '@/app/components/ProjectDetailPage';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { projects } from '@/app/data/projects';

type View = 'home' | 'project';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const liveProject = projects.find((p) => p.status === 'live');
  const upcomingProjects = projects.filter((p) => p.status === 'upcoming');
  const pastProjects = projects.filter((p) => p.status === 'completed');

  const handleViewDetails = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogoClick={handleBackToHome} />

      {currentView === 'home' ? (
        <main className="flex-1">
          <Hero />
          <StatsBanner />

          {liveProject && (
            <LiveSale project={liveProject} onViewDetails={handleViewDetails} />
          )}

          {upcomingProjects.length > 0 && (
            <UpcomingSales projects={upcomingProjects} />
          )}

          {pastProjects.length > 0 && (
            <PastProjects
              projects={pastProjects}
              onViewDetails={handleViewDetails}
            />
          )}

          <PlatformStats />
        </main>
      ) : (
        selectedProject && (
          <ProjectDetailPage
            project={selectedProject}
            onBack={handleBackToHome}
          />
        )
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
}