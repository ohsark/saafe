import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProgressNav, { steps } from './components/ProgressNav';
import Home from './pages/Home';
import UploadData from './pages/UploadData';
import Organisation from './pages/Organisation';
import SampleType from './pages/SampleType';
import AntimicrobialPresenceData from './pages/Antimicrobial';
import MicroorganismPage from './pages/Microorganism';
import ASTPage from './pages/AST';
import Residues from './pages/Residues';
import ARGsPage from './pages/ARGs';
import Review from './pages/Review';

export default function App() {
  const location = useLocation();

  /* anything inside this list is considered part of the wizard */
  const wizardPaths = [
    '/upload',
    ...steps.map(s => s.path)
  ];
  const inWizard = wizardPaths.includes(location.pathname);
  const currentStep = steps.findIndex(s => s.path === location.pathname);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden fixed bottom-0 top-0 left-0 right-0">
      <Header />

      {/* the main flex-box for wizard vs. home */}
      <div className={`flex flex-1 overflow-hidden ${inWizard ? '' : 'justify-center'}`}>
        {inWizard && (
          // <aside className="w-[40%] max-w-[250px] shrink-0 overflow-hidden">
          <aside className="w-[25%] shrink-0 overflow-hidden justify-items-end">
            {location.pathname !== '/upload' && (
              <ProgressNav activeIndex={currentStep} />
            )}
          </aside>
        )}

        <main className={`flex-1 w-[75%] overflow-y-auto ${inWizard ? 'px-8 py-10' : 'p-0'}`}>
          <Routes>
            <Route path="/"                element={<Home />} />
            {/* wizard routes */}
            <Route path="/upload"          element={<UploadData />} />
            <Route path="/organisation"    element={<Organisation />} />
            <Route path="/sample-type"     element={<SampleType />} />
            <Route path="/antimicrobial"   element={<AntimicrobialPresenceData />} />
            <Route path="/microorganism"   element={<MicroorganismPage />} />
            <Route path="/ast"             element={<ASTPage />} />
            <Route path="/residues"        element={<Residues />} />
            <Route path="/args"            element={<ARGsPage />} />
            <Route path="/review"          element={<Review />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
