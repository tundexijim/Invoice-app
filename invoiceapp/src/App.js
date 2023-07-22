import Aside from "./components/Aside/Aside";
import Invoicelist from './pages/Invoicelist'
import Invoice from "./pages/Invoice";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Aside />
    <Routes>
      <Route path="/" element={<Invoicelist />}/>
      <Route path="/:id" element={<Invoice />}/>
    </Routes>
    </div>
  );
}

export default App;
