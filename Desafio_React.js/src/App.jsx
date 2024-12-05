import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { useState } from 'react'

import img01 from './assets/youtube.svg'
import img02 from './assets/instagram.svg'
import img03 from './assets/twitter.svg'
import img04 from './assets/whatsapp.svg'

function App() {

  const img = [{
    title:'Youtube',
    url: img01
  },{
    title: 'Instagram',
    url: img02
  },{
    title: 'Twitter',
    url: img03
  },{
    title: 'WhatsApp',
    url: img04
}]

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  function bmiCalculation(){
    if(weight > 0 || height > 0){
      return  weight / (height * height)  
    }
    return null
  }

  return (
    <div className='container'>
     <Header/>
     <Main  weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} bmiCalculation={bmiCalculation}/>
     <Footer img={img}/>
    </div>
  )
}

export default App
