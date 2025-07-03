# Artistle - Wordle for Spotify Artists
A daily music challenge game where players guess Spotify artists based on their songs, built with Next.js, Tailwind CSS, and powered by AWS serverless architecture.

## Features
- Daily Artist Puzzle: New Spotify artist challenge every 24 hours
- Progressive Hints: Hints along the way to see if you're getting closer (or farther!)

## Tech Highlights
- Serverless Generation:
  - AWS Lambda + CloudWatch Events for daily artist selection
  - Redis caching for instant puzzle delivery

- Player Stats:
  - DynamoDB tracks your past performance

- Secure Auth:
  - Auth0 integration with Next.js middleware

- Frontend:
  - Next.js (React framework)
  - Tailwind CSS (utility-first CSS framework)

- Backend:
  - Python Flask (Artist data processing)
  - AWS Lambda (Serverless functions)
  - Amazon DynamoDB (Player stats)
  - Redis (Daily puzzle caching)

- Deployment:
  - Vercel (for Next.js hosting)

Try it out [here](https://artistle-nu.vercel.app/)!
## Built with ♪ by Jayden Tan | © 2025
