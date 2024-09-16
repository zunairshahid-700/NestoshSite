import React, {useState} from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Contact_form = ({blok}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    }
  };

  return (
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
                <form action="" method="post">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper  ">
                        <input
                          type="text"
                          placeholder="Placeholder text"
                          id="input1"
                          className="form-body__fields"
                        />
                        <label htmlFor="input1">Your Name</label>
                      </div>  
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="text"
                          placeholder="Placeholder text"
                          id="input1"
                          className="form-body__fields"
                        />
                        <label htmlFor="input1">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="text"
                          placeholder="Placeholder text"
                          id="input1"
                          className="form-body__fields"
                        />
                        <label htmlFor="input1">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="mb-4 input-wrapper">
                        <input
                          type="text"
                          placeholder="Placeholder text"
                          id="input1"
                          className="form-body__fields"
                        />
                        <label htmlFor="input1">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-4 input-wrapper">
                        <textarea
                          name=""
                          rows="8"
                          id="input1"
                          placeholder="text"
                          className="form-body__fields"
                        ></textarea>
                        <label htmlFor="input1">Your Message</label>
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
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_form;
