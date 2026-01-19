# Podcast Player

This project is a podcast player built using the Podcast Index API and a Node.js server, deployed on Render. The player allows users to search for podcasts, browse episodes, and play audio directly in the browser.

## Features

- **Search Podcasts:** Find podcasts by title, author, or keyword using the Podcast Index API.
- **Browse Episodes:** View episodes of selected podcasts with details like title, description, and duration.
- **Audio Playback:** Listen to podcast episodes directly within the app with controls to play, pause, and skip.
- **Persistent State:** Save and load playback state, including the current episode, progress, and queue, using local storage.
- **Favorites:** Mark podcasts as favorites; favorites are saved in local storage and shown on app startup.
- **Progressive Web App (PWA):** Installable on supported devices for offline use.
- **Lazy Loading:** Efficiently loads podcast images and episode details as you scroll.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JacintoDesign/podcast-player.git
   ```

2. Navigation to the project directory:
   ```bash
   cd podcast-player
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Sign up for your own API Key & Secret at Podcast Index, then create your own .env file in the root folder and add the following:
   ```bash
   AUTH_KEY='your_api_key'
   SECRET_KEY='your_api_secret'
   USER_AGENT='Your_app_name'
   API_ENDPOINT='https://api.podcastindex.org/api/1.0'
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

The app will be available at http://localhost:3000.

## Deployment

### Vercel (recommended)

This repo is set up to run on Vercel using Serverless Functions for the API and static hosting for the frontend.

1. Push your code to GitHub.
2. Create a new Vercel project and import this repository.
3. In Vercel Project Settings → Environment Variables, add:
   - `AUTH_KEY`
   - `SECRET_KEY`
   - `USER_AGENT`
   - `API_ENDPOINT` (e.g. `https://api.podcastindex.org/api/1.0`)
4. Deploy. The frontend is served from `public/` and the API endpoints are:
   - `/api/search?q=...`
   - `/api/episodes?feedId=...&max=...`

Notes:
- `vercel.json` rewrites map `/`, static assets (CSS/JS/images), `manifest.json`, and `service-worker.js` to the `public/` folder.
- The serverless functions in `api/` handle Podcast Index authentication and requests.

### Render (alternative)

This project can also run on Render via the Express server in `server.js`.

1. Fork and connect the repo to Render.
2. Set the same environment variables as above.
3. Use `node server.js` as the start command.

## Functionality

- **Search:** Enter a keyword to search for podcasts.
- **Browse:** Click on a podcast to view its episodes.
- **Play:** Select an episode to start listening.
- **Queue:** Manage your episode queue and save your progress.
- **Favorites:** Click the star on a podcast card to add/remove it from your favorites. Favorited podcasts appear in the main list when you open the app.

## Technologies Used

- **Node.js:** Backend server
- **Express:** Web framework for Node.js
- **Podcast Index API:** Podcast search and episode retrieval
- **Render:** Deployment platform
- **JavaScript:** Frontend functionality
- **HTML & CSS:** User interface
- **Local Storage:** Persistent state management

## Acknowledgements

- [Podcast Index](https://podcastindex.org/) for providing the podcast data.
- [Render](https://render.com/) for hosting and deployment.
- [Podcast Icon](https://www.flaticon.com/free-icons/podcast) Podcast icons created by Flat Icons - Flaticon
