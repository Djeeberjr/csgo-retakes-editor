import React from "react"
import Card from "../types/Card"
import CardGroup from "../types/CardGroup"
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
		<div className="bg-gray-800 m-1 p-1 overflow-x-scroll">
			<span className="font-bold">{title}</span> 
			{ side === Side.CT && <span className="px-2"> 
                Defuser: <NumEdit 
					value={deck.numDefusers}
					onChange={newNum => onChange?.(new Deck(Math.max(newNum,0),...deck.cardGroups))} 
				/> </span> }
			<div className="flex">
				{deck.cardGroups.map((group,index) =>
					<CardGroupComp 
						key={group.toString() + index} // FIXME: this is just a "temporary" solution. Implement propper key
						cardGroup={group}
						side={side} 
						onChange={(newGroup)=>{
							onChange?.(new Deck(
								deck.numDefusers,
								...deck.cardGroups.map((e,i)=>i===index?newGroup:e)
							))
						}}
						onRemove={()=>{
							onChange?.(new Deck(
								deck.numDefusers,
								...deck.cardGroups.filter((e,i)=>i!==index)
							))
						}}
					/>
				)}
				<div className="bg-gray-700 button my-auto" 
					onClick={()=>onChange?.(
						new Deck(
							deck.numDefusers,
							...deck.cardGroups,
							new CardGroup(1,new Card("New card",false,false))
						)
					)}
				>
					<div>
                        Add Group
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeckComp
