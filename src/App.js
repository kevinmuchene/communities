import './App.css';
import Communities from './Communities';
import Properties from './Properties'
import AddProperty from './AddProperty'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Communities />} />
        <Route path="/communities/:id/properties" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </Router>
  )
}

function App() {

  return (
    <AppRouter />
  );
}

export default App;
