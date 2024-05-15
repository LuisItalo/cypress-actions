const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJiODU2ODg3LTNlMDQtNDIwYi1iMDVjLTI5NjY1ZDVkZjMxMC0xNzE1Nzk0OTEzMDI5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTBiMWM0NmUtMTNhYS00M2MwLTlhMmMtZDNmOGQxNTFkMGNkIiwidHlwZSI6InQifQ.MofbNVug41KnJCSNGq_eCaS0PdTIiSzqcbTP5YJEFzc'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
