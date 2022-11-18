import React from 'react'
import {Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className='about'>
      <h2 className='aboutHeader'>About Nutri-Scan</h2>
      Special shoutout to Jan, Alo, and David for being awesome instructors! <br/>Also to Hamza Ali for styling.
      {/* The Nutri-Score is a front-of-pack label that provides user-friendly information on the nutritional quality of food
and beverages, using five different colours to classify food products into five categories: from category A (dark green), indicating higher nutritional quality, to category E (dark orange), indicating lower nutritional quality. This rating system was developed
to help guide consumers towards healthier food choices and thus prevent a wide range of nutrition- related chronic diseases. The score for a given food or beverage is calculated by allocating points for the content per 100 g (or per 100 mL for beverages) of energy, saturated fatty acids, sugars, sodium, dietary fibres, and proteins, and of fruits, vegetables, legumes, and nuts (and, since 2019, olive, rapeseed, and nut oils). */}
      <Link className='aboutLink' to='apiinfo/'>API Information</Link>
      <Link className='aboutLink' to='/'>Back to Search</Link>
    </div>
  )
}

export default AboutMe