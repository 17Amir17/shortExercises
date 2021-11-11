# Answers

## Insertion to Databse

I've written a script that clears db and writes all data into it  
The script is located in src/jobs/populateDB

## All Queries

All models are located in `src/mongo/models`  
All queries are located in `src/mongo/queries` and are labeled accordingly (`model`Queries.js)

## How To Run

- Run `npm i`
- Add my database vars to .env
- Add data to database by running `npm run filldb` or `node ./src/jobs/populateDB.js`
- Student test: `npm run teststudent` or `node ./src/testStudents.js`
- Related test: `npm run testrelated` or `node ./src/testRelated.js`

## Output Of Post With Comments

```
Post - Passes out at party by GoodGuyGreg
Body - Wakes up early and cleans house
Comments:
ScumbagSteve:  It still isn't clean

Post - Steals your identity by GoodGuyGreg
Body - Raises your credit score
Comments:
No comments.

Post - Reports a bug in your code by GoodGuyGreg
Body - Sends you a Pull Request
Comments:
ScumbagSteve: Denied your PR cause I found a hack

Post - Borrows something by ScumbagSteve
Body - Sells it
Comments:
GoodGuyGreg: Hope you got a good deal!

Post - Borrows everything by ScumbagSteve
Body - The end
Comments:
GoodGuyGreg: What's mine is yours!

Post - Forks your repo on github by ScumbagSteve
Body - Sets to private
Comments:
GoodGuyGreg: Don't violate the licensing agreement!
```
