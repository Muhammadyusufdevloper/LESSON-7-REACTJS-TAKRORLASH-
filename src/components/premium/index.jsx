import React, { Fragment } from 'react'
import premiumImg from"../../assets/image/premium/premium img.png"
import "./Premium.scss"

const Premium = () => {
  return (
    <Fragment>
        <section className='premium'>
            <div className='container'>
                <div className='premium__wrapper'>
                    <div className='premium__card'>
                        <div className='premium__left'>
                            <h2 className='premium__title'>Shop Premium Tempered Glass in wholesale Price !</h2>
                            <p className='premium__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                <br />
                                <br />
                                LKR : 299
                            </p>
                            <button className='premium__btn'>
                                Shop Tempered Glass 
                            </button>
                        </div>
                        <div>
                            <img className='premium__img' src={premiumImg} alt="premium Img" />
                        </div>
                    </div>
                    <div className='premium__part'>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Premium