<img src={character.thumbnail} id="thumbnail" />
                    {character.name} <br />
                    {character.race} | {character.characterClass}
                    <br />
                    <button type="button">
                      <Link to={`/characters/${character._id}`}>VIEW</Link>
                    </button>
                    <button>
                      <Link to={`/UpdateCharacterForm/${character._id}`}>
                        EDIT
                      </Link>
                    </button>
                    <Button variant="primary" onClick={handleShow}>
                      DELETE
                    </Button>
                    <Modal show={showModal} onHide={handleClose}>
                      <Modal.Header>
                        <Modal.Title>Delete Character</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to delete this character?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          
                          onClick={() => {
                            deleteCharacter(character._id); 
                            handleClose();
                          }}
                        >
                          DELETE
                        </Button>
                      </Modal.Footer>
                    </Modal>