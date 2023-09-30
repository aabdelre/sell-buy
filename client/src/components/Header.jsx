import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='header'>
            <div className=''>
                <Link>
                    <div className='image-container'>
                        <img src={logo} className='h-full'/> {/*Change logo later*/}
                        <p> Logo </p>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header