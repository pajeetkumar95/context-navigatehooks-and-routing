import React, { createContext, useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Login from './Login'
import Register from './Register'
import Singleblog from './Singleblog'
import axios from 'axios'

export const Ecommercecontext = createContext(null)

function Contact() {

  const [data, setData] = useState([])
  const [form, setForm] = useState({})


  useEffect(() => {
    async function fetchdata() {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // console.log(response.data)
      setData(response.data)
    }

    fetchdata()
  }, [])



  return (
    <div>
      <Ecommercecontext.Provider value={{ data, setData ,form ,setForm }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='' element = {<Home/>}></Route>
            <Route path='/blog/:id' element = {<Singleblog/>}></Route>
            <Route path='/About' element = {<About/>}></Route>
            <Route path='/Login' element = {<Login/>}></Route>
            <Route path='/Register' element = {<Register/>}></Route>
          </Routes>
        </BrowserRouter>
      </Ecommercecontext.Provider>

    </div>

  )
}

export default Contact