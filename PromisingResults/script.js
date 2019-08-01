// Promise.then Chaining
// let doMath = () => {
//     return new Promise((resolve, reject) => {
//         slowMath.add(1, 1).then((res) => {
//             console.log(res);
//             slowMath.multiply(res, 2).then((res) => {
//                 console.log(res);
//                 slowMath.divide(res, 4).then((res) => {
//                     console.log(res);
//                     slowMath.subtract(res, 3).then((res) => {
//                         console.log(res);
//                         slowMath.add(res, 98).then((res) => {
//                             console.log(res);
//                             slowMath.remainder(res, 2).then((res) => {
//                                 console.log(res);
//                                 slowMath.multiply(res, 50).then((res) => {
//                                     console.log(res);
//                                     slowMath.remainder(res, 40).then((res) => {
//                                         console.log(res);
//                                         slowMath.add(res, 32).then((rest) => {
//                                             console.log(`the final result is ${rest}!`); //42
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     }).catch((err) => {
//         console.log(err);
//     });
// }
// doMath();

// Async/Await so much better
const doMath = async () => {
    try {
        let anw = await slowMath.add(6, 2);
        console.log(anw);
        anw = await slowMath.multiply(anw, 2);
        console.log(anw);
        anw = await slowMath.divide(anw, 4);
        console.log(anw);
        anw = await slowMath.subtract(anw, 3);
        console.log(anw);
        anw = await slowMath.add(anw, 98);
        console.log(anw);
        anw = await slowMath.remainder(anw, 2);
        console.log(anw);
        anw = await slowMath.multiply(anw, 50);
        console.log(anw);
        anw = await slowMath.remainder(anw, 40);
        console.log(anw);
        anw = await slowMath.add(anw, 32);

        console.log(`Final result is ${anw}!`);
    } catch (err) {
        console.log(err);
    }
}
doMath();