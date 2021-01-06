import "../App.css";
import wizard from '../images/wizard.png';

function YouWin() {
    return (
        <>
        <div id="you-win-page">
        <h1 id="you-win-h1">Congratulations!</h1>
        <img src={wizard} alt="wizard"/>
        <div id="you-win-verbiage">
        <p>You slayed the Beholder and returned the goldfish to the old Wizard. He greets you
            warmly with a grin on his face. "Welcome back, adventurers! It's so nice to see
            you alive and well. The world is now safer and my precious goldfish has been returned.
            I'm sure I don't have to tell you that the tale of your exploits will travel far and
            wide."
        </p>
        <p>"Please, take this as a thank you for the wonderful deed you have done. I hope I can 
            count on you in the future for new quests and adventures!"
        </p>
        <h2>You have received 25 gold!</h2>
        <p>You're well on your way to upgrading your gear and weapons, buying potions, and procuring
            fine trinkets and jewelry!
        </p>
        <p>At that very moment, the tavern maid approaches your table. 
        <br />
        <br />
        "Thanks for your patronage to the Stag and Lion. Here's your bill."
        <br />
        <br />
        You look at the bill. It's 25 gold. Evidently, one of your party members bought a celebratory round
        for everyone in the tavern. 
        <br />
        <br />
        Ah, well. At least you're leaving with a smile on your lips, a tale to tell
        and an thoroughly engrossed audience.
        </p>
        <h1 id="you-win-h1">The End</h1>
        </div>
        </div>
        </>
    )
}

export default YouWin;