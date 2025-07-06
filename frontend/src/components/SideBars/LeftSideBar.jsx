import React from 'react'
import CategoryAside from './CategoryAside'
import PopularTags from './PopularTags'

export const LeftSideBar = () => {
  return (
    <>
         <aside className="lg:w-1/5">
            <CategoryAside/>

            <PopularTags/>
          </aside>
    </>
  )
}
