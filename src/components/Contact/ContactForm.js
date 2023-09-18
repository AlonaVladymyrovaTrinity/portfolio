import style from './ContactForm.module.css';
import React, { useRef, useState } from 'react';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xdordlqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Clear the form
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };
  const showAlert = (message) => {
    alert(message);
  };

  return (
    <div>
      {submissionStatus === 'success' &&
        showAlert('Message sent successfully!')}
      {submissionStatus === 'error' &&
        showAlert('Oops! Something went wrong. Please try again later.')}
      {/* {submissionStatus === 'success' && (
        <p className={style.successMessage}>Message sent successfully!</p>
      )}
      {submissionStatus === 'error' && (
        <p className={style.errorMessage}>
          Oops! Something went wrong. Please try again later.
        </p>
      )} */}
      <form ref={formRef} onSubmit={sendEmail} className={style.form}>
        <label>Your name</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Required"
          value={formData.user_name}
          onChange={handleInputChange}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Required"
          value={formData.user_email}
          onChange={handleInputChange}
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Required"
          value={formData.subject}
          onChange={handleInputChange}
        ></input>

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here (Required)"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
