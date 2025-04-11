import About_us from './pages/abo_us';
import Profile from './pages/profile';
import Home from './pages/home'
import Navbar from './component/navbar';
import Fotter from './component/fotter';
import { Routes, Route } from 'react-router-dom';
import Regis from './pages/regis';
import "./css/app.css"
import Login from './pages/login';
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abo_us" element={<About_us />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/regis" element={<Regis />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Fotter />
    </div>
  );
}

export default App;
