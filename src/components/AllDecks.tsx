import React from "react"
import RetakesConfig from "../types/RetakesConfig"
import Side from "../types/Side"
import CardComp from "./Card"
import DeckComp from "./Deck"

interface Props {
	retakesConfig: RetakesConfig
	onChange?: (newConfig: RetakesConfig) => void
}

const AllDecks: React.FC<Props> = ({ retakesConfig, onChange }) => {
	return (
		<div>
			<DeckComp title="CT Pistol" side={Side.CT} deck={retakesConfig.ctPistol}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ ctPistol: newDeck } }))} />
			<DeckComp title="T Pistol" side={Side.T} deck={retakesConfig.tPistol}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ tPistol: newDeck } }))} />

			<DeckComp title="CT Upgraded Pistol" side={Side.CT} deck={retakesConfig.ctUpgradedPistol}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ ctUpgradedPistol: newDeck } }))} />
			<DeckComp title="T Upgraded Pistol" side={Side.T} deck={retakesConfig.tUpgradedPistol}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ tUpgradedPistol: newDeck } }))} />

			<DeckComp title="CT Light" side={Side.CT} deck={retakesConfig.ctLight}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ ctLight: newDeck } }))} />
			<DeckComp title="T Light" side={Side.T} deck={retakesConfig.tLight}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ tLight: newDeck } }))} />

			<DeckComp title="CT Full" side={Side.CT} deck={retakesConfig.ctFull}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ ctFull: newDeck } }))} />
			<DeckComp title="T Full" side={Side.T} deck={retakesConfig.tFull}
				onChange={(newDeck) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ tFull: newDeck } }))} />

			<div className="bg-gray-700 m-1 p-1">
				<span className="font-bold">Enemy cards</span>
				<div className="flex">
					<CardComp card={retakesConfig.ctEnemy} side={Side.T}
						onChange={(newCard) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ ctEnemy: newCard } }))} />
					<CardComp card={retakesConfig.tEnemy} side={Side.CT}
						onChange={(newCard) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ tEnemy: newCard } }))} />
				</div>
			</div>

			<div className="bg-gray-700 m-1 p-1">
				<span className="font-bold">Enemy cards</span>
				<div className="flex">
					<CardComp card={retakesConfig.ctBonus} side={Side.CT}
						onChange={(newCard) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ ctBonus: newCard } }))} />
					<CardComp card={retakesConfig.tBonus} side={Side.T}
						onChange={(newCard) => onChange?.(new RetakesConfig({ ...retakesConfig, ...{ tBonus: newCard } }))} />
				</div>
			</div>
		</div>
	)
}

export default AllDecks