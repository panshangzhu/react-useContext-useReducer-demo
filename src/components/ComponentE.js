import React,{useContext} from 'react'
import {CountContext} from './Context'
function ComponentE() {
    const count=useContext(CountContext)
    return (
        <div>
            Control from Component E
            <div>
            <button onClick={()=>count.dispatch('increment')}>+</button>
            <button onClick={()=>count.dispatch('decrement')}>-</button>
            </div>
        </div>
    )
}

export default ComponentE
