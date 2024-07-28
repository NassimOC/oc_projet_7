import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/layout';
import Home from '../../pages/Home';
import Property from '../../pages/Property/property';
import About from '../../pages/A-Propos/about';
import Error from '../../pages/Error/error';

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
