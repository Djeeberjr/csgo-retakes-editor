import CardGroup from "./CardGroup"

class Deck {
	readonly numDefusers: number
	readonly cardGroups: CardGroup[]

	constructor(numDefusers: number,...cardGroups: CardGroup[]){
		this.numDefusers = numDefusers
		this.cardGroups = cardGroups
	}

	public toCvar(): string {
		return `${this.numDefusers}|${this.cardGroups.map(e => e.toCvar()).join("|")}`
	}
}

export default Deck
