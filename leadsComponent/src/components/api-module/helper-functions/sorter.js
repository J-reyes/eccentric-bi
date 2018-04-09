// currying function to build sort function
export const sortBuilder = comparator => arr => arr.sort(comparator);

// alphabetic strings only
export const ascComparatorBuilder = index => (a, b) => (
    a[index].toUpperCase() < b[index].toUpperCase()
        ? -1
        : a[index].toUpperCase() > b[index].toUpperCase()
            ? 1
            : 0
);

export const descComparatorBuilder = index => (a, b) => (
    a[index].toUpperCase() > b[index].toUpperCase()
        ? -1
        : a[index].toUpperCase() < b[index].toUpperCase()
            ? 1
            : 0
);

// boolean comparison
export const boolAscCompBuilder = index => (a, b) => (
    a[index] === b[index]
        ? 0
        : a[index]
            ? -1
            : 1
);

export const boolDescCompBuilder = index => (a, b) => (
    a[index] === b[index]
        ? 0
        : a[index]
            ? 1
            : -1
);

// date comparison
export const dateAscCompBuilder = index => (a, b) => (
    new Date(a[index]).getTime() < new Date(b[index]).getTime()
        ? -1
        : new Date(a[index]).getTime() > new Date(b[index]).getTime()
            ? 1
            : 0
);

export const dateDescCompBuilder = index => (a, b) => (
    new Date(a[index]).getTime() > new Date(b[index]).getTime()
        ? -1
        : new Date(a[index]).getTime() < new Date(b[index]).getTime()
            ? 1
            : 0
);


