import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
// Import other pages here later

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Define other routes here */}
          {/* Example: <Route path="/artist/:slug" element={<ArtistPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
