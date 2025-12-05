# ${{ values.name | capitalize }}

${{ values.description }}

## Overview

This service is part of the **${{ values.system }}** system and is owned by **${{ values.owner }}**.

## Technical Stack

- **Language**: TypeScript
- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Port**: ${{ values.port }}

## Getting Started

Clone the repository and install dependencies:

git clone https://github.com/${{ values.repoOwner }}/${{ values.repoName }}
cd ${{ values.repoName }}
npm install
npm run dev

The service will start on port ${{ values.port }}.

## API Endpoints

### Health Check
GET /health

Returns service health status.

### Status
GET /api/v1/status

Returns service metadata and version information.

## Development

Run tests:
npm test

Build for production:
npm run build
npm start
