import React, { useRef, useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Snackbar,
  Grid,
  //Typography,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

//Styles
const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
});

const StyledTextField = styled(TextField)({
  marginBottom: '1rem',
  width: '100%',
});

const SubmitButton = styled(Button)({
  marginTop: '1rem',
});

//Form validation
const validateEmail = (email) => {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (formData) => {
  const errors = {};

  if (!formData.user_name.trim()) {
    errors.user_name = 'Name is required';
  }

  if (!formData.user_email.trim()) {
    errors.user_email = 'Email is required';
  } else if (!validateEmail(formData.user_email)) {
    errors.user_email = 'Invalid email format';
  }

  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false); //SnackbarClos
  const [snackbarMessage, setSnackbarMessage] = useState(''); //Message
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); //Status
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear validation errors
    setErrors({});
    //API request to send a message
    try {
      const response = await fetch('https://formspree.io/f/xdordlqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbarSeverity('success');
        setSnackbarMessage('Message sent successfully!');
        setSnackbarOpen(true);

        // Clear the form
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage(
          'Oops! Something went wrong. Please try again later.'
        );
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarSeverity('error');
      setSnackbarMessage('Oops! Something went wrong. Please try again later.');
      setSnackbarOpen(true);
    }
  };

  return (
    <FormContainer>
      {/* <Typography variant="h4" component="h2">
        Contact Us
      </Typography> */}
      <Grid
        container
        justifyContent="center"
        sx={{
          width: { xs: '100%', sm: '100%', md: '50%' }, // Width for different screen sizes
        }}
      >
        {/* Form with elements */}
        <form ref={formRef} onSubmit={handleSubmit} className="form-width">
          <StyledTextField
            label="Your name"
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleInputChange}
            error={errors.user_name}
            helperText={errors.user_name && errors.user_name}
          />
          <StyledTextField
            label="Email"
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleInputChange}
            error={errors.user_email}
            helperText={errors.user_email && errors.user_email}
          />
          <StyledTextField
            label="Subject"
            type="text"
            name="subject"
            required
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            error={errors.subject}
            helperText={errors.subject && errors.subject}
          />
          <StyledTextField
            label="Message"
            multiline
            rows={4}
            placeholder="Your Message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
            helperText={errors.message && errors.message}
          />
          <SubmitButton type="submit" variant="contained" color="primary">
            Send
          </SubmitButton>
          {/* Alert message with result: success of failure */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity}>
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </form>
      </Grid>
    </FormContainer>
  );
};

export default ContactForm;
