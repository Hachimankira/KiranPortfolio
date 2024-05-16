import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_95b4ylc",
                "template_mhhxx8e",
                form.current,
                "p-zLbI2d58czC5q4A"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-section">

            <h1 style={{ paddingBottom: "8px" }}>
                Let's <strong className="purple">Collaborate!</strong>
            </h1>
            <StyledParagraph>
                I'd love to hear about your ideas and how I can help bring them to life.
            </StyledParagraph>
            <Row>
                <Col md={12} className="home-about-social">
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "8px" }}>FIND ME ON</h1>
                    {/* <p>
                        Feel free to <span className="purple">connect </span>with me
                    </p> */}
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Hachimankira"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/KIRAN91065712"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/kiran-shrestha-823b2520a/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/kiran_shrestha6000/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <StyledParagraph>
                Or
            </StyledParagraph>
            <p>
                Leave a <span className="purple">message </span>here
            </p>
            <StyledContainer>
                <StyledContactForm>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </StyledContactForm>
            </StyledContainer>
        </div>

    );
};

export default Contact;

// Styles
const StyledParagraph = styled.p`
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 576px) {
    font-size: 1em;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 40vh;
`;
const StyledContactForm = styled.div`
  width: 500px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    padding: 0 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 8px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 4px solid #623686 !important;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 4px solid #623686 !important;
      }
    }

    label {
      margin-top: 1rem;
      color: white !important;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background-color: #623686 !important;
      color: white;
      border: none;
    }
  }
`;