#!/bin/bash

# Portfolio Setup Script
# Run this to set up and start your portfolio locally

echo "🎨 Colton Batts Portfolio Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "   Install from: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✓ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Starting development server..."
echo ""
echo "   Open: http://localhost:3000"
echo "   Press Ctrl+C to stop"
echo ""

npm run dev
