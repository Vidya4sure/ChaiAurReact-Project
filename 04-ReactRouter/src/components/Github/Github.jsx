import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
  // const [data , setData] = useState(['']);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Vidya4sure')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data);
  //   })
  // } , [])
  
  return (
    <div>
      <div>GitHub followers :{data.followers}</div>
      <img src={data.avatar_url} alt="vidya profile" />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Vidya4sure')
  return response.json() ;
}
