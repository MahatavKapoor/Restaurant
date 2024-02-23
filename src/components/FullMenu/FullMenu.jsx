import React, { useState } from 'react'
import Menu from './MenuItems' //MenuItems
import Categories from './Categories'
import items from './data'
import "./FullMenu.css";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function FullMenu() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="app__specialMenu-title">
          <h2 className='headtext__cormorant'>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default FullMenu;