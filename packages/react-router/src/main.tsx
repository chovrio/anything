import ReactDOM from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<div>home</div>} />
        <Route path="about" element={<div>about</div>} />
        <Route path="dashboard" element={<div>dashboard</div>} />
      </Route>
    </Routes>
  </Router>
);
