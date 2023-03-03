import React from 'react'
import './product.css'

export default function Product(props) {
    // const date = new Date(2022,8,25);
    // const amount = '$20.50';
    // const title = 'Tv';
  return (
    <div className='box'>
      <div className='pricecss'>{props.price}</div>
      <div className='titlecss'>{props.title}</div>
      <div className='desccss'>{props.desc}</div>
    </div>
  )
}
