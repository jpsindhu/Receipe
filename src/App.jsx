
import './App.css'
import Layout from './layout/layout.jsx';
import { Routes, Route } from 'react-router-dom';
import ReceipeList from './components/ReceipeList.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReceipeList />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
