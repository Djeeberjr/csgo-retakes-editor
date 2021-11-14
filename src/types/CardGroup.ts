import Card from "./Card"

class CardGroup {
    readonly numInDeck: number
    readonly cards: Card[]

    constructor(numInDeck: number, ...cards: Card[]) {
        this.numInDeck = numInDeck
        this.cards = cards
    }

    public toString(): string {
        return `${this.numInDeck};${this.cards.map(e => e.toString()).join(";")}`
    }
}

export default CardGroup
