import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// template_fdlu07e
// service_zlh5dkh
// SNLJ--wqmS1jxp7J3

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [showWarning, setShowWarning] = useState(false); // New state variable for showing the warning

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(form.email) || isFormEmpty) {
      // Show a warning if the email is not valid
      setShowWarning(true);
      setLoading(false);
      return;
    }

    emailjs.send(
      'service_zlh5dkh',
      'template_fdlu07e',
      {
        from_name: form.name,
        to_name: 'Cedric',
        from_email: form.email,
        to_email: 'lcedric.galila@gmail.com',
        message: form.message,
      },
      'SNLJ--wqmS1jxp7J3'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will get back to you as soon as possible. Ciao!');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Contact me directly on my email if you see this.');
    });
  };

  const isValidEmail = (email) => {
    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isFormEmpty = Object.values(form).some((value) => value.trim() === '');
  const isButtonDisabled = isFormEmpty && isFormTouched; // Button is disabled only when the form is empty and user has touched it

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-primary p-8 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border-gray-100"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Full Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name goes here!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email address</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Leave your email here!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hit me up with a message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            />
          </label>

          <div className="flex flex-col items-center gap-2">
            <button
              type="submit"
              className={`bg-tertiary backdrop-opacity-30 backdrop-blur-sm bg-opacity-40 py-2 px-6 mx-2 outline-none w-fit text-accent hover:font-bold shadow-md rounded-full my-4 hover:bg-accent hover:text-orange border-accent hover:border-orange transition-colors border-2 md:py-3 md:px-8 md:w-fit ${
                (isButtonDisabled || (isFormTouched && !isValidEmail(form.email))) ? 'bg-red-600 text-red-600 hover:bg-red-600 border-red-600 cursor-not-allowed' : ''
              }`}
              disabled={isButtonDisabled || (isFormTouched && !isValidEmail(form.email))}
              onClick={() => {
                setIsFormTouched(true); // Mark the form as touched when the button is clicked
                setShowWarning(true); // Show the warning on button click
              }}
            >
              {loading ? 'Sending. . .' : 'Submit'}
            </button>

            {showWarning && !isValidEmail(form.email) && (
              <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
            )}

            {showWarning && isFormEmpty && (
              <p className="text-red-500 text-sm mt-2">
                Please fill in all the fields before submitting.
              </p>
            )}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");