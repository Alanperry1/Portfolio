#!/bin/bash
# Only build the frontend part for Vercel deployment
echo "Running custom build script for Vercel..."
npm run vite build
