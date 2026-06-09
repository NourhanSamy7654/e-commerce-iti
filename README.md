# E-commerce App

A lightweight React-based e-commerce storefront built with Vite. The app demonstrates product listing, product details, shopping cart management, routing, and paginated API fetching.

## Features

- Product browsing with pagination
- Product detail page with image preview, stock indicator, rating, and quantity selector
- Add products to cart using Redux Toolkit
- Cart management with quantity adjustment, removal, and clear cart
- Lazy-loaded routes for better performance
- Responsive UI with Bootstrap
- Login, register, about, and 404 routes included

## Tech Stack

- React 19
- Vite
- React Router DOM 7
- Redux Toolkit
- Axios
- Bootstrap 5
- SweetAlert2

## Project Structure

- `src/App.jsx` - application shell with routing and layout
- `src/Routes/RouteList.jsx` - route configuration with lazy-loaded pages
- `src/pages/` - main app pages for products, cart, auth, etc.
- `src/store/` - Redux store and cart state management
- `src/apis/config.js` - Axios instance with base URL and auth interceptors
- `src/component/` - reusable UI components

## Setup

1. Install dependencies

```bash
npm install
```

2. Add environment variables if needed

Create a `.env` file at the project root:

```env
VITE_APP_BASE_URL=https://api.example.com
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Notes

- The app fetches products from the configured API base URL via `VITE_APP_BASE_URL`.
- Authentication token handling is implemented in `src/apis/config.js` using `localStorage` and Axios interceptors.
- Cart state is managed in Redux and does not persist across page refreshes by default.


