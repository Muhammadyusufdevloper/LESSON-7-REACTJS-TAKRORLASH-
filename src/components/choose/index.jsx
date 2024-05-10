import React, { Fragment } from 'react'
import {chooseData} from"../../static"
import "./Choose.scss"

const Choose = () => {
    const card =chooseData?.map((card)=>(
        <div className='choose__card' key={card.id}>
            <img src={card.img} alt="Choose svg" />
            <h3 className='choose__title'>{card.title}</h3>
            <p className='choose__text'>{card.desc}</p>
        </div>
    ))
  return (
    <Fragment>
        <section className='choose'>
            <div className='container'>
                <div className="all__info-part">
                <div></div>
                <p>about us</p>
                </div>
                <div className='choose__cards'>
                    {card}
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Choose