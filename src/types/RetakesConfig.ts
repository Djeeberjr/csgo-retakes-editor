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

    public toCvar(){

    }

}

export default RetakesConfig
