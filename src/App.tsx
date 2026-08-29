import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';
import MadeBy from './pages/MadeBy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/madeby" element={<MadeBy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
