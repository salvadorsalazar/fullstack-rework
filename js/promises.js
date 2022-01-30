"use strict";

// console.log('test');

function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': 'token' + 'GITHUB_API_TOKEN'}})
      then(response => response.json())
        .then(response => response[0].created_at)
            .catch(console.error)
}

console.log(lastCommit('salvadorsalazar'));


// getLastCommitDate('salvadorsalazar');

// )
//         }
//     }
//             .then(events => events.filter(event => event.type ==='PushEvent'))
//         .then(commits =>commits[0].created_at)
//             .catch(error => console.error(error));
// }












//
// function wait(time) {
//     return new Promise((resolve, reject) => {
//         if (!isNaN(time)) {
//             setTimeout(() => {
//                 resolve();
//             }, time)
//         } else {
//             reject('Did not work');
//         }
//     });
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));