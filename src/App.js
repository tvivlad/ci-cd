import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const getPizzaList = async () => {
    const response = await axios.get('https://dummyjson.com/recipes?limit=7')
    console.log(response.data)
    setPizzaList(response.data.recipes)
  }
  useEffect(() => {
    getPizzaList()
  }, [])
  return (
    <div>
      {pizzaList.map((pizza) => (
        <Card
          name={pizza.name}
          image={pizza.image}
          rating={pizza.rating}
          count={pizza.reviewCount}
        />
      ))}
    </div>
  )
}

export default App
