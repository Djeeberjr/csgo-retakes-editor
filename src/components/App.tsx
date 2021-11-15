import React, { useState } from "react"
import RetakesConfig from "../types/RetakesConfig"
import AllDecks from "./AllDecks"
import MenuBar from "./MenuBar"



const App: React.FC = () => {
	const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())

	return (
		<div className="text-white">
			<MenuBar 
				onExport={()=>{
					const exportString = retakesConfig.toCvar()
					console.log(exportString)
				}}
				onExportJson={()=>{
					const jsonString = JSON.stringify(retakesConfig)
					console.log(jsonString)
				}} 
			/>
			<AllDecks retakesConfig={retakesConfig} onChange={(newConfig)=>setRetakesConfig(newConfig)} />
		</div>
	)
}

export default App
