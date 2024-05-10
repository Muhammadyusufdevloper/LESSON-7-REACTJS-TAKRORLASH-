import React, { Fragment } from 'react'
import "./Search.scss"

const Search = ({data}) => {
    let searchItem = data?.map((product)=>(
        <div className='search__card' key={product.id}>
            <img className='search__img' src={product.images[0]} alt="search img" />
            <span className='search__text'>{product.title}</span>
        </div>
    ))
  return (
    <Fragment>
        <div className='search__box-result'>
            {
                !data.length ? <span>Bu prodact topilmadi</span> : <></>
            }

           {searchItem}
        </div>
    </Fragment>
  )
}

export default Search