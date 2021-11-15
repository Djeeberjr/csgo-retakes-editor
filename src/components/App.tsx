import React from 'react';
import AllDecks from './AllDecks';

function App() {
  // const [CTDeck,setCTDeck] = useState<Deck>(new Deck(
  //   2,new CardGroup(
  //     2,new Card("AWE fake",false,false,Item.AWP,Item.DECOY),
  //     new Card("M4 Flash",true,true,Item.AK_47_M4,Item.FLASHBANG)
  //   ),
  //   new CardGroup(
  //     3,new Card("One deag",true,false,Item.DESERT_EAGLE)
  //   )
  // ))

  return (
    <div className="text-white">
      <AllDecks />
    </div>
  );
}

export default App;
