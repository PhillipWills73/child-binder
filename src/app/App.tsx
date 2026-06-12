import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { FormPage } from './components/FormPage';
import { ChildrenPage } from './components/ChildrenPage';
import { ChildProfile } from './components/ChildProfile';
import { FosterHomesPage } from './components/FosterHomesPage';
import { LegalPage } from './components/LegalPage';
import { DocumentsPage } from './components/DocumentsPage';
import { PhotosPage } from './components/PhotosPage';
import { TimelinePage } from './components/TimelinePage';
import { NotesPage } from './components/NotesPage';
import { MessagesPage } from './components/MessagesPage';
import { SettingsPage } from './components/SettingsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activeFormId, setActiveFormId] = useState<string | null>(null);
  const [showChildProfile, setShowChildProfile] = useState(false);

  const renderPage = () => {
    if (showChildProfile) {
      return <ChildProfile onBack={() => setShowChildProfile(false)} />;
    }

    if (currentPage === 'form' && activeFormId) {
      return (
        <FormPage
          formId={activeFormId}
          onBack={() => {
            setCurrentPage('dashboard');
            setActiveFormId(null);
          }}
        />
      );
    }

    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            onViewChild={() => setShowChildProfile(true)}
            onNewCase={(formId) => {
              setActiveFormId(formId);
              setCurrentPage('form');
            }}
          />
        );
      case 'children':
        return <ChildrenPage onViewChild={() => setShowChildProfile(true)} />;
      case 'foster-homes':
        return <FosterHomesPage />;
      case 'legal':
        return <LegalPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'photos':
        return <PhotosPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'notes':
        return <NotesPage />;
      case 'messages':
        return <MessagesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return (
          <Dashboard
            onViewChild={() => setShowChildProfile(true)}
            onNewCase={(formId) => {
              setActiveFormId(formId);
              setCurrentPage('form');
            }}
          />
        );
    }
  };

  return (
    <div className="size-full flex bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
