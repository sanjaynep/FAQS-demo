import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import questions from './Assets/faqs.js' 

function App() {
  

  let toogle= questions.map((v, i)=>{
    return(
      <FAQitem key={i} index={v.id} question={v.question} answer={v.answer} />
    )

  
  })

  return (
    
    <div className="faq">
      <Header />
        
        {toogle}

      <Footer />
    </div>
  
  )
}

export default App

function FAQitem({index, question, answer, Itemevent, itemdetails}){
  const [status, setStatus]= useState(false);
  return(
    <div className="faq-item">
      <div className="questions" onClick={() => setStatus(!status)}>
      <h5 >{index}. {question}</h5><span> {status ? "▲" : "▼"}</span>
      </div>
      <p className={status ? "answer-open" : ""}>{answer}</p>
    </div>
  )
}