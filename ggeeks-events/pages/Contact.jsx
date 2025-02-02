import React from 'react'

function Contact() {
  return (
    <div>
      <div><h1 className='text-4xl'> Contact Us</h1></div>
      <div className='md:px-40 px-10 md:py-10 py-2'>
        <form action="" method="get" className='pt-10 flex flex-col px-10 justify-center '>
          <input type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' />
          <input type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' />
          <input type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5' />
          <input type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' />
          <input type="text" placeholder='Message' className='white-glassmorphism bg-transparent px-3 my-3 py-5' />
          <button type="submit" className='text-2xl border items-center align-middle rounded-xl justify-center my-3 px-3 py-4 bg-animate w-40 text-center '>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
