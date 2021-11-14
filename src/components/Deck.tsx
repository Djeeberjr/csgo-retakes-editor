import React from "react"
import Deck from "../types/Deck"
import Side from "../types/Side"
import CardGroupComp from "./CardGroup"

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
            { side === Side.CT && <span> D: {deck.numDefusers} </span> }
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
