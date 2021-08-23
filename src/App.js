import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN



const url = 'https://course-api.com/react-tabs-project'

const App = function (){
  const [value, setValue] = useState(0)
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const getJobs = async function (){
    const response = await fetch(url)
    const job = await response.json()
    setJobs(job)
    setLoading(false)
  }
  
  useEffect(function (){
    getJobs()
  }, [])

  if(loading){
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  const {title, duties} = jobs[value]
  return (
    <div>
      {jobs.map(function(item, index){
        return (
          <button key={index} className={value=== index?  "job-btn": "active-btn"} onClick={function (){return setValue(index)}}>{item.company}</button>
        
        )
      })}
      <h3>{title}</h3>
      {duties.map(function(duty, index){
        return (
          <p key={index}><FaAngleDoubleRight/>{duty}</p>
        )
      })}
    </div>
  )
}

export default App;