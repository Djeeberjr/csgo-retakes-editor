import Card from "./Card"

class CardGroup {
	readonly numInDeck: number
	readonly cards: Card[]

	constructor(numInDeck: number, ...cards: Card[]) {
		this.numInDeck = numInDeck
		this.cards = cards
	}

	public toCvar(): string {
		return `${this.numInDeck};${this.cards.map(e => e.toCvar()).join(";")}`
	}

	static fromObject(input:  Record<string, unknown>): CardGroup{
		return new CardGroup(
			input.numInDeck as number,
			...(input.cards as Record<string, unknown>[]).map((e)=>Card.fromObject(e))
		)
	}
}

export default CardGroup
