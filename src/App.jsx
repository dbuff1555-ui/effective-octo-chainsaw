import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {

  return (
    <>
<BrowserRouter> 
      <div className="app-container">
        {/* Навігація */}
        <nav className="nav-menu">
          <Link to="/about">         Про нас</Link>
          <Link to="/contact">         Користувач </Link> 
          <Link to="/">         Головна</Link>
        </nav>

        <div className="content-area">
          
          <Routes>
            {/* Базова маршрутизація */}
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/" element={<Home />} />
            
            {/* Обробка 404 (Не обов'язково, але гарна практика) */}
            <Route path="*" element={<h1>404 | Сторінку не знайдено</h1>} />
          </Routes>
        </div>
      </div>
</BrowserRouter>
    </>
  )
}

export default App
