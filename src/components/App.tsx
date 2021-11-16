import React, { useEffect, useState } from "react"
import copy from "copy-to-clipboard"
import RetakesConfig from "../types/RetakesConfig"
import AllDecks from "./AllDecks"
import MenuBar from "./MenuBar"
import Modal from "./Modal"

const App: React.FC = () => {
	const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())
	const [showExport,setShowExport] = useState(false)
	const [exportText,setExportText] = useState("")

	useEffect(()=>{
		// Load saved config
		const retakesJSON = window.localStorage.getItem("retakesJSON")
		if (retakesJSON){
			try{
				const parsedConfig: Record<string,unknown> = JSON.parse(retakesJSON)
				setRetakesConfig(RetakesConfig.fromObject(parsedConfig))
			}catch(err){
				window.localStorage.removeItem("retakesJSON")
			}
		}
	},[])

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
				onSave={()=>{
					const jsonString = JSON.stringify(retakesConfig)
					window.localStorage.setItem("retakesJSON",jsonString)
					// TODO: user feedback that config was saved
				}}
			/>
			<AllDecks retakesConfig={retakesConfig} onChange={(newConfig)=>setRetakesConfig(newConfig)} />

			<Modal show={showExport} onCloseClick={()=>setShowExport(false)}>
				<div className="flex justify-center mb-2">
					<textarea
						cols={50} rows={10}
						value={exportText}
						readOnly
						className="bg-transparent border-2 border-gray-900"
					/>
				</div>
				<div 
					className="bg-gray-700 button flex justify-center"
					onClick={()=>copy(exportText)}
				>Copy to clipboard</div>
			</Modal>
		</div>
	)
}

export default App
