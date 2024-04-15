# Lunchbox

## Running the application
### Server
The server uses the bun runtime. See [bun.sh](bun.sh) for installation instructions.

0. `cd server`
1. Install dependencies:
```bash
bun i
```
2. Pass the database credentials in /server/.env and provide a secret for JWT auth.
```bash
DB_NAME=lunchbox
DB_USER=admin
DB_PASS=admin
DB_HOST=127.0.0.1
JWT_SECRET=[SECRET HERE]
```
3. Create a new MySQL database.
4. Run migrations:
```bash
bun migrate:up
```

### Client

0. `cd client`
1. Provide the backend url in .env
```
PUBLIC_BACKEND_URL=http://localhost:3000
```
2. Run
```
npm i
npm run dev
```
