import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Accomodation from '../pages/Accomodation';
import Error from '../pages/Error';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/accomodation' element={<Accomodation/>} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
