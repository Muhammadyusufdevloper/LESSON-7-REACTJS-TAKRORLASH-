import React, { Fragment, useEffect, useState} from "react";
import "./Product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../api";

import "swiper/css";
import "swiper/css/pagination";

import {Autoplay} from "swiper/modules";

const Product = () => {
    const [prodactApi,setProdactApi] = useState()
    useEffect(()=>{
        axios
            .get()
            .then(respons => setProdactApi(respons.data.products))
            .catch(error => console.error(error))
    },[])
    
    const product = prodactApi?.map((product)=>(
        <SwiperSlide key={product.id}>
            <div className="product__img-card">
                <button className="product__card-btn">sale !</button>
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="product__info-card">
                <h3 className="product__title">{product.title}</h3>
                <p className="product__desc">{product.category}</p>
                <p className="product__desc">{product.price}$</p>
            </div>
        </SwiperSlide>
    ))
  return (
    <Fragment>
      <section className="product">
        <div className="product__wrapper container">
          <div className="prodact__cards">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
            {product}
            </Swiper>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Product;
