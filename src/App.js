import Cats from './Components/Cats';
import CatsCard from './Components/CatsCard';
import RandomCat from './Components/faker';
import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  CatImages  from './Components/CatImages';
import { useState} from 'react';

function App() {
  const [cats, setCats] = useState ([])
  Cats (setCats)
  console.log(cats)
  return (
    <div className="App">
      <Navbar />
      {/* Remember to import:
      import { BrowserRouter, Route, Routes } from 'react-router-dom'; */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="AboutUs" element={<Landing />} />
          <Route path="Buy" element={<CatsCard/> } />
          <Route path="ContactUs" element={<Landing />} />
          <Route path="/CatsAPI" element={<CatImages cats={cats} />} />
          <Route path="Basket" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <RandomCat />
      <CatsCard />
    </div>
  );
}

export default App;
