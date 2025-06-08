import React from 'react'
import Child2 from './Child2'
import { useState  } from 'react'

function Child1(props) {

  const [count , setCount] = useState(0);


  return (
    <>
    <div>
      Child1
      <p>You Clicked {count} times</p>
    <button className='btn btn-primary m-2' onClick={() => setCount(count + 1)}>Click me</button>


    </div>
    <Child2 message = {props.message} />
    </>
    
  )
}

export default Child1