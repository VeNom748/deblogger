import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import contactCss from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    const postRes = await fetch("http://localhost:3000/api/postContact", {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });

    if (postRes.status >= 400) {
      window.alert("msg not sent");
    } else {
      const response = await postRes.json();
      window.alert(response.msg);
      setname("");
      setemail("");
      setphone("");
      setMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Feel Free to <a href="https://nextjs.org">Contact Us</a>
        </h1>
        <div className={contactCss.card}>
          <form
            method="post"
            onSubmit={handleSubmit}
            className={contactCss.formDiv}
          >
            <h1>Contact Form</h1>
            <div className={contactCss.inputField}>
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Enter Your Name..."
                name="name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className={contactCss.inputField}>
              <h2>Email</h2>
              <input
                type="text"
                placeholder="Enter Your Email..."
                name="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className={contactCss.inputField}>
              <h2>Phone</h2>
              <input
                type="phone"
                placeholder="Enter Your Mobile Number..."
                name="phoneNo"
                maxLength={10}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                value={phone}
              />
            </div>
            <div className={contactCss.inputField}>
              <h2>Message</h2>
              <textarea
                placeholder="Write Your Concern Here..."
                maxLength="100"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
