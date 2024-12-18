import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
        <div className='flex items-center justify-center gap-4'>
          <Link to="https://main--portfolio-biswa.netlify.app/" target='blank'>About</Link>
          <Link to="https://www.linkedin.com/in/biswaranjan-dash-0341641b9/" target='blank'>Contact</Link>
        </div>
    </footer>
  )
}

export default Footer
