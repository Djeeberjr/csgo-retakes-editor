import React, { useState } from 'react';
import RetakesConfig from '../types/RetakesConfig';
import AllDecks from './AllDecks';
import MenuBar from './MenuBar';

function App() {

  const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())

  return (
    <div className="text-white">
      <MenuBar />
      <AllDecks retakesConfig={retakesConfig} onChange={(newConfig)=>setRetakesConfig(newConfig)} />
    </div>
  );
}

export default App;
