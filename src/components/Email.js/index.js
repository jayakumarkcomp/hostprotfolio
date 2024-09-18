import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailComponent = () => {
  const form = useRef();               

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8x7rpoq', 'template_gbv2abq', form.current, {
        publicKey: '0zV58CQOMydXAn3Wc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailComponent;