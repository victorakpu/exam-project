import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import NoMatch from './pages/404';
import AppBar from './components/AppBar';

function App() {
  return (
    <BrowserRouter>
    <AppBar />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/users`} element={<Users />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`*`} element={<NoMatch />} />
        {/* <Route path={`/users`} element={<Users />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
