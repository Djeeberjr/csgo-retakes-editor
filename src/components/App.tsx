import React, { useState } from 'react';
import RetakesConfig from '../types/RetakesConfig';
import AllDecks from './AllDecks';
import MenuBar from './MenuBar';

function App() {

  const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())

  return (
    <div className="text-white">
      <MenuBar onExport={()=>{
        const exportString = retakesConfig.toCvar()
        console.log(exportString)
      }} />
      <AllDecks retakesConfig={retakesConfig} onChange={(newConfig)=>setRetakesConfig(newConfig)} />
    </div>
  );
}

export default App;
