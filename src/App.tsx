import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat';
import Home from './pages/Home';
import NewRequest from './pages/NewRequest';

function App() {
  return (
    <div className="container">
      <h1>ReclameJá - Gestão de Reclamações</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="novo-chamado" element={<NewRequest />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
