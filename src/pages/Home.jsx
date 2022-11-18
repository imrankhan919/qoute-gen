import React from 'react'
import Card from '../components/Card'

function Home({qoute , getQoute}) {
  return (
    <>
    <Card qoute={qoute} getQoute={getQoute}/>
    </>
  )
}

export default Home