import React from 'react'
import CoffeeMenu from './CoffeeMenu'
import TeaMenu from './TeaMenu'
import CakeMenu from './CakeMenu'
import SandwichesMenu from './SandwichesMenu'
import BakedGoodsMenu from './BakedGoodsMenu'
import LateralInfo from './LateralInfo'

function Menu() {
  return (
    <div className='menu'>
        <CoffeeMenu />
        <TeaMenu />
        <CakeMenu />
        <SandwichesMenu />
        <BakedGoodsMenu />
        <LateralInfo />
    </div>
  )
}

export default Menu