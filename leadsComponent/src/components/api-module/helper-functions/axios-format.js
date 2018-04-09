// BACKGROUND: API Data come in form of an array of objects. 
// Table rendering implementation requires all values of objects to be in an array, also does not need the "id" property


// LOCAL HELPER FUNCTIONS

// get keys from data for header; used for demo purposes
const extractKeys = data => Object.keys(data[0]).filter(x => x != "id");

// remove id from object
const objectToArray = object => Object.values(object).slice(1);

const leadsObjectToArray = object => Object.values(object).slice(1, 7);




// EXPORT HELPER FUNCTIONs

// build an array of arrays for items
export const formatData = data => data.map(each => objectToArray(each));

// filters through the array of array that represents the table information to sort by search term
export const filterBySearch = (arr, search) => (
    search === ""
        ? arr
        : arr.filter(x =>
            x[0].substring(0, search.length).toUpperCase() === search.toUpperCase()
        )
);

// build an array of arrays for items
export const formatLeadsData = data => data.map(each => leadsObjectToArray(each));