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

	static fromObject(input: Record<string, unknown>): Deck{
		return new Deck(
			input.numDefusers as number,
			...(input.cardGroups as Record<string, unknown>[]).map((e)=>CardGroup.fromObject(e))
		)
	}
}

export default Deck
