import React from 'react'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <div className='footer d-flex justify-content-center align-items-center'>
        <nav className=''>
            <ul className='d-flex gap-4  pt-3'>
                <li className='list-group'>
                    <a className='text-decoration-none' href='http://instagram.com'  rel='noopener noreferrer'> Instagram</a>
                </li>
                <li className='list-group'>
                    <a className='text-decoration-none' href='http://twitter.com'  rel='noopener noreferrer'>Twiiter</a>
                </li>
                <li className='list-group'>
                    <a className='text-decoration-none' href='http://youtube.com'  rel='noopener noreferrer'>Youtube</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
