import React from "react";
import classNames from "classnames";
import { Modal, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
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
                  className={classNames("btn", "btn-primary")}
                  style={{ backgroundColor: "#007bff", marginLeft: "10px" }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className={classNames("btn", "btn-primary")}
                  style={{ backgroundColor: "#007bff", marginLeft: "10px" }}
                >
                  Upload Photos
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          {/* Content for the right container goes here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
