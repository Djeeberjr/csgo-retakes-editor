import React, { useState } from 'react';
import DeckComp from './Deck';
import Card from '../types/Card';
import CardGroup from '../types/CardGroup';
import Deck from '../types/Deck';
import Item from '../types/Item';
import Side from '../types/Side';

function App() {
  const [CTDeck,setCTDeck] = useState<Deck>(new Deck(
    2,new CardGroup(
      2,new Card("AWE fake",false,false,Item.AWP,Item.DECOY),
      new Card("M4 Flash",true,true,Item.AK_47_M4,Item.FLASHBANG)
    ),
    new CardGroup(
      3,new Card("One deag",true,false,Item.DESERT_EAGLE)
    )
  ))

  return (
    <div>
      <DeckComp title="CT Normal" side={Side.CT} deck={CTDeck} onChange={(newDeck)=> setCTDeck(newDeck)} />
    </div>
  );
}

export default App;
