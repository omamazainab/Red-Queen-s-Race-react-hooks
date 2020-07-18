import React from 'react';
import './App.css';

function App() {


  return (
   <div>
     <div className="wrapper">
        <div className="sky">
            <div id="sun"><iframe
                src="https://giphy.com/embed/L08sJsg6tEUyb1E0VW" width="10%" height="100%" 
                frameBorder="0" className="giphy-embed-sun" allowFullScreen></iframe>
            </div>
        </div>
        <div className="earth">
            <div id="red-queen_and_alice">
                <img id="red-queen_and_alice_sprite"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                    alt="Alice and the Red Queen running to stay in place." />
            </div>
        </div>
        <div className="scenery" id="foreground1">
            <img id="palm3" src="palm3.png" alt=" " />
        </div>
        <div className="scenery" id="foreground2">
            <img id="bush" src="bush.png" alt=" " />
            <img id="w_rook_upright" src="plant.png" alt= " " />
        </div>
        <div className="scenery" id="background1">
            <img id="r_pawn_upright" src="bush.png"
                alt=" " />
            <img id="w_rook" src="plant2.png" alt=" " />
            <img id="palm1" src="palm2.png" alt=" " />
        </div>
        <div className="scenery" id="background2">
            <img id="r_pawn" src="palm2.png" alt=" " />
            <img id="r_knight" src="plant3.png" alt=" " />
            <img id="palm2" src="palm2.png" alt=" "/>
        </div>
    </div>
   </div>
  );
}

export default App;
