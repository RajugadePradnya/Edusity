import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/img/m1.png'
import mail_icon from '../../assets/img/i1.png'
import pho_icon from '../../assets/img/i2.png'
import loc_icon from '../../assets/img/i3.png'
import whiteArr from '../../assets/img/whitearr.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "713f4c10-2856-40f7-bb36-17a35290558a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find
                     our contact information below. Your feedback, 
                     questions, and suggestions are important to us as we strive to provide exceptional
                      service to our university community.</p>
                      <ul>
                        <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
                        <li><img src={pho_icon} alt="" />+1 123-654-1999</li>
                        <li><img src={loc_icon} alt="" /> 99 Avenue mall,Cambridge <br />MH 02013, United States</li>
                      </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' 
                    required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter mobile number' 
                    required />
                    <label>Write your message here</label>
                    <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn' > Submit now <img src={whiteArr} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
