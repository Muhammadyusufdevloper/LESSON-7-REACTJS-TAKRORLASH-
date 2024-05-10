import React, { Fragment } from 'react'
import footerImg from"../../assets/svg/footer/site logo.svg"
import whatsapp from"../../assets/svg/footer/whatsapp-logo.svg"
import facebook from"../../assets/svg/footer/facebook.svg"
import instagram from"../../assets/svg/footer/instagram.svg"
import tikTok from"../../assets/svg/footer/tiktok.svg"
import "./Footer.scss"

const Footer = () => {
  return (
    <Fragment>
        <footer className='footer'>
            <div className='container footer__wrapper'>
                <div className='footer__boxes'>
                    <img src={footerImg} alt="Footer img" />
                    <p className='footer__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <ul className='footer__list'>
                    <li className='footer__itam'>
                        <h3 className='footer__title'>Contact us</h3>
                    </li>
                    <li className='footer__itam'>
                        <a className='footer__link' href="#">E:info@export</a>
                    </li>
                    <li>
                        <a className='footer__link' href="#">E:info@export</a>
                    </li>
                    <li>
                        <a className='footer__link' href="#">E:info@export</a>
                    </li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__itam'>
                        <h3 className='footer__title'>Useful links</h3>
                    </li>
                    <li className='footer__itam'>
                        <a className='footer__link' href="#">Shop All </a>
                    </li>
                    <li>
                        <a className='footer__link' href="#">Tempered Glass</a>
                    </li>
                    <li>
                        <a className='footer__link' href="#">Back-cover</a>
                    </li>
                    <li>
                        <a className='footer__link' href="#">About Us</a>
                    </li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__itam'>
                        <img src={whatsapp} alt="Whatsap img" />
                        <a className='footer__link' href="#">Shop All </a>
                    </li>
                    <li className='footer__itam'>
                        <img src={facebook} alt="facebook img" />
                        <a className='footer__link' href="#">Tempered Glass</a>
                    </li>
                    <li className='footer__itam'>
                        <img src={instagram} alt="instagram img" />
                        <a className='footer__link' href="#">Back-cover</a>
                    </li>
                    <li className='footer__itam'>
                        <img src={tikTok} alt="tikTok img" />
                        <a className='footer__link' href="#">About Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    </Fragment>
  )
}

export default Footer