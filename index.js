function returnFirstTwoDrivers(drivers) {
    return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(value) {
    return () => value * value;
}


function fareDoubler(value) {
    return value * 2;
}


function fareTripler(value) {
    return value * 3;
}


function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}







// selectingDrivers
// 1) has the `returnFirstTwoDrivers` function to as its first element
// 2) has the `returnLastTwoDrivers` function to as its last element
// 3) allows us to invoke either function from the array





