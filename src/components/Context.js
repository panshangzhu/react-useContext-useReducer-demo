import React,{useReducer} from 'react'

const initialState={count:100};

export const CountContext=React.createContext(initialState);

const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      console.log('hello')
      return {...state,count:state.count+1};
    case 'decrement':
      console.log('bye')
      return {...state,count:state.count-1};
    default:
      return;
  }
}

function Context(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{state,dispatch}}>
          <h5 className='result'>count:{state.count}</h5>
            {props.children}
        </CountContext.Provider>
    )
}

export default Context
