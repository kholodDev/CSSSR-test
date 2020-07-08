import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, Provider } from './Slomux'
import { reducer } from './Slomux/reducer'
import Timer from './Timer'

const STORE = createStore(reducer)

ReactDOM.render(
    <Provider store={STORE}>
        <Timer />
    </Provider>,
    document.getElementById('app')
)