import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';

<React.StrictMode>
    <Router>
      <Route path='/' element={<App />} />
    </Router>
  </React.StrictMode>