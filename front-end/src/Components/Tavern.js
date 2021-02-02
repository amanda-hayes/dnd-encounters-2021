import "../App.css";
import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import wizardbook from "../images/wizardbook.png";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

function Tavern() {
  const [showModal, setShowModal] = useState([false]);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [openAccept, setOpenAccept] = useState(true);
  const onOpenAcceptModal = () => setOpenAccept(true);
  const onCloseAcceptModal = () => setOpenAccept(false);

  const [openChat, setOpenChat] = useState(false);
  const onOpenChatModal = () => setOpenChat(true);
  const onCloseChatModal = () => setOpenChat(false);

  const [openWizChat, setOpenWizChat] = useState(false);
  const onOpenWizChatModal = () => setOpenWizChat(true);
  const onCloseWizChatModal = () => setOpenWizChat(false);

  const [openQuestChat, setOpenQuestChat] = useState(false);
  const onOpenQuestChat = () => setOpenQuestChat(true);
  const onCloseQuestChat = () => setOpenQuestChat(false);

  useEffect(() => {
    setShowModal();
    setOpenWizChat();
    setOpenQuestChat();
    setOpenAccept();
  }, []);

  return (
    <>
      <div>
        <h1>Party time!</h1>
        <p>
          Tavern music is playing loudly, the drinks are flowing and you are
          reminiscing with your adventuring party.
        </p>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{
            backgroundColor: "rgb(44 90 117)",
            borderColor: "rgb(44 90 117)",
          }}
        >
          Say something
        </Button>
        <Modal show={showModal} onHide={handleClose}>
          <ModalHeader>
            <ModalTitle>Cheers!</ModalTitle>
          </ModalHeader>
          <ModalBody>
            Gnome: 'Oi! Watch where yer goin!'
            <br />
            Tiefling: 'To adventure! To friendship! To free booze!'
            <br />
            Tabaxi: 'Meow!'
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Huzzah!
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              More drinks!
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Let's Sing!
            </Button>
          </ModalFooter>
        </Modal>
        <br />
        <br />
        <Button
          variant="primary"
          onClick={onOpenWizChatModal}
          style={{
            backgroundColor: "rgb(44 90 117)",
            borderColor: "rgb(44 90 117)",
          }}
        >
          Talk to the Wizard
        </Button>
        <Modal show={openWizChat} onHide={onCloseWizChatModal}>
          <ModalHeader>
            <ModalTitle>
              You approach an aged wizard sitting at a table alone, smoking his
              pipe.
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            The wizard looks up at you and chuckles. 'So it begins...'
            <br />
            In a land of Myth and a time of Legend there lived a group of
            adventurers who's destinies would sculpt the future of the world...
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={onOpenQuestChat}>
              What are you on about?
            </Button>
            <Button variant="secondary" onClick={onOpenQuestChat}>
              Go on...
            </Button>
            <Button variant="secondary" onClick={onOpenQuestChat}>
              No thank you, goodbye!
            </Button>
          </ModalFooter>
        </Modal>
        <Modal show={openQuestChat} onHide={onCloseQuestChat}>
          <ModalHeader>
            <ModalTitle>This is intriguing...</ModalTitle>
          </ModalHeader>
          <ModalBody>
            The old wizard tells you a tale of intrigue and courage, of magic
            and mystery, of treasure and toil, of monsters and men. Suddenly,
            you see a glow coming from the tome in his hands.
            <br />
            <br />
            Finally, he says "Ahhh yes, so it seems the tome finds you worthy of
            such a quest. Well now, let's see here, where we are to send
            you...hmm?" He licks his index finger and turns a page. "It says:
            Behold, Adventurers! The quest is rather simple, however the
            consequences are severe...I require, on the Isle of Sapphire, a
            small goldfish... For you'll find me in the depths of Xanthar's
            Lair. Think you're up to the task?"
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={onOpenAcceptModal}>
              Will there be treasure?
            </Button>
            <Button variant="secondary" onClick={onOpenAcceptModal}>
              Will there be danger?
            </Button>
            <Button variant="secondary" onClick={onOpenAcceptModal}>
              Will there be booze?
            </Button>
          </ModalFooter>
        </Modal>
        <Modal show={openAccept} onHide={onCloseAcceptModal}>
          <ModalHeader>
            <ModalTitle>The Wizard laughs...</ModalTitle>
          </ModalHeader>
          <ModalBody>
            Yes! All that and MORE!
            <br />
            <br />
            "Retrieve the item and meet me back in this tavern when you are
            done. Now get a move on...and good luck, adventurer. You're going to
            need it. For few who have traveled this path have returned to tell
            the tale."
          </ModalBody>
          <ModalFooter>
            <Link to="./battle">
              <Button variant="secondary">Let's do it!</Button>
            </Link>
          </ModalFooter>
        </Modal>
        {/* <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: "tavern-overlay",
            modal: "tavern-modal",
          }}
        >
          <h2>So it begins...</h2>
          <p>
            In a land of Myth and a time of Legend there lived a group of
            adventurers who's destinies would sculpt the future of the world. It
            all started in a little tavern in a little village when a little
            gnome spilled their little drink onto an abnormally large tome
            belonging to an old Wizard....
          </p>
          <button onClick={onOpenChatModal}>BEGIN</button>
        </Modal>

        <Modal
          open={openChat}
          onClose={onCloseChatModal}
          center
          classNames={{
            overlay: "tavern-overlay",
            modal: "tavern-modal",
          }}
        >
          <h1>Party time!</h1>
          <p>
            Tavern music is playing loudly, the drinks are flowing and you are
            reminiscing with your adventuring party.
            <br />
            <br />
            "Oi! Thiss Is may thissessmahsoooong!" says a tipsy gnome as she
            spills some ale on a Wizard's Tome.
            <br />
            <br />
            The old Wizard says, "Whoa there...watch yourself, gnome! This book
            is THE Adventurers Registry of Legend! It's said that any adventurer
            who signs their name in this book is to go off on a quest in which
            the results will shape the future of the world as we know it!"
            <br />
            <br />
            "Oowwhhh shorry shir!" says the tipsy gnome. "I
            dii..diddnn...dddiddidnnn....was an axethdent. 'Tis my birthhday
            toodayy!" The Gnome leans closer to the Wizard and whispers "Ohh
            what're ye doin frienly wiz..um...wiz..." and she promptly passes
            out as she falls out of her chair and onto the floor.
            <br />
            <br />
            The old Wizard says "Mmm... I'm afraid it's not interested in you,
            little one..." They raise their gaze and lock eyes with you.
            <br />
            <br />
            "You there, on the other hand," they say. " I have much to discuss
            with you! Come, sit, enjoy an ale on me while I tell you a story
            from a long long time ago..."
          </p>
          <button onClick={onOpenWizChatModal}>GO ON....</button>
        </Modal>
        <br />

        <Modal
          open={openWizChat}
          onClose={onCloseWizChatModal}
          center
          classNames={{
            overlay: "tavern-overlay",
            modal: "tavern-modal",
          }}
        >
          <h1>Pull up a chair!</h1>
          <img src={wizardbook} id="wizard-book-image" alt="wizard-book" />
          <p>
            The old wizard tells you a tale of intrigue and courage, of magic
            and mystery, of treasure and toil, of monsters and men. Suddenly,
            you see a glow coming from the tome in his hands.
            <br />
            <br />
            Finally, he says "Ahhh yes, so it seems the tome finds you worthy of
            such a quest. Well now, let's see here, where we are to send
            you...hmm?" He licks his index finger and turns a page. "It says:
            Behold, Adventurers! The quest is rather simple, however the
            consequences are severe...I require, on the Isle of Sapphire, a
            small goldfish... For you'll find me in the depths of Xanthar's
            Lair. Think you're up to the task?"
          </p>
          <button onClick={onOpenQuestChat}>ACCEPT QUEST</button>
        </Modal>
        <br />
        <Modal
          open={openQuestChat}
          onClose={onCloseQuestChat}
          center
          classNames={{
            overlay: "tavern-overlay",
            modal: "tavern-modal",
          }}
        >
          <h1>Wonderful!</h1>
          <p
            classNames={{
              modal: "battle-modal",
            }}
          >
            "Retrieve the item and meet me back in this tavern when you are
            done. Now get a move on...and good luck, adventurer. You're going to
            need it."
          </p>
          <Link to="./battle">
            <button
              classNames={{
                overlay: "tavern-overlay",
                modal: "tavern-modal",
              }}
            >
              LET'S GO
            </button>
          </Link>
        </Modal> */}
      </div>
    </>
  );
}

export default Tavern;
