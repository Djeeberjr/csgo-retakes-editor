import React from "react"
import ItemToDisplay from "../ItemToDisplay"
import Card from "../types/Card"
import Side from "../types/Side"
import AddItem from "./AddItem"
import SwitchButton from "./SwitchButton"
import TextEdit from "./TextEdit"

interface Props {
    card: Card
    side: Side
    onChange?: (newCard: Card)=>void
    onRemove?: ()=>void
}

const CardComp: React.FC<Props> = ({card,side,onChange,onRemove}) => {
    return (
        <div className="bg-blue-500 m-1 p-1">
            <span className="float-right cursor-pointer" onClick={()=>{onRemove?.()}}>X</span>
            <span className="font-bold"><TextEdit 
                text={card.title}
                onChange={(newTitle)=>onChange?.(new Card(newTitle,card.armor,card.helmet,...card.items))}
            /></span>
            <div>
                Helmet: <SwitchButton active={card.helmet} onChange={(to)=>onChange?.(new Card(card.title,card.armor,to,...card.items))} />
                Armor: <SwitchButton active={card.armor} onChange={(to)=>onChange?.(new Card(card.title,to,card.helmet,...card.items))} />
            </div>
            <div className="border border-red-500">
                {card.items.map((item,i)=>
                    <div 
                        key={item + i} // FIXME: this is just a "temporary" solution. Implement propper key
                    >
                        {ItemToDisplay(item,side)} <span onClick={()=>{
                            onChange?.(new Card(card.title,card.armor,card.helmet,...card.items.filter((_,fi)=>i!==fi)))
                        }} className="float-right cursor-pointer" >X</span>
                    </div>
                )}
                <AddItem side={side} onChange={newItem => onChange?.(new Card(card.title,card.armor,card.helmet,...card.items,newItem))} />
            </div>
        </div>
    )
}

export default CardComp
