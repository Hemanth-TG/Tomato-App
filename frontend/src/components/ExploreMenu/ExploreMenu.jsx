import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    console.log(category);
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our menu</h2>
      <p>We have the tasiest recipes in the world in order to satisfy your requirements!</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=> {
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-map" key={index}>
                    <img className={category===item.menu_name?"active":""}  src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
