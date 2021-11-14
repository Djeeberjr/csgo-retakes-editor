import CardGroup from "./CardGroup"

class Deck {
    readonly numDefusers: number
    readonly cardGroups: CardGroup[]

    constructor(numDefusers: number,...cardGroups: CardGroup[]){
        this.numDefusers = numDefusers
        this.cardGroups = cardGroups
    }

    public toString(): string {
        return `${this.numDefusers}|${this.cardGroups.map(e => e.toString()).join("|")}`
    }
}

export default Deck
