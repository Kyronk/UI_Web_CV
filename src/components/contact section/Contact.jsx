import React, { useRef } from 'react'
import "./contact.css";
// emailjs
import emailjs from "emailjs-com"

// icon
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

// import { FaRightLong } from "react-icons/fa6";
import { PiArrowFatLinesRightBold } from "react-icons/pi";


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dqf8qks', 'template_m8w919n', form.current,
                'Hl3Vm7bCJKhgkskbk',
            )
            e.target.reset();

            // .then(
            //     () => {
            //         console.log('SUCCESS!');
            //     },
            //     (error) => {
            //         console.log('FAILED...', error.text);
            //     },
            // );
    };

    return (
        <section id="contact" className='contact section container'>
            <div className='sectionTitle'>
                <span className='titleNumber'>04.</span>
                <h5 className='titleText'>Contact
                    <div className='underline'>
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className='contactContainer grid'>
                <div className='socialContact grid'>
                    <h3>Talk to me</h3>

                    <div className='cards grid'>

                        <div className='card'>
                            <div className=''>
                                <FaInstagramSquare className='icon instaIcon' />
                            </div>
                            <h4>Instagram</h4>
                            <span className='userName'>@userName</span>

                            <div>
                                <a href="https://google.com.vn" target='_blank' className='flex' >
                                    Send Message
                                    <PiArrowFatLinesRightBold className='icon' />
                                </a>
                            </div>
                        </div>

                        <div className='card'>
                            <div className=''>
                                <ImLinkedin className='icon instaIcon' />
                            </div>
                            <h4>Linkedin</h4>
                            <span className='userName'>@userName</span>

                            <div>
                                <a href="https://google.com.vn" target='_blank' className='flex'>
                                    Send Message
                                    <PiArrowFatLinesRightBold className='icon' />
                                </a>
                            </div>
                        </div>

                        <div className='card'>
                            <div className=''>
                                <FaFacebookMessenger className='icon instaIcon' />
                            </div>
                            <h4>Facebook Message</h4>
                            <span className='userName'>@userName</span>

                            <div>
                                <a href="https://google.com.vn" target='_blank' className='flex'>
                                    Send Message
                                    <PiArrowFatLinesRightBold className='icon' />
                                </a>
                            </div>
                        </div>


                    </div>




                </div>

                <div className='form grid'>
                    <h3>Send me an email</h3>

                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            placeholder='Enter your Name' 
                            name="name" />

                            {/* bug name and email */}
                        <input 
                            type='email' 
                            placeholder='Enter your Email' 
                            name="email" />
                        <textarea name="message" id="" placeholder='Enter your message'></textarea>
                        <button className='formBtn' type='submit' name='submit'>
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact