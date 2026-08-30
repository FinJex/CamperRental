# TravelTrucks

TravelTrucks is a web application for browsing and booking campervans for your next road trip. Users can explore a catalog of available campers, filter them by location, body type, engine, and transmission, view detailed information about each vehicle, read reviews, and send a booking request.

## Features

- **Home page** with a hero banner and a call-to-action leading to the catalog
- **Catalog page** with a list of campers fetched from the backend
- **Filtering** by location (text search), camper form, engine type, and transmission
- **"Load more" pagination** — loads 4 additional campers at a time, respecting active filters
- **Camper details page** with an image gallery, full vehicle specifications, user reviews, and a booking form
- **Booking form** with client-side validation for name and email
- **Loading and empty states** — custom loaders and a "No campers found" screen when filters return no results
- Fully responsive layout built with CSS Modules

## Tech stack

- [Next.js](https://nextjs.org) (App Router) — React framework
- [TypeScript](https://www.typescriptlang.org) — static typing
- [TanStack Query](https://tanstack.com/query) — server state management, caching, and infinite pagination
- CSS Modules — component-scoped styling

## Getting started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/<FinJex>/CamperRental.git
   cd CamperRental
```

2. Install dependencies:

```bash
   npm install
```

3. Create a `.env.local` file in the project root and add the API base URL:


4. Run the development server:

```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Visit the home page and click **View Now** to go to the catalog.
- Use the sidebar on the catalog page to filter campers by location, camper form, engine, or transmission, then press **Search**.
- Click **Load more** to fetch additional campers matching the current filters.
- Click **Show more** on any camper card to open its details page in a new tab, where you can view the gallery, full specifications, reviews, and submit a booking request.

## Author

Developed by Vasylovych Maksym as part of a full-stack development learning project.