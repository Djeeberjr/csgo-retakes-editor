import React, { useState } from "react"
import ItemToDisplay from "../ItemToDisplay"
import Item from "../types/Item"
import Side from "../types/Side"

interface Props {
    side: Side
    onChange?: (newItem: Item)=>void
}

const AddItem: React.FC<Props> = ({side,onChange}) => {
    const [selected,setSelected] = useState<Item>(Item.DEFAULT_PISTOL)

    return (
        <div>
            <select
                className="bg-gray-600 border-2 border-gray-700"
                onChange={(e)=>setSelected(Item[e.target.value as keyof typeof Item])}
            >
                {
                    Object.keys(Item).map(e=><option key={e} value={e}>{ItemToDisplay(Item[e as keyof typeof Item],side)}</option>)
                }
            </select>
            <span
                onClick={()=>onChange?.(selected)}
                className="cursor-pointer float-right"
            >
                Add
            </span>
        </div>
    )
}

export default AddItem
