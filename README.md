## React Typescript

### Topics: context, hooks, lazy, suspense, typescript

```
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
    <div>
        <div>{count}</div>
        <button onClick={() => dispatch('ADD')}>+</button>
        <button onClick={() => dispatch('REMOVE')}>-</button>
        <button onClick={() => dispatch('RESET')}>reset</button>
    </div>
  )
}
```