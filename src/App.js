import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <MealsSummary/>
      </main>
    </React.Fragment>
  );
}

export default App;
