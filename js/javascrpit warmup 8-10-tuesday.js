// Create a function, filterOutBobUsers, that takes in an array of user objects with firstName and lastName properties
// and returns an array of user objects without any Bob users. The case of the Bob names does not matter.



    // for(i=0; i < users.length;i++){
    //     var
    //     if(arr[i] === 'bob'|| user[i]==='BOB'){
    //         delete arr[i];
    //
    //     }
    // }return


// }
    var users = [
    {
        firstName: ‘bob’,
lastName: ‘Smith’
},
{
    firstName: ‘BOB’,
    lastName: ‘Smith’
},
{
    firstName: ‘Fred’,
    lastName: ‘Smith’
},
{
    firstName: ‘Cathy’,
    lastName: ‘Smith’
},
{
    firstName: ‘Dawn’,
    lastName: ‘Smith’
}
]


///first soultion

// function filterOutBobUsers(users) {
// var outputUsers=[];
//     //output array
//
//     //looping over users and inf given usersf irst name is bob dont add to ouput array
//     for(var i =0;i<users.length;i++){
//         console.log(users[i].firstName);
//
//         if(users[i].firstName.toLowerCase() !== 'bob'){
//             outputUsers.push(users[i]);
//         }
//     }
//     //returun the output array
// return outputUsers;
// }
//
// console.log(filterOutBobUsers(users));
//


//for coffee project.......
function filterOutBobUsers(users,filterName) {
    var outputUsers=[];
    //output array

    //looping over users and inf given usersf irst name is bob dont add to ouput array
    for(var i =0;i<users.length;i++){
        console.log(users[i].firstName);

        if(users[i].firstName.toLowerCase() !== filterName.toLowerCase()){
            outputUsers.push(users[i]);
        }
    }
    //returun the output array
    return outputUsers;
}

console.log(filterOutBobUsers(users,'dawn'));











// filterOutBo
// bUsers(users)






// filterOutBobUsers(users) // returns...
//     [
//     {
//         firstName: ‘Fred’,
// lastName: ‘Smith’
// },
// {
//     firstName: ‘Cathy’,
//     lastName: ‘Smith’
// },
// {
//     firstName: ‘Dawn’,
//     lastName: ‘Smith’
// }
// ]