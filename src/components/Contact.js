import React, { useState } from 'react'
import vg from "../assets/vg.png"
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = ()=>{
    console.log(name,email,message);
  }
  return (
    <>
        <div id='contact'>
          <section>
            <form onSubmit={submitHandler}>
              <h2>Contact Me</h2>
              <input type="text" placeholder='Your Name'value={name} onChange={(e)=>setName(e.target.value)} required/>
              <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <input type="text" placeholder='Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
              <button type='submit'>Send</button>
            </form>
          </section>
          <aside>
            <img src={vg} alt=""/>
          </aside>
        </div>
    </>
  )
}

export default Contact