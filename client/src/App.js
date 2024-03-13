import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import DataBlock from './Components/DataBlock';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Carousel */}
      <Carousel/>
      <DataBlock/>
    </div>
  );
}

export default App;
