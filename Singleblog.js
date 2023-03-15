import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Singleblog() {

  const [singledata, setSingledata] = useState({})
  const { id } = useParams()
  useEffect(() => {
    async function singlefetchdata() {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      console.log(result)
      setSingledata(result.data)

    }
    singlefetchdata()
  }, [])
  

  return (
    <div>
      {
        <>
        <h2>{singledata.title}</h2>
        <p>{singledata.body}</p>
        </>
        
      }
    </div>
  )
}

export default Singleblog