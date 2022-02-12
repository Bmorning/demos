
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'

const App = asyncComponent(() => import('./pages/app/App.js'))
const Game = asyncComponent(() => import('./pages/game'))
const Clock = asyncComponent(() => import('./pages/clock'))
const List = asyncComponent(() => import('./pages/list'))
const Temperature = asyncComponent(() => import('./pages/temperature'))
const Composition = asyncComponent(() => import('./pages/composition'))

class RouteConfig extends React.Component {
    render () {
        return (
            <Router>
                <Routes>
                    <Route path="/game" element={<Game/>}></Route>
                    <Route path="/clock" element={<Clock/>}></Route>
                    <Route path="/list" element={<List/>}></Route>
                    <Route path="/temperature" element={<Temperature/>}></Route>
                    <Route path="/composition" element={<Composition/>}></Route>
                    <Route path="/" element={<App/>}></Route>
                </Routes>
            </Router>
        )
    }
}

export default RouteConfig
