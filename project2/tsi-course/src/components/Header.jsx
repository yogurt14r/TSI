import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <div className="flex gap-[50px] fixed top-0 left-0 w-full bg-[#333] text-white p-[25px] text-center text-[14pt] ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
    </div>
}
export default Header