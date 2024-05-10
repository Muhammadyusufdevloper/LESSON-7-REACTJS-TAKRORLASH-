import React, { Fragment, useEffect, useState } from 'react'
import siteLogo from"../../assets/image/header/Site logo.svg"
import "./Header.scss"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Search from '../search';
import axios from '../../api';

const Header = () => {
    const [menu,setMenu] = useState(false)
    const [value,setValue] = useState("")
    const [data,setData] = useState(null)

    useEffect(()=>{
        if(!value.trim()) return
        axios
            .get(`/search?q=${value.trim()}`)
            .then(respons => setData(respons.data.products))
            .catch(error => console.error(error))
    },[value])
  return (
    <Fragment>
        <header className='header'>
            <nav className='container header__navbar'>
                <ul className={`header__list ${menu ? "header__show-list" : ""}`}>
                    <li className='header__item'>
                        <a className='header__link' href="#">Home</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">Shop All</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">Blog</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="#">About Us</a>
                    </li>
                    <li onClick={()=>setMenu(false)} className={`header__item__calose ${menu ? "header__show-close" : ""}`}>
                        <IoIosCloseCircleOutline className='header__item__calose-icon'/>
                    </li>
                </ul>
                <a className='header__logo-link' href="#">
                    <img className='header__logo-img' src={siteLogo} alt="Site logo img" />
                </a>
                <div className='header__rigth-part'>
                    <a className='header__rigth__link' href="#">About Us</a>
                    <form className='header__rigth__form'>
                        <input value={value} onChange={e => setValue(e.target.value)} className='header__search__input' type="search" placeholder='Search Product' />
                        <button className='header__search-btn'><IoSearch className='header__search-icon'/></button>
                        {
                            value.trim()
                            ?
                            <Search data={data}/>
                            :
                            <></>
                        }
                    </form>
                    <button onClick={()=>setMenu(true)} className='header__menu__btn'><GiHamburgerMenu className='header__menu'/></button>
                </div>
            </nav>
        </header>
    </Fragment>
  )
}

export default Header