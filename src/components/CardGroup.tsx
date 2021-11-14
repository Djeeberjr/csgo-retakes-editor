import React from "react"
import CardGroup from "../types/CardGroup"
import Side from "../types/Side"
import CardComp from "./Card"
import NumEdit from "./NumEdit"

interface Props {
	cardGroup: CardGroup
	side: Side
	onChange?: (newCardGroup: CardGroup)=>void
}

const CardGroupComp: React.FC<Props> = ({cardGroup,side,onChange}) => {
	return (
		<div className="bg-red-500 m-1 p-1">
			Num: <NumEdit value={cardGroup.numInDeck} 
				onChange={newNum => onChange?.(new CardGroup(Math.max(newNum,0),...cardGroup.cards))}
			/>
			<div className="flex">
				{cardGroup.cards.map((card,index) => 
					<CardComp card={card} side={side} onChange={(newCard)=>{
							onChange?.(new CardGroup(
								cardGroup.numInDeck,
								...cardGroup.cards.map((e,i)=>i===index?newCard:e))
							)
					}} />
				)}
			</div>
		</div>
	)
}

export default CardGroupComp
