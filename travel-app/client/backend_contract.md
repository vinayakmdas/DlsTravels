# Backend contract — Booking endpoint

Share this file with your friend. This is everything they need to build
the backend so it plugs into the frontend with zero changes on your side.

## Endpoint to build

```
POST /api/bookings
Content-Type: application/json
```

## Request body (exact shape sent from the frontend)

```json
{
  "fullName": "Jane Doe",
  "phoneNumber": "+91 98765 43210",
  "whatsappNumber": "+91 98765 43210",
  "email": "you@example.com",
  "specialRequest": "Need a child seat",

  "seatCapacity": "6 seater",
  "vehicleType": "AC",

  "from": "Kochi",
  "to": "Munnar",
  "pickupDate": "2026-07-10",
  "pickupTime": "09:30",

  "fullPackageRequired": false,

  "adults": 2,
  "children": 1,
  "luggage": 3,

  "journeyType": "oneWay"
}
```

Field notes:
- `vehicleType`: always `"AC"` or `"NonAC"`
- `journeyType`: always `"oneWay"` or `"roundTrip"`
- `pickupDate`: ISO format `YYYY-MM-DD` (native HTML date input)
- `pickupTime`: 24-hour `HH:MM` (native HTML time input)
- `adults`, `children`, `luggage`: integers, never negative
- `email`, `specialRequest`, `seatCapacity` may be empty strings

## Expected success response

```json
{
  "success": true,
  "bookingId": "abc123"
}
```
Status code: `201 Created`

## Expected error response

```json
{
  "success": false,
  "message": "Human-readable error message"
}
```
Status code: `400` (validation) or `500` (server error)

## CORS

The frontend runs on a different port during development
(e.g. `http://localhost:5173`), so the backend needs CORS enabled
for that origin, e.g. in Express:

```js
import cors from 'cors';
app.use(cors({ origin: 'http://localhost:5173' }));
```

## Where this is called from (frontend reference, no action needed)

`src/services/bookingService.js` → `createBooking()` — this is the only
place in the frontend codebase that calls this endpoint.