import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import {Landing} from './pages/Landing/index.tsx';
import {Menu} from './pages/Menu/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path="menu" element={<Menu />} />
    </Routes>
  </BrowserRouter>
);
