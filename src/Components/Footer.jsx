import React from "react";
const Footer = () => {
  return (
    <footer id="footer">
      <h3>Follow me on : </h3>
      <div
        id="social"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <a href="https://github.com/SriramChowdaryMogalapu">
          <i class="fa-brands fa-github"></i> &nbsp; Github
        </a>
        <a href="https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/">
          <i class="fa-brands fa-linkedin"></i>
          &nbsp; Linkedin
        </a>
        <a href="https://www.instagram.com/sriram.mogalapu/">
          <i class="fa-brands fa-instagram"></i> &nbsp; Instagram
        </a>
        <a href="https://www.facebook.com/SriramChowdary123">
          <i class="fa-brands fa-facebook"></i> &nbsp; Facebook
        </a>
        <a href="https://api.whatsapp.com/send?phone=919381436552&text=Hi!%20%20This%20is%20Sriram%20here!!%20Feel%20Free%20to%20message%20me%20for%20any%20doubts!!">
          <i class="fa-brands fa-whatsapp"></i> &nbsp; WhatsApp
        </a>
      </div>
      <h4>Thanks For Visiting!!</h4>
      <p>&copy; 2024 msrc</p>
    </footer>
  );
};

export default Footer;
