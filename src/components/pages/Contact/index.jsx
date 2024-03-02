import React, { useState } from "react"; // Import useState hook for state management
import classNames from "classnames";
import styles from "./Contact.module.css";
import { Modal, Button, Card } from "react-bootstrap";

const Contact = () => {
  // state variable and setter function using useState hook
  const [showChatModal, setShowChatModal] = useState(false);
  const [showThrowModal, setShowThrowModal] = useState(false); // State for throw modal
  // ChatModal
  const ChatModal = () => (
    <Modal show={showChatModal} onHide={() => setShowChatModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Message Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="chat-container">
          {/* Chat message history (optional) */}
          <div className="chat-input">
            <textarea
              placeholder="Type your message here..."
              rows="4"
            ></textarea>
            <button
              className="send-button"
              onClick={() => setShowThrowModal(true)}
            >
              THROW
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );

  // ThrowModal
  const ThrowModal = () => (
    <Modal show={showThrowModal} onHide={() => setShowThrowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Throw Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>We've received your message! Thank you for reaching out to us.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShowThrowModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <section id="contact" className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className={styles.text}>
            <h2 className="mt-5 text-center">Submit your own recipes!</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Recipe Name?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Give us your email so we can contact you!
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  You can write or paste your recipe below!
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={classNames(
                    "btn",
                    "btn-primary",
                    styles.submitButton
                  )}
                  style={{ backgroundColor: "#007bff", marginLeft: "10px" }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className={classNames(
                    "btn",
                    "btn-primary",
                    styles.uploadButton
                  )}
                  style={{ backgroundColor: "#007bff", marginLeft: "10px" }}
                  onClick={() => setShowChatModal(true)} // Set modal visible on click
                >
                  Upload Photos
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div>
            <Card>
              <Card.Header> How To Contact Us </Card.Header>
              <Card.Body>
                <Card.Text> x.com/instant-chef </Card.Text>
                <Card.Text> instant_chef@email.com </Card.Text>
                <Card.Text> 07654 123456 </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => setShowChatModal(true)} // Set modal visible on click
                >
                  Chat with us!
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {showChatModal && <ChatModal />}
      {showThrowModal && <ThrowModal />}{" "}
      {/* Render throw modal when state is true */}
    </section>
  );
};

export default Contact;
