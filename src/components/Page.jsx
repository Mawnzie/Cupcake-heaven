import React from 'react'
import Header from '../components/Header'

export default function Page({title,subtitle}) {
  return (
    <div>
      <Header/>
      {title && <h1> {title} </h1>}
      {subtitle && <h2> {subtitle}</h2>}
    </div>
  )
}
