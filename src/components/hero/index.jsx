import React, { Fragment } from 'react'
import phoneImg from"../../assets/image/hero/hero phone img.png"
import "./Hero.scss"

const Hero = () => {
  return (
    <Fragment>
        <section className='hero'>
            <div className='container hero__wrapper'>
                <div className='hero__left__info-box'>
                    <p className='hero__text'>Mobile</p>
                    <h1 className='hero__title'>Backcover <br /> Tempered Glass</h1>
                    <button className='hero__btn'>
                        Shop all !
                    </button>
                </div>
                <div className='hero__right__img-box'>
                    <img className='hero__img' src={phoneImg} alt="Hero phone img" />
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Hero