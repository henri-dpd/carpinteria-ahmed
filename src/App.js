
import './App.css';
import useLocalStorage from 'use-local-storage'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <h1>Carpintería Ahmed</h1>
      </header>
      <section>
        <div>
          <span>{theme} mode </span>
          <button className='ThemeBtn' onClick={switchTheme}>
            Switch to {theme} theme
          </button>
        </div>
        <h2>Productos de calidad hecho a medida</h2>
        <p>Se ofrece los mejores servicios de carpintería a pedido</p>
      </section>
    </div>
  );
}

export default App;
