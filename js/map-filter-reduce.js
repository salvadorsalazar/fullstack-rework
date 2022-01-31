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

//2
const threeLanguages = users.filter(user => user.languages.length  >= 3)
console.log(threeLanguages);

//3
const userEmail = users.map(user => user.email);
console.log(userEmail);

//-------------------------------------------------
//------------------------------------------------
//
//4


const totalYears = users.reduce((sum,person) =>{
    return sum + person.yearsOfExperience;

    },0);
const averageExp = totalYears / users.length;

console.log(averageExp);

//5



//another example---MB

// const longestEmail = users.reduce((currentEmail, user) => {
//     if(currentEmail.length < user.email.length){
//         currentEmail = user.email;
//     }
//     return currentEmail;
// }, "");
// console.log(longestEmail);


const longestEmail = users.reduce((obj,user)=>{
    if(obj.length < user.email.length){
        obj = user.email;
    }
    return obj;

},'');
console.log(longestEmail)
// another example--NG
let longestEmail = users.reduce(((a, b) => a.length < b.email.length ? a = b.email : a), '')
//another example
//     const longestEmail = users.reduce((current, next ) => {
//         console.log(current)
//         if(next.email.length > current.length){
//             current = next.email }
//         return current
//         // console.log(current)
//
//     }, "");


//another example--LC
//     const longestEmail = users.reduce((email, usersEmail)=>
//         (email.length > usersEmail.email.length) ? email : usersEmail.email, "");
//     console.log(longestEmail);
//



//6

// const instructors = users.reduce((current, next) => current + next.name + ",", "Your instructors are: ");
// console.log(instructors)
//
// var instructorsName = []
// for(var i = 0; i < users.length; i++){
//     instructorsName.push(users[i].name)
// }
// console.log(instructorsName)
// console.log("Your instructors are: " + instructorsName.join(", "))


//example 2
// const nameString = users.reduce((nString, usersName)=> {
//     return nString + (usersName.name + " ");
// },"Your instructors are: ");
//
// console.log(nameString);

//anothe rexample--MB
let startingString = "Your instructors are: ";
const instructors = users.reduce((a, b) => `${a} ${b.name},`, startingString);
console.log(instructors.substring(0, instructors.length -1) + ".");
