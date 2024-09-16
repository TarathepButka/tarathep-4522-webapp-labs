let filterShortStrings = (arrword) => arrword.filter(word => word.length >= 4);
console.log(filterShortStrings(['hi','hello','hey','world']));
console.log(filterShortStrings(['a','ab','abc','abcd']));