import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import Success from './pages/Success'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
