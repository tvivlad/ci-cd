import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('Card testing', () => {
  test('renders learn react link', () => {
    render(
      <Card
        name={'Пеперони'}
        image={'https://cdn.dummyjson.com/recipe-images/1.webp'}
        rating={4.7}
        count={5}
      />
    )
    const linkElement = screen.getByText(/Count/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('check class', () => {
    render(
      <Card
        name={'Пеперони'}
        image={'https://cdn.dummyjson.com/recipe-images/1.webp'}
        rating={4.7}
        count={5}
      />
    )
    const linkElement1 = screen.getByText(/Count/i)
    expect(linkElement1).toHaveStyle({ 'font-size': '20px;' })
  })
})
