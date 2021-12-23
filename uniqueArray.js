var friends = ['farabi', 'selim', 'babul', 'farabi', 'babul', 'mamun', 'sagor', 'raju', 'mir', 'sobuj', 'sagor'];

/* make a new array where only includes unique name that's mean each name will be includes only one time, won't be duplicated */

let newFriends = [];
friends.forEach((friend) => {
    if (!newFriends.includes(friend)) {
        newFriends.push(friend);
    }
})
console.log(newFriends);