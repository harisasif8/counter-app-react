import React, {useState} from 'react'
import './App.css';

function App() {
  
  const [count, setCount] = useState(4)
  const [incBtn,setIncBtn] = useState(false)
  const [decBtn,setDecBtn] = useState(false)

  const decrementCount= () => {
    
    setCount(prevCount => prevCount - 1)
    if(count<=1){
      setDecBtn(true)
    }
    else{
      setDecBtn(false)
    }
  }

  

  const incrementCount= () => {
    setCount(prevCount => prevCount + 1)
    if(count>=9){
      setIncBtn(true)
    }
    else{
      setIncBtn(false)
    }
  }

  

  return (
    <div className="App ">
      <div className=' container  bg-secondary w-25  p-4'>
            <button className='btn btn-danger m-3 w-25' disabled={decBtn} onClick={decrementCount}>-</button>
            <span className='text-white '>{count}</span>
            <button className='btn btn-success m-3 w-25'  disabled={incBtn} onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
