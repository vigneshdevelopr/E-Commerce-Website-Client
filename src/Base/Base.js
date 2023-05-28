import React from 'react'
import NavBar from '../Components/NavBar'
import Products from '../Components/Products'
import News from '../Components/News'
import Footer from '../Components/Footer'
import Announcements from '../Components/Announcements'

function Base({title,description,children}) {
  return (
    <div className='main-component'>
<NavBar />
<Announcements />

<main>
    {description}
    {children}
</main>
<Products />
<News />
<Footer />
    </div>
  )
}

export default Base