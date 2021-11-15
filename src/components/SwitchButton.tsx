import React from "react"

interface Props {
    active: boolean
    onChange: (to: boolean)=>void
}

const SwitchButton: React.FC<Props> = ({active,onChange}) => {
	return (
		<button onClick={()=>onChange(!active)} > {active?"YES":"NO"} </button>
	)
}

export default SwitchButton
