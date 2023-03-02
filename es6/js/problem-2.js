// Practice problem 2.1
const friendsFunction = allFriends => allFriends;

const friendsName = ['sifa', 'towkir', 'nisan', 'boishakhi'];
const friends = friendsFunction(friendsName);
// Practice problem 2.2
// console.log(friends);
const nameOfFriends = (friendsArray) => {
    let evenNames = [];
    for (let i = 0; i < friendsArray.length; i++){
        const element = friendsArray[i];
        if (element.length % 2 !== 0){
            evenNames.push(element);
        }
    }
    return evenNames;
}
const friendsNames = ['sifa', 'towkir', 'sagor', 'asif', 'nisan', 'boishakhi'];
const even = nameOfFriends(friendsNames);
console.log(even);
