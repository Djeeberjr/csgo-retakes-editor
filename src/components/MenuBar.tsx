import React from "react"

interface Props {
    onExport?: ()=>void
    onExportJson?: ()=>void
	onImport?: ()=>void
	onSave?:()=>void
}

const MenuBar: React.FC<Props> = ({onExport,onExportJson,onSave,onImport}) => {
	return (
		<div className="bg-gray-800 h-10 m-1 p-1 flex">
			<div className="bg-gray-700 button" onClick={onExport}>
                Export
			</div>
			<div className="bg-gray-700 button" onClick={onExportJson}>
                Export to JSON
			</div>
			<div className="bg-gray-700 button" onClick={onImport}>
                Import
			</div>
			<div className="bg-gray-700 button" onClick={onSave}>
                Save
			</div>
			<a href="https://developer.valvesoftware.com/wiki/CS:GO_Game_Mode_-_Retakes" target="_blank" rel='noreferrer'>
				<div className="bg-gray-700 button">
                    Help
				</div>
			</a>
		</div>
	)
}

export default MenuBar
