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
