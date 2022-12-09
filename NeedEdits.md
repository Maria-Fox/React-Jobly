# Step 4:

Filtering companies does a hard refresh. Unable to get the rendered version of the API response w/ query filters.

Is it re-rendering bc the currentUser is not authe'd yet? That is the only thing to cause a rerender. needs addressing.

URL looks correct: http://localhost:3000/companies?searchTerm=aria

To recreate: please complete the search form at the top of CompanyList.js

## Step 6: 

Unable to decode the JWT received when a user signs up /logs in. Nee dto destructure token to assign into state and confirm there's a valid user accessing protecting sites.

### Step 7:

Unsure how Springboard protected the routes. My version is seen on CompanyList.js & Profile.js. I essentially just check to see if there's a currentUser in state and navigate elsewhere if not. I have not protected the other routes bc I need to correct step 6 to hold the token in state and add to localStorage. 

I think it's what we're running when the inital App.js effect runs checking for token. If no token there's no auth to go anywhere. Is this correct? If so, how does it know to route elsewhere? Is our backend working through Next's?