import React from "react"

interface Props {
	show: boolean
	onCloseClick?: ()=>void
}

const Modal: React.FC<Props> = ({children,show,onCloseClick}) => {
	return (
		<div 
			className={`${!show?"hidden":"" } 
			fixed z-10 left-0 top-0 w-full h-full 
			flex justify-center items-center bg-gray-900 bg-opacity-80`}
			onClick={()=>{
				onCloseClick?.()
			}}>
			<div className="bg-gray-800 mx-auto p-5 border-2 border-gray-800 w-10/12 overflow-hidden max-h-full" onClick={(e)=>{
				e.stopPropagation()
			}}>
				{children}
			</div>
		</div>
	)
}

export default Modal
