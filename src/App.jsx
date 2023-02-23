import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Home from './Components/Home'
import ToDoList from './Components/ToDoList'

const App = ()=>{
    return(
        <div className="app-main">
            <Routes>
                <Route path="/home"element={<Home />} />
                <Route path="/todolist"element={<ToDoList />} />
            </Routes>
            
        </div>
    )
}
export default App