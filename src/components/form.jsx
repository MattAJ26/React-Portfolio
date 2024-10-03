import { useState, useRef } from 'react';
import './style.css';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

function Form() {
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef(null);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of either email, username, and text
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // Check to see if the email is not valid or if the name is empty
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }

    // Sending email via emailjs
    emailjs
      .sendForm('service_khzuz6h', 'template_4asyo9x', form.current, 'Baf4cF5KGwqxPP9Pr')
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setText('');
          setEmail('');
          form.current.reset(); // Resets form after successful submission
        },
        // (error) => {
        //   console.log('FAILED...', error.text);
        // }
      );

    setErrorMessage(''); // Reset any existing error message
  };

  return (
    <div className="container text-center">
      <h1>Hello {name}</h1>
      <form ref={form} className="form" onSubmit={handleFormSubmit}>
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={text}
          name="text"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
