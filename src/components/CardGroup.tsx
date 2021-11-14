import React from "react"
import Card from "../types/Card"
import CardGroup from "../types/CardGroup"
import Side from "../types/Side"
import CardComp from "./Card"
import NumEdit from "./NumEdit"

interface Props {
	cardGroup: CardGroup
	side: Side
	onChange?: (newCardGroup: CardGroup)=>void
	onRemove?: ()=>void
}

const CardGroupComp: React.FC<Props> = ({cardGroup,side,onChange,onRemove}) => {
	return (
		<div className="bg-red-500 m-1 p-1">
			<span className="float-right cursor-pointer" onClick={()=>onRemove?.()} >X</span>
			Num: <NumEdit value={cardGroup.numInDeck} 
				onChange={newNum => onChange?.(new CardGroup(Math.max(newNum,0),...cardGroup.cards))}
			/>
			<div className="flex">
				{cardGroup.cards.map((card,index) => 
					<CardComp key={index} card={card} side={side}
						onChange={(newCard)=>{
							onChange?.(new CardGroup(
								cardGroup.numInDeck,
								...cardGroup.cards.map((e,i)=>i===index?newCard:e))
							)
						}}
						onRemove={()=>onChange?.(new CardGroup(
							cardGroup.numInDeck,
							...cardGroup.cards.filter((e,i)=>i!==index))
						)}
					/>
				)}
				<div
					className="bg-blue-500 m-1 p-1 cursor-pointer"
					onClick={()=>onChange?.(
						new CardGroup(
							cardGroup.numInDeck,
							...cardGroup.cards,
							new Card("New card",false,false)
						)
					)}
				>
					Add card
				</div>
			</div>
		</div>
	)
}

export default CardGroupComp
