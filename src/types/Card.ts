import Item from "./Item"

class Card {
	readonly title: string
	readonly armor: boolean
	readonly helmet: boolean
	readonly items: Item[]

	constructor(title: string,armor: boolean,helmet: boolean,...items:Item[]){
		this.title = title
		this.armor = armor
		this.helmet = helmet
		this.items = items
	}

	public toCvar(): string {
		return `${this.title},${bToS(this.armor)},${bToS(this.helmet)},${this.items.join(",")}`
	}

	static fromObject(input: Record<string, unknown>): Card {
		return new Card(
			input.title as string,
			input.armor as boolean,
			input.helmet as boolean,
			...input.items as Item[]
		)
	}
}

/**
 * Converts a boolean to 1 for true and 0 for false
 */
function bToS(bool: boolean): string{
	return bool?"1":"0"
}

export default Card
