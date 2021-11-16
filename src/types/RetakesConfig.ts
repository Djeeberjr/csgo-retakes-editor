import Card from "./Card"
import Deck from "./Deck"

class RetakesConfig {
	readonly ctPistol: Deck = new Deck(0)
	readonly tPistol: Deck = new Deck(0)

	readonly ctUpgradedPistol: Deck = new Deck(0)
	readonly tUpgradedPistol: Deck = new Deck(0)
    
	readonly ctLight: Deck = new Deck(0)
	readonly tLight: Deck = new Deck(0)

	readonly ctFull: Deck = new Deck(0)
	readonly tFull: Deck = new Deck(0)

	readonly ctEnemy: Card = new Card("CT Enemy card",false,false)
	readonly tEnemy: Card = new Card("T Enemy card",false,false)

	readonly ctBonus: Card = new Card("CT Bonus card",false,false)
	readonly tBonus: Card = new Card("T Bonus card",false,false)

	// If not set to [1] or a valid value the game will crash
	readonly ctBonusAvailability: number[] = [1]
	readonly tBonusAvailability: number[] = [1]

	// TODO: there must be some smarter way to do this
	constructor(args? :{
        ctPistol?: Deck,
        tPistol?: Deck,
        ctUpgradedPistol?: Deck,
        tUpgradedPistol?: Deck,
        ctLight?: Deck,
        tLight?: Deck,
        ctFull?: Deck,
        tFull?:Deck,
        ctEnemy?: Card,
        tEnemy?: Card,
        ctBonus?: Card,
        tBonus?: Card,
        ctBonusAvailability?: number[],
        tBonusAvailability?: number[],
    }){
		if (args){
			args.ctPistol && (this.ctPistol = args.ctPistol)
			args.tPistol && (this.tPistol = args.tPistol)
			args.ctUpgradedPistol && (this.ctUpgradedPistol = args.ctUpgradedPistol)
			args.tUpgradedPistol && (this.tUpgradedPistol = args.tUpgradedPistol)
			args.ctLight && (this.ctLight = args.ctLight)
			args.tLight && (this.tLight = args.tLight)
			args.ctFull && (this.ctFull = args.ctFull)
			args.tFull && (this.tFull = args.tFull)
			args.ctEnemy && (this.ctEnemy = args.ctEnemy)
			args.tEnemy && (this.tEnemy = args.tEnemy)
			args.ctBonus && (this.ctBonus = args.ctBonus)
			args.tBonus && (this.tBonus = args.tBonus)
			args.ctBonusAvailability && (this.ctBonusAvailability = args.ctBonusAvailability)
			args.tBonusAvailability && (this.tBonusAvailability = args.tBonusAvailability)
		}
	}

	public toCvar(): string{
		console.debug("THIS:")
		return `mp_retake_ct_loadout_default_pistol_round "${this.ctPistol.toCvar()}";
mp_retake_t_loadout_default_pistol_round "${this.tPistol.toCvar()}";
mp_retake_ct_loadout_upgraded_pistol_round "${this.ctUpgradedPistol.toCvar()}";
mp_retake_t_loadout_upgraded_pistol_round "${this.tUpgradedPistol.toCvar()}";
mp_retake_ct_loadout_light_buy_round "${this.ctLight.toCvar()}";
mp_retake_t_loadout_light_buy_round "${this.tLight.toCvar()}";
mp_retake_ct_loadout_full_buy_round "${this.ctFull.toCvar()}";
mp_retake_t_loadout_full_buy_round "${this.tFull.toCvar()}";
mp_retake_ct_loadout_bonus_card "${this.ctBonus.toCvar()}";
mp_retake_t_loadout_bonus_card "${this.tBonus.toCvar()}";
mp_retake_ct_loadout_bonus_card_availability "${this.ctBonusAvailability.join(",")}";
mp_retake_t_loadout_bonus_card_availability "${this.tBonusAvailability.join(",")}";
`
	}

	static fromObject(input: Record<string, unknown>): RetakesConfig {
		return new RetakesConfig({
			ctPistol: Deck.fromObject(input.ctPistol as Record<string, unknown>),
			tPistol: Deck.fromObject(input.tPistol as Record<string,unknown>),
			ctUpgradedPistol: Deck.fromObject(input.ctUpgradedPistol as Record<string,unknown>),
			tUpgradedPistol: Deck.fromObject(input.tUpgradedPistol as Record<string,unknown>),
			ctLight: Deck.fromObject(input.ctLight as Record<string,unknown>),
			tLight: Deck.fromObject(input.tLight as Record<string,unknown>),
			ctFull: Deck.fromObject(input.ctFull as Record<string,unknown>),
			tFull: Deck.fromObject(input.tFull as Record<string,unknown>),
			ctEnemy: Card.fromObject(input.ctEnemy as Record<string,unknown>),
			tEnemy: Card.fromObject(input.tEnemy as Record<string,unknown>),
			ctBonus: Card.fromObject(input.ctBonus as Record<string,unknown>),
			tBonus: Card.fromObject(input.tBonus as Record<string,unknown>),
			ctBonusAvailability: input.ctBonusAvailability as number[],
			tBonusAvailability: input.tBonusAvailability as number[],
		})
	}

}

export default RetakesConfig
