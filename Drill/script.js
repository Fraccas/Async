
// Timing Out
// let callString = (msg) => {
//     console.log(msg);
// }
// callString("hi normal function here");

// let getWords = () => {
//     console.log('lets');
//     setTimeout(() => {
//         callString('do');
//     }, 1000);
//     setTimeout(() => {
//         callString('this');
//     }, 2000);
//     setTimeout(() => {
//         callString('shat');
//     }, 3000);
// }
// getWords();

// Callbacks and Recursion
// let countdown = (num, callback) => {
//     setTimeout(() => {
//         num -= 1000;
//         console.log(num + ' ms left!');
//         if (num > 1) countdown(num, callback);
//         else callback();
//     }, num);
// }

// let done = () => console.log('Jobs done!');

// countdown(3000, done);

// Promises 
let lunchTime = false;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            let obj = {
                lunch: "pizza",
                drink: 'gatorade'
            };
            resolve(obj);
        } else {
            let err = new Error('not lunch time');
            reject(err);
        }
    });
}

orderMeSomeFood().then((res) => {
    console.log(res.lunch + ' - ' + res.drink);
}).catch((err) => {
    console.log(err);
});