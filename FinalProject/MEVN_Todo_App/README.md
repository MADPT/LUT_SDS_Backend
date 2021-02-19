# MEVN Todo App

Todo app using MEVN stack (MongoDB, Express, VueJS and NodeJS).

[Demo online](https://mevn-todo-app.herokuapp.com/)

## Getting Started

```bash
# Install dependencies
npm install

# Start Express Server: http://localhost:5000
npm start

# Start Vue DevServer: http://localhost:8080
cd client
npm run serve

# MongoDB connection
# Create MongoDB Atlas account and add the connection string
echo "DB_URL=<CONNECTION_STRING>" > .env

# Build for production (will build into server/public, ready for deployment)
cd client
npm run build

# Deploy to Heroku
heroku git:remote -a <APP_NAME>
git subtree push --prefix FinalProject/MEVN_Todo_App heroku master
```
