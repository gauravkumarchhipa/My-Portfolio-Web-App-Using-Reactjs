import React from 'react'

const Header = () => {
  return (
    <>
        <nav>
            <NavContent/>
        </nav>
    </>
  )
}
export const NavContent = ()=>(
    <>
        <h2>PORTFOLIO</h2>
        <div>
            <a href='#home'>Home</a>
            <a href='#work'>Work</a>
            <a href='#timeline'>Experience</a>
            <a href='#services'>Services</a>
            <a href='#testimonial'>Testimonial</a>
            <a href='#contact'>Contact</a>
        </div>
        <a href= "mailto:gauravchhipa295@gmail.com">
            <button>Email</button>
        </a>
    </>
);

export default Header