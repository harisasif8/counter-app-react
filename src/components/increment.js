import React, {useState} from 'react'

function IncrementCount(){
    const [count, setCount] = useState(4)




    setCount(prevCount => prevCount + 1)
    return (
        <div className="increment-count">
              <button onClick={IncrementCount}>+</button>
        </div>
      );
  }

export default IncrementCount;

  
