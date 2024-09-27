import React, { useState } from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Toast, ToastContainer } from 'react-bootstrap';


const Contact_form = ({ blok }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState(""); // 'success' or 'danger'

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/; // Adjust the length to your needs

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage("Please fill out all required fields.");
      setToastVariant("danger");
      setShowToast(true);
      console.log('Toast should be visible now:', showToast);
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setToastMessage("Please enter a valid email address.");
      setToastVariant("danger");
      setShowToast(true);
      return false;
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setToastMessage("Please enter a valid phone number.");
      setToastVariant("danger");
      setShowToast(true);
      return false;
    }
    return true;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToastMessage("Email sent successfully.");
        setToastVariant("success");
      } else {
        setToastMessage("Failed to send email.");
        setToastVariant("danger");
      }
      setShowToast(true);
    } catch (error) {
      console.error("Error:", error);
      setToastMessage("Error sending email.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <>
    <section className="c-contact__form" {...storyblokEditable(blok)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="c-contact__form__wrap-inner mb-5">
              <div className="c-contact__form__wrap-inner__content">
                <h3 className="c-contact__form__wrap-inner__content__heading text-start">
                  {blok.Heading}
                </h3>
                <p className="c-contact__form__wrap-inner__content__text text-start">
                  {blok.SubHeading}
                </p>
              </div>
              <div className="form-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="form-body__fields"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="form-body__fields"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="form-body__fields"
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          className="form-body__fields"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-4 input-wrapper">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="8"
                          placeholder="Your Message"
                          className="form-body__fields"
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="form-body__button-submit btn-primary"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="location">
              <div className="location__wrap">
                <div className="row">
                  {blok.Locations?.map((nestedBlok) => (
                    <StoryblokComponent
                      blok={nestedBlok}
                      key={nestedBlok._uid}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          bg={toastVariant}
          delay={3000}
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
      </>
  );
};

export default Contact_form;
