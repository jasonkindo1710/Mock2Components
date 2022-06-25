import React from 'react'
import Categories from '../Bar/CategoriesBar'
import TopBar from '../Component/TopBar'
function Main() {
  return (
    <div>
        <header>
            <TopBar />
        </header>
        <div>
            <Categories />
        </div>
    </div>
  )
}

export default Main