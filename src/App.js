import React, { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0)


  const decrementCount = () => {

    setCount(prevCount => prevCount - 1)


  }



  const incrementCount = () => {

    setCount(prevCount => prevCount + 1)

  }





  return (
    <div className="App">
      <div className=' container  bg-secondary p-4 container-body'>
        <div className='row '>
          <div className='col'>
        <button className='btn btn-danger m-3 w-25' disabled={count===0} onClick={decrementCount}>-</button>
        <span className='text-white'>{count}</span>
        <button className='btn btn-success m-3 w-25' disabled={count===10} onClick={incrementCount}>+</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
