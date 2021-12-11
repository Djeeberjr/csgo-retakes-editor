import React, { useEffect, useState } from "react"
import copy from "copy-to-clipboard"
import RetakesConfig from "../types/RetakesConfig"
import AllDecks from "./AllDecks"
import MenuBar from "./MenuBar"
import Modal from "./Modal"
import defaultConfig from "./../defaultConfig.json"

const App: React.FC = () => {
	const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())
	const [showExport,setShowExport] = useState(false)
	const [showImport,setShowImport] = useState(false)
	const [importText,setImportText] = useState("")
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
				setRetakesConfig(RetakesConfig.fromObject(defaultConfig))
			}
		}else{
			setRetakesConfig(RetakesConfig.fromObject(defaultConfig))
		}
	},[])


	useEffect(()=>{
		const handler = ()=>{
			const jsonString = JSON.stringify(retakesConfig)
			console.debug(jsonString)
			window.localStorage.setItem("retakesJSON",jsonString)
		}

		window.addEventListener("beforeunload",handler)

		return ()=>{
			window.removeEventListener("beforeunload",handler)
		}
	},[retakesConfig])

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
				onImport={()=>{
					setShowImport(true)
				}}
				onClear={()=>{
					setRetakesConfig(new RetakesConfig())
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
			<Modal show={showImport} onCloseClick={()=>setShowImport(false)}>
				<div className="flex justify-center mb-2">
					<textarea
						cols={50} rows={10}
						value={importText}
						onChange={(e)=>setImportText(e.target.value)}
						className="bg-transparent border-2 border-gray-900"
					/>
				</div>
				<div 
					className="bg-gray-700 button flex justify-center"
					onClick={()=>{
						try{
							const parsedConfig: Record<string,unknown> = JSON.parse(importText)
							setRetakesConfig(RetakesConfig.fromObject(parsedConfig))
							setShowImport(false)
							setImportText("")
						}catch(e){
							console.error(e)
						}
					}}
				>Import</div>
			</Modal>
		</div>
	)
}

export default App
