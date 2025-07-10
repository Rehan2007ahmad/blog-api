import React from 'react'
import Header from './components/HeaderAndFooter/Header'
import Footer from './components/HeaderAndFooter/Footer'
import toast, { Toaster } from 'react-hot-toast';



const App = () => {

  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-800">
    <Header/>
    <Footer/>
   <Toaster />

    </div>

  
    </>
  )
}

export default App