import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomeScreen from './Screens/HomeScreen'
import MovieDetailScreen from './Screens/MovieDetailScreen'
import MovieSearch from './Screens/MovieSearch'

function App() {
  return (
    <Router>
        <Header />

        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/movie/:id" component={MovieDetailScreen} />
          <Route path="/searchMovie" component={MovieSearch} />
        </main>
    </Router>
  );
}

export default App;