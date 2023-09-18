import style from './ContactForm.module.css';

import React from 'react';

import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className={style.form}>
        <label>Your name</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Required"
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Required"
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Required"
        ></input>

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here (Required)"
          name="message"
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
