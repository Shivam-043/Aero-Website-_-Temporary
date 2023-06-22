import React from 'react'
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import App from '../App'
import styles from '../style'
import Blogs from './Blogs'
import Navbar from './Navbar'



const HomePage = () => {
  return (
    <BrowserRouter>
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/blogs' element={<Blogs />}/>
        {/* <Route path='/hover' element={<HoverCanvas/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default HomePage
