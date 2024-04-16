import React from 'react'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className='p-10 flex justify-center items-center'>
        <p className='text-foreground/60 text-sm'>&copy; {currentYear}. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer