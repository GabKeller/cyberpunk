import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import { Provider } from 'react-redux'
import Login from './Login'
import Tela from './Tela'
import { store } from './store'

function App() {

  return (
    <Tela></Tela>
  )
}

export default App
