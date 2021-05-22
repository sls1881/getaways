require('dotenv').config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter, Route } from 'react-router';
import placesData from './placesData.json';
import Getaways from './Getaways';
import Details from './Details';

const server = setupServer(
  rest.get(`${process.env.BASE_URL}/places`, (req, res, ctx) => {
    return res(ctx.json(placesData));
  })
);

describe('Bookings data', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('Render a list of places', async () => {
    render(
      <MemoryRouter>
        <Getaways />
      </MemoryRouter>
    );

    screen.getByAltText('spinner');

    const ul = await screen.findByRole('list', { name: 'places' });
    expect(ul).toMatchSnapshot();
  });

  it('Render a place', () => {
    render(
      <MemoryRouter initialEntries={['/6092e208e9e24bf5b66a86bd']}>
        <Route path="/:id">
          <Details />
        </Route>
      </MemoryRouter>
    );

    screen.getByAltText('spinner');

    return waitFor(() => {
      screen.getByText(
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
      );
      screen.getByAltText('Handcrafted Motel');
    });
  });
});
