import "../App.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Link } from 'react-router-dom'
import { useState } from "react";

function Tavern() {
    const [open, setOpen] = useState(true);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [openChat, setOpenChat] = useState(false);
    const onOpenChatModal = () => setOpenChat(true);
    const onCloseChatModal = () => setOpenChat(false);

    const [openWizChat, setOpenWizChat] = useState(false);
    const onOpenWizChatModal = () => setOpenWizChat(true);
    const onCloseWizChatModal = () => setOpenWizChat(false);

    const [openQuestChat, setOpenQuestChat] = useState(false);
    const onOpenQuestChat = () => setOpenQuestChat(true);
    const onCloseQuestChat = () => setOpenQuestChat(false);


    return (
        <>
        <nav className="topnav">
                <Link to="/">HOME</Link>
                <Link to="/characters">CHARACTERS</Link>
                <Link to="/createcharacterform">CREATE</Link>
                <Link to="/battle">BATTLE</Link>
              </nav>
        <div id="tavern-background-image">
            
            <Modal open={open} onClose={onCloseModal} center>
             <h2>So it begins...</h2> 
          <p>
          In a land of Myth and a time of Legend there lived a group of adventurers who's destinies 
          would sculpt the future of the world. It all started in a little tavern in a little 
          village when a little gnome spilled their little drink onto an abnormally large tome 
          belonging to an old Wizard....
          </p>
          <button onClick={onCloseModal}>BEGIN</button>
        </Modal>

        <button onClick={onOpenChatModal}>RAISE A GLASS</button>
        <Modal open={openChat} onClose={onCloseChatModal} center className="tavern-modal">
          <p>
            Tavern music is playing loudly, the drinks are flowing and you are reminiscing with your adventuring party.
            <br />
            <br />
            "Oi! Thiss Is may thissessmahsoooong!" says a tipsy gnome as she spills some ale on a Wizard's Tome
            <br />
            <br />
            The old Wizard says, "Wh whhat who...Hey now watch yourself! This is THE Adventurers Registry of Legend! It's said 
            that any adventurer who signs their name in this book is to go off on a quest in which the results will 
            shape the future of the world as we know it!"
            <br />
            <br />
            "Oowwhhh shorry shir!" says the tipsy gnome. "I dii..diddnn...dddiddidnnn....wasthan axethdent. 'Tis my birthhday toodayy!"
            The Gnome leans closer to the Wizard and whispers
            "Ohh what're ye doin frienly wiz..um...wiz..." and she promptly passes out as she falls off the table and onto the floor.
            <br />
            <br />
            The old Wizard says "Mmm... I'm afraid it's not interested in you little one..."
            They raise their gaze and lock eyes with you.
            <br />
            <br />
            "You there, on the other hand," they say. " I have much to discuss with you! 
            Come, sit, enjoy an ale on me while I tell you a story from a long long time ago..."
          </p>
          <button onClick={onCloseChatModal} id="tavern-button">GO ON....</button>
        </Modal>
        <br />

        <button onClick={onOpenWizChatModal}>TALK TO THE OLD WIZARD</button>
        <Modal open={openWizChat} onClose={onCloseWizChatModal} center>
            <h2>Thanks for listening, Adventurer!</h2>
          <p>
            A long time ago I lost a valuable posession that is guarded by an ancient monster. Will
            you fetch it for me? Treasures and reknown will be yours for the taking!
          </p>
          <button onClick={onCloseWizChatModal}>WE ACCEPT</button>
        </Modal>
        <br />
        <button onClick={onOpenQuestChat}>LET'S DO THIS</button>
        <Modal open={openQuestChat} onClose={onCloseQuestChat} center>
            <h2>Wonderful!</h2>
          <p>
            Get the item and meet me back in this tavern when you are done. Good luck!
          </p>
          <form action="./battle">
            <input type="submit"/></form>
        </Modal>
            
     </div>
     </>   
    )
}

export default Tavern;