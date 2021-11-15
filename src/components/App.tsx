import React, { useState } from "react"
import RetakesConfig from "../types/RetakesConfig"
import AllDecks from "./AllDecks"
import MenuBar from "./MenuBar"
import Modal from "./Modal"



const App: React.FC = () => {
	const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())
	const [showExport,setShowExport] = useState(false)
	const [exportText,setExportText] = useState("")

	return (
		<div className="text-white">
			<MenuBar 
				onExport={()=>{
					setExportText(retakesConfig.toCvar())
					setShowExport(true)
				}}
				onExportJson={()=>{
					setExportText(JSON.stringify(retakesConfig))
					setShowExport(true)
				}}
			/>
			<AllDecks retakesConfig={retakesConfig} onChange={(newConfig)=>setRetakesConfig(newConfig)} />

			<Modal show={showExport} onCloseClick={()=>setShowExport(false)}>
				<div className="flex justify-center mb-2">
					<textarea
						cols={50} rows={10}
						value={exportText}
						readOnly
						className="text-black bg-transparent border-2 border-gray-900"
					/>
				</div>
				<div className="bg-gray-700 button flex justify-center" >Copy to clipboard</div>
			</Modal>
		</div>
	)
}

export default App
