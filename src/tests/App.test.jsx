import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';
import search from '../utils/api';

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
    render(<App />);
});

it('Api returns recipes without error'), () => {

    recipes = search('pasta');

}
