# Advanced Fetch Requests

## Learning Goals

- POST method
- PATCH method
- DELETE method
- RESTful routing
- Headers in the fetch request
- Body in the fetch request

## Starting the Server

```bash
json-server db.json
```

Endpoint:
```
http://localhost:3000/ufo-sightings
```

## RESTful Routes

Assuming you have a database and endpoint named `ufo-sightings`

1. Index - `GET /ufo-sightings`
2. Show - `GET /ufo-sightings/:id` (for example `/ufo-sightings/2`)
3. CREATE - `POST /ufo-sightings`
4. UPDATE - `PATCH /ufo-sightings/:id` (for example `/ufo-sightings/2`)
5. DESTROY - `DELETE /ufo-sightings/:id` (for example `/ufo-sightings/2`)

You may come across additional routes that we won't be using in this course (these are older routes that aren't important for the APIs we're building).
