import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from 'emailjs-com';
import { useRef } from "react";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6vzi7ns', 'template_khsp2g1', form.current, '19Lkx4A8FhYiuGYhg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <section id="contact" className="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__left">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option__icon" />
              <h4>Email</h4>
              <h5>jasminkorat274200@gmail.com</h5>
              <a href="mailto:jasminkorat274200@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <IoLogoWhatsapp className="contact__option__icon"/>
              <h4>Whattsapp</h4>
              <h5>+91-8141511326</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+918141511326"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
        
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
