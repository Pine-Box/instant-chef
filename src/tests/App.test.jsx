import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';
import searchRecipe from '../utils/api';
import axios from 'axios'

vi.mock('axios', () => ({
    default: () => ({
      get: vi.fn(),
      post: vi.fn(),
    }),
  }));
  


// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
    render(<App />);
});

describe('apisearch', ()=> {
    it('makes a GET search for a recipe with <name param>', async () => {
    const recipeMock = [{ id: 1 }, { id: 2 }]

    axios.get.mockResolvedValue({
      data: recipeMock
    })

    const recipes = await searchRecipe('pasta')

    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')


 })
})
