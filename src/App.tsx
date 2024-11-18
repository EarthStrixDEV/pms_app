import React from 'react';
import Navbar from './components/Navbar';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App bg-gray-300 h-screen p-3">
      <header>
        <Navbar /> 
      </header>      
      <section className='bg-slate-600 h-screen p-3'>
        <Chart />
      </section>
    </div>
  );
}

export default App;
