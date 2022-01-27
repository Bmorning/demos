
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import asyncComponent from './utils/asyncComponent'

const App = asyncComponent(() => import('./pages/app/App.js'))
const Game = asyncComponent(() => import('./pages/game'))
const Clock = asyncComponent(() => import('./pages/clock'))

class RouteConfig extends React.Component {
    render () {
        return (
            <Router>
                <Routes>
                    <Route path="/game" element={<Game/>}></Route>
                    <Route path="/clock" element={<Clock/>}></Route>
                    <Route path="/" element={<App/>}></Route>
                </Routes>
            </Router>
        )
    }
}

export default RouteConfig
