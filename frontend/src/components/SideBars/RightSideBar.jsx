import React from 'react'
import SideNewsletter from '../NewsLetter/SideNewsletter'
import RelatedArticels from './RelatedArticels'

export const RightSideBar = () => {
  return (
    <>
        <aside className="lg:w-1/5">
          
            <SideNewsletter/>
            <RelatedArticels/>
          </aside>
    </>
)
}
