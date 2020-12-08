import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
    <Router>
        <Header />

        <main>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </main>
    </Router>
  );
}

export default App;