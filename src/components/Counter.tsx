import React from 'react'

export default function Counter() {

  // state = 0

  const reducer = (state: number, action: string): any => {
    switch(action) {
        case 'ADD':
            return state + 1
        case 'REMOVE':
            return state - 1
        case 'RESET':
            return state = 0
        default:
            return state
    }  
  }

  const [ count, dispatch ] = React.useReducer(reducer, 0)

  return (
    <div className="mb-4 mt-5 text-center">
    <h2>{count}</h2>
      <div className="btn-group">
          
          <button onClick={() => dispatch('ADD')} className="btn btn-primary">Counter +</button>
          <button onClick={() => dispatch('REMOVE')} className="btn btn-warning">Counter -</button>
          <button onClick={() => dispatch('RESET')} className="btn btn-danger">Counter reset</button>
      </div>
    </div>
  )
}
