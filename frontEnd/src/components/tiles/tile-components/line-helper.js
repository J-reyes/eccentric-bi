
// 
export const formatData = (data, key) => {
    let arr = [];
    for (let item of data) {
        arr.push(item[key])
    }
    return arr;
}






