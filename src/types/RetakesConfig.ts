import Card from "./Card"
import Deck from "./Deck"

class RetakesConfig {
    readonly ctPistol: Deck
    readonly tPistol: Deck

    readonly ctUpgradedPistol: Deck
    readonly tUpgradedPistol: Deck
    
    readonly ctLight: Deck
    readonly tLight: Deck

    readonly ctFull: Deck
    readonly tFull: Deck

    readonly ctEnemy: Card
    readonly tEnemy: Card

    readonly ctBonus: Card
    readonly tBonus: Card

    readonly ctBonusAvailability: number[]
    readonly tBonusAvailability: number[]

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
        this.ctPistol = args?.ctPistol ?? new Deck(0)
        this.tPistol = args?.tPistol ?? new Deck(0)

        this.ctUpgradedPistol = args?.ctUpgradedPistol ?? new Deck(0)
        this.tUpgradedPistol = args?.tUpgradedPistol ?? new Deck(0)

        this.ctLight = args?.ctLight ?? new Deck(0)
        this.tLight = args?.tLight ?? new Deck(0)

        this.ctFull = args?.ctFull ?? new Deck(0)
        this.tFull = args?.tFull ?? new Deck(0)

        this.ctEnemy = args?.ctEnemy ?? new Card("CT Enemy card",false,false)
        this.tEnemy = args?.tEnemy ?? new Card("T Enemy Card",false,false)

        this.ctBonus = args?.ctBonus ?? new Card("CT Bonus card",false,false)
        this.tBonus = args?.tBonus ?? new Card("T Bonus card",false,false)

        this.ctBonusAvailability = args?.ctBonusAvailability ?? [1] // Has to be 1 or the game will crash
        this.tBonusAvailability = args?.tBonusAvailability ?? [1]
    }

    public toCvar(){
        
    }

}

export default RetakesConfig
