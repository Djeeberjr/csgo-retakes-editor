import React from "react"
import Deck from "../types/Deck"
import Side from "../types/Side"
import CardGroupComp from "./CardGroup"
import NumEdit from "./NumEdit"

interface Props {
    deck: Deck
    side: Side
    title: string
    onChange?: (newDeck: Deck)=>void
}

const DeckComp: React.FC<Props> = ({deck,side,title,onChange}) => {
    return (
        <div className="bg-green-400 m-1 p-1">
            <span className="font-bold">{title}</span> 
            { side === Side.CT && <span> 
                D: <NumEdit 
                    value={deck.numDefusers}
                    onChange={newNum => onChange?.(new Deck(Math.max(newNum,0),...deck.cardGroups))} 
                /> </span> }
            <div className="flex">
                {deck.cardGroups.map((group,index) =>
                    <CardGroupComp key={index} cardGroup={group} side={side} 
                        onChange={(newGroup)=>{
                            onChange?.(new Deck(
                                deck.numDefusers,
                                ...deck.cardGroups.map((e,i)=>i===index?newGroup:e)
                            ))
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default DeckComp
