// get keys from data for header; used for demo purposes
const extractKeys = data => Object.keys(data[0]).filter(x => x != "id");

// remove id from object
const objectToArray = object => Object.values(object).slice(1);

// build an array of arrays for items
export const formatData = data => data.map(each => objectToArray(each));

export const filterBySearch = (arr, search) => (
    search === ""
        ? arr
        : arr.filter(x =>
            x[0].substring(0, search.length).toUpperCase() === search.toUpperCase()
        )
);


const leadsObjectToArray = object => Object.values(object).slice(1, 7);

// build an array of arrays for items
export const formatLeadsData = data => data.map(each => leadsObjectToArray(each));