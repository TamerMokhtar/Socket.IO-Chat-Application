# Socket.IO Chat Application

A real-time chat application built with Socket.IO, Express, and Node.js that allows users to send messages and see typing indicators.

## Features

- Real-time messaging between connected clients
- Typing indicators (shows when another user is typing)
- Simple and clean UI
- Cross-origin resource sharing support

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd socket-io-chat
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3001
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Access the application:
   - If running the frontend separately, open `index.html` in a browser
   - If you want the server to serve the HTML file, uncomment the relevant code in `index.js`

## Project Structure

- `index.js` - Server-side code with Socket.IO event handlers
- `index.html` - Client-side interface and Socket.IO client implementation
- `package.json` - Project dependencies and scripts

## How It Works

### Server-Side (index.js)

The server uses Express and Socket.IO to handle real-time communication:

- Sets up CORS to allow connections from any origin
- Listens for client connections
- Handles events:
  - `chat message` - Broadcasts messages to all connected clients
  - `typing` - Broadcasts typing indicators
  - `stop typing` - Clears typing indicators

### Client-Side (index.html)

The client connects to the Socket.IO server and:

- Sends messages through a form
- Displays incoming messages
- Shows typing indicators when other users are typing
- Emits typing events when the user interacts with the input field

## Customization

### Serving HTML from Express

To serve the HTML file directly from Express (instead of opening it separately), uncomment these lines in `index.js`:

```javascript
// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "index.html"));
// });
```

And also uncomment:
```javascript
// const {join} = require("path");
```

Then update the Socket.IO connection in `index.html` to:
```javascript
const socket = io();
```

Instead of:
```javascript
const socket = io("http://localhost:3001");
```

