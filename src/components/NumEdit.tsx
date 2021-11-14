import React from "react"

interface Props {
    value: number
    onChange?:(newNumer: number)=>void
}

const NumEdit: React.FC<Props> = ({value,onChange}) => {
    return (
        <>
            <span 
                className="cursor-pointer select-none"
                onClick={()=>onChange?.(value - 1)}
            >-</span>
            {value}
            <span 
                className="cursor-pointer select-none"
                onClick={()=>onChange?.(value + 1)}
            >+</span>
        </>
    )
}

export default NumEdit
