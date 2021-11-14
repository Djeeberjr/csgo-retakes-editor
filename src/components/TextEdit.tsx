import React, { useEffect, useRef, useState } from "react"

interface Props {
    text: string
    onChange?: (newText: string)=>void
}

const TextEdit: React.FC<Props> = ({text,onChange}) => {
    const [edit,setEdit] = useState<boolean>(false)
    const [inputValue,setinputValue] = useState(text)
    const inputRef = useRef<HTMLInputElement>(null)

	useEffect(()=>{
		if (edit){
			inputRef.current?.select()
		}else{
            if (text !== inputValue){
                onChange?.(inputValue)
            }
        }
	},[edit])


    return (
        <>
            {!edit && <span className="cursor-pointer" onClick={()=>setEdit(true)} >{inputValue}</span>}
            {edit &&
                <form className="inline" onSubmit={(e)=>{
                    e.preventDefault()
                    setEdit(false)
                }} >
                    <input
                        type="text"
                        className="bg-transparent outline-none font-bold"
                        value={inputValue}
                        onChange={(e)=>setinputValue(e.target.value)}
                        onBlur={()=>setEdit(false)}
                        ref={inputRef}
                    ></input>
                </form>
            }
        </>
    )
}

export default TextEdit
