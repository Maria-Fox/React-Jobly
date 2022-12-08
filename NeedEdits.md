Step 4:

Filtering companies does a hard refresh. Unable to get the rendered version of the API response w/ query filters.

URL looks correct: http://localhost:3000/companies?searchTerm=aria
How is "searchTerm" key being rendered if I'm sending in "q"?

To recreate: please complete searcch form at the top of CompanyList.js

Step 6: 

Imported JSON Web Tokens to decode the token received from the backend when registering or signing in. I am seeing a pollyfill error. Need the token to assign payload to the currentUser piece of state // use throughout the app.

To recreate : please activate lines 7 & 22 active in App.js. currently commented out.