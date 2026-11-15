# ITclan TT Arena

Table-tennis tournament manager (Next.js). Spinner team draw → groups/league → live standings → knockout → champion.

## Run
```
npm install
npm run dev      # http://localhost:3000
npm test         # logic check
```

## Deploy (Vercel)
Push the folder to GitHub → Import in Vercel → Deploy (no env vars, no database).

## Data
Everything is one JSON document kept in the browser (localStorage).
Use **Export / Import** to back up or move data between devices.
"New" / "Save to history & start new" resets to the default team **Sayem + Mosaraf**.
