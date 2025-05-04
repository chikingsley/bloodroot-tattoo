import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import { ArtistPage } from '@/pages/ArtistPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { HeaderVisibilityProvider } from '@/context/HeaderVisibilityContext';
// Import other pages here later

function App() {
  return (
    <Router>
      <HeaderVisibilityProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/:slug" element={<ArtistPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Define other routes here */}
            {/* Example: <Route path="/artist/:slug" element={<ArtistPage />} /> */}
          </Routes>
        </Layout>
      </HeaderVisibilityProvider>
    </Router>
  );
}

export default App;
