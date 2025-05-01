import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/index';
import Header from './components/Header/header';
import Confirmation from './containers/Confirmation/confirmation';


function AppRoutes() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <>
      <AppRoutes /> 
    </>
  );
}

export default App;