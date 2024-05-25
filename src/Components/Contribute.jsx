import React, { useState, useEffect} from "react";
import "../App.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = () => {
    console.log(window.Email);
    if (window.Email) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mogalapusriram391@gmail.com",
        Password: "BE6ADC70400AEBC03E23307414A8B6C95F42",
        To: "mogalapusriram391@gmail.com",
        From: "mogalapusriram391@gmail.com",
        Subject: "Form Submission",
        Body:
          "Name: " +
          formData.name +
          "<br>Email: " +
          formData.email +
          "<br>Phone Number: " +
          formData.phoneNumber +
          "<br>Description: " +
          formData.description,
      })
        .then((message) =>
          alert("Thanks for Your Valuable Contribution and Time!!")
        )
        .catch((error) => {
          console.error("Error sending email:", error);
          alert(
            "An error occurred while sending the email. Please try again later."
          );
        });
    } else {
      console.error("Email object not available.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    });
  };
  const handleScrollDown = () => {
    window.scrollBy({
      top: 50,
      behavior: "smooth",
    });
  };

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="contribute">
      <button
        id="scroll-down-btn"
        className={atBottom ? "stop-animation" : ""}
        onClick={handleScrollDown}
      >
        <b>↓</b>
      </button>
      <h1>Please Contribute Us!!</h1>
      <div id="contribute-note">
        <h4>
          We value the contributions and feedback from our vibrant community of
          food enthusiasts. If you have a recipe you'd like to share, a culinary
          tip, or a suggestion to improve our website, we'd love to hear from
          you. Please fill out the form below with your details and message. For
          direct inquiries, you can also reach us via email or call us.
          Together, we can create a richer, more diverse culinary experience for
          everyone. Thank you for being a part of our journey!
        </h4>
      </div>
      <div id="contact">
        <div>
          <h1>Fill the Form to Contribute us</h1>
          <form autoComplete="on" onSubmit={handleSubmit} id="form">
            <label htmlFor="name">Name:</label>&nbsp;&nbsp;
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email">Email:</label>&nbsp;&nbsp;
            <input
              type="email"
              id="email"
              name="email"
              placeholder="mail@gmail.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="phonenumber">Phone Number:</label>&nbsp;&nbsp;
            <input
              type="tel"
              id="phonenumber"
              name="phoneNumber"
              placeholder="0123456789"
              pattern="[0-9]+"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="description">Description:</label>&nbsp;&nbsp;
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Your Message"
              required
              value={formData.description}
              onChange={handleChange}
            />
            <br />
            <br />
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
        <h3>OR</h3>
        <div id="contact-email">
          <a href="mailto: mogalapusriram391@gmail.com">
            <i class="fa-solid fa-envelope"></i> &nbsp; Mail Us
          </a>
          <br /> <br /> <br />
          <a href="tel: +91 9381436552">
            <i class="fa-solid fa-mobile"></i> &nbsp; Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
