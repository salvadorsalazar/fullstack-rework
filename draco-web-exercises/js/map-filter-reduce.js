const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguagePeople = users.filter( user => user.languages.length >= 3);

let emails = users.map( user => user.email);

// let averageYearsOfExperience = users.reduce((totalYears, user, index, array) => index === array.length-1 ? (totalYears + user.yearsOfExperience)/array.length : totalYears + user.yearsOfExperience
// , 0);

// credit to Jonathan Rhodes for:
let averageYearsOfExperience = users.reduce((total, user, index, array) => total + user.yearsOfExperience/array.length, 0);

// Paris Shirley:
//     let longestEmail = users.reduce((a,b) => {
//         if (a.length < b.email.length) {
//             a = b.email;
//         }
//         return a;
//     }, '');
// console.log(longestEmail);

// Nicholas Gaytan edit:
// let longestEmail = users.reduce(((a, b) => a.length < b.email.length ? a = b.email : a), '');

// Chris Lundblade

// var longestEmail = users.reduce((accumulator, currentUser, index, array) => {
//    if(accumulator.email.length > currentUser.email.length){
//        return accumulator;
//    } else {
//        return currentUser;
//    }
// }).email;

// Javier's solution:
// var longestEmail = users.reduce(function (accumulator, user, index, usersArray){
//     if (index === usersArray.length-1){
//         accumulator.push(user.email);
//         accumulator.sort(function(email1, email2){
//            return  email2.length - email1.length;
//         });
//         return accumulator[0];
//     } else {
//         accumulator.push(user.email);
//         return accumulator;
//     }
// }, []);

// let names = users.reduce((accumulator, user, index, usersArray) => {
//     if (index === usersArray.length-1){
//         accumulator.push(user.name);
//         let niceJoin = accumulator.join(', ');
//         niceJoin = `Your instructors are: ${niceJoin}`;
//         return niceJoin;
//     } else {
//         accumulator.push(user.name);
//         return accumulator;
//     }
// }, []);

let uniqueUserLanguages = users.reduce(function(accumulator, user){
    let languages = user.languages;
    for (let i = 0; i < languages.length; i++){
        if (!accumulator.includes(languages[i])){
            accumulator.push(languages[i]);
        }
    }
    return accumulator.sort();
}, []);
console.log(uniqueUserLanguages);