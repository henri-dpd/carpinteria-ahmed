
import './App.css';
import useLocalStorage from 'use-local-storage';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Router>
      <div  className="App" data-theme={theme}>

      <NavBar theme={theme} switchTheme={switchTheme} />
      
      <Routes>
          <Route path={'/carpinteria-ahmed'} element={<Home />} />
          <Route path={'/carpinteria-ahmed/gallery'}  element={<Gallery />} />
          <Route path={'/carpinteria-ahmed/contact'} element={<Contact />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
