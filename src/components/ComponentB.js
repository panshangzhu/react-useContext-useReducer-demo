import React,{useContext} from 'react'
import {CountContext} from './Context'
function ComponentB() {
    const count=useContext(CountContext)
    return (
        <div>
            Control from Component B
            <div>
            <button onClick={()=>count.dispatch('increment')}>+</button>
            <button onClick={()=>count.dispatch('decrement')}>-</button>
            </div>
        </div>
    )
}

export default ComponentB
