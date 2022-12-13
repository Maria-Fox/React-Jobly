# Step 4:

Filtering companies does a hard refresh. Unable to get the rendered version of the API response w/ query filters.

Is it re-rendering bc the currentUser is not authe'd yet? That is the only thing to cause a rerender. needs addressing.

URL looks correct: http://localhost:3000/companies?searchTerm=aria

To recreate: please complete the search form at the top of CompanyList.js

## Step 6: 

For some reason line 72 in App.js is not setting a new user to state.
      setCurrentUser(username)

