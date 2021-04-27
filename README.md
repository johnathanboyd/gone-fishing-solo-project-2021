Gone Fishin'
===

- get call for existing lakes
- show lake list on home page

- page load sends despatch with following action type
- action type: 'FETCH_LAKES'
- saga for GET call

- make data available for components thorugh redux store

[ ] put with action type of "SET_LAKES"

[ ] should be available to any comonent that uses Selector

- create new lakes ( require login [admin feature])
- POST route should be protected (rejectUnauthenticated)
- POST route should require authorization (user.admin)