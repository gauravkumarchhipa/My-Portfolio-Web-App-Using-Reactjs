import React, { useState } from 'react';
import vg from "../assets/vg.png";
import toast from 'react-hot-toast';
import {motion} from "framer-motion";

const Contact = () => {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState({name: "", email : "", message : ""})
  const changeHandler = (e)=>{
    setInputs({...inputs , [e.target.name]: e.target.value});
    console.log(inputs);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    toast.success("Message sent");
  }

  const animations = {
    form:{
      initial:{
        x: "-100",
        opacity : 0,
      }, 
      whileInView:{
        x: 0,
        opacity: 1,
      }, transition : {
        delay : 0.2
      }
    },
    button:{
      initial:{
        y: "-100",
        opacity : 0,
      }, 
      whileInView:{
        y: 0,
        opacity : 1,
      }, transition : {
        delay : 0.7
      }
    }
  }
  return (
    <>
        <div id='contact'>
          <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
              <h2>Contact Me</h2>
              <input type="text" placeholder='Your Name' name="name" value={inputs.name} onChange={changeHandler} required/>
              <input type="email" placeholder='Your Email' name="email" value={inputs.email} onChange={changeHandler} required/>
              <input type="text" placeholder='Your Message' name="message" value={inputs.message} onChange={changeHandler} required/>
              <motion.button {...animations.button} type='submit'>Send</motion.button>
            </motion.form>
          </section>
          <aside>
            <img src={vg} alt=""/>
          </aside>
        </div>
    </>
  )
}

export default Contact