import React, { useState } from "react"
import RetakesConfig from "../types/RetakesConfig"
import Side from "../types/Side"
import DeckComp from "./Deck"

const AllDecks: React.FC = () => {
    const [retakesConfig,setRetakesConfig] = useState(new RetakesConfig())

    return (
        <div>
            <DeckComp title="CT Pistol" side={Side.CT} deck={retakesConfig.ctPistol} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{ctPistol:newDeck}}))} />
            <DeckComp title="T Pistol" side={Side.T} deck={retakesConfig.tPistol} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{tPistol:newDeck}}))} />
            
            <DeckComp title="CT Upgraded Pistol" side={Side.CT} deck={retakesConfig.ctUpgradedPistol} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{ctUpgradedPistol:newDeck}}))} />
            <DeckComp title="T Upgraded Pistol" side={Side.T} deck={retakesConfig.tUpgradedPistol} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{tUpgradedPistol:newDeck}}))} />
            
            <DeckComp title="CT Light" side={Side.CT} deck={retakesConfig.ctLight} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{ctLight:newDeck}}))} />
            <DeckComp title="T Light" side={Side.T} deck={retakesConfig.tLight} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{tLight:newDeck}}))} />
            
            <DeckComp title="CT Full" side={Side.CT} deck={retakesConfig.ctFull} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{ctFull:newDeck}}))} />
            <DeckComp title="T Full" side={Side.T} deck={retakesConfig.tFull} 
                onChange={(newDeck)=> setRetakesConfig(new RetakesConfig({...retakesConfig,...{tFull:newDeck}}))} />

        </div>
    )
}

export default AllDecks