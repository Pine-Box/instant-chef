import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Contact.module.css";
import { Modal, Button, Card } from "react-bootstrap";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Contact = () => {
  const [showChatModal, setShowChatModal] = useState(false);
  const [showThrowModal, setShowThrowModal] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThrowModal(true);
    setMessageSent(true);
  };

  const handleClose = () => {
    setShowChatModal(false);
    setShowThrowModal(false);
    setMessageSent(false);
  };

  const ChatModal = () => (
    <Modal show={showChatModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.modalTitle}>Message Us</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.chatContainer}>
          <div className={styles.chatInput}>
            <textarea
              className={classNames("form-control", styles.textarea)}
              placeholder="Type your message here..."
              rows="4"
            ></textarea>
            {!messageSent && (
              <button
                className={classNames("btn", "btn-primary", styles.sendButton)}
                onClick={handleSubmit}
              >
                Send to us
              </button>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );

  const ThrowModal = () => (
    <Modal show={showThrowModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thanks for messaging us!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>We've received your message! Thank you for reaching out to us.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <section id="contact" className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
            <h2 className="mt-5 text-center">Submit your own recipes!</h2>
            <form onSubmit={handleSubmit}>
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
                  className={classNames("btn", "btn-primary")}
                  style={{ backgroundColor: "#007bff", marginLeft: "10px" }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className={classNames("btn", "btn-primary")}
                  style={{ backgroundColor: "#007bff", marginLeft: "10px" }}
                  onClick={() => setShowChatModal(true)}
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
                <Card.Text>
                  {" "}
                  Our social:
                  <div>
                    <Button
                      variant="primary"
                      className={styles.socialButton}
                      style={{ marginRight: "20px" }}
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </Button>
                    <Button
                      variant="primary"
                      className={styles.socialButton}
                      style={{ marginRight: "20px" }}
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok />
                    </Button>
                    <Button
                      variant="primary"
                      className={styles.socialButton}
                      style={{ marginRight: "20px" }}
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </Button>
                    <Button
                      variant="primary"
                      className={styles.socialButton}
                      style={{ marginRight: "20px" }}
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineClose />
                    </Button>
                  </div>
                </Card.Text>
                <Card.Text> Email us at: instant_chef@email.com </Card.Text>
                <Card.Text> Phone us on: 07654 123456 </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => setShowChatModal(true)}
                >
                  Chat with us!
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {showChatModal && <ChatModal />}
      {showThrowModal && <ThrowModal />}
      {messageSent && (
        <div className={styles.successPrompt}>
          Your recipe has successfully been submitted.
        </div>
      )}
    </section>
  );
};

export default Contact;
