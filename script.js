// console.log("Hello ");
// let N = parseInt(prompt("Enter a Number : "));

// console.log("Factors of", N, "are:");
// for(let i = 1; i <= N; i++) {
//     if(N % i === 0) {
//         console.log(i);
//     }
// }

// let N = parseInt(prompt("Enter a num: "))
// for(let i=1; i<=N; i++){
//     if(N%i===0){
//         console.log(i);
//     }
// }

// let N = parseInt(prompt("Enter a num: "))
// for(let i=1; i<=Math.sqrt(N); i++){
//     if(N%i===0){
//         console.log(i);
//         if(N/i !=i)
//             console.log(N/i)
//     }
// }


let N = parseInt(prompt("Enter a num: "))
for(let i=1; i*i<=N; i++){
    if(N%i===0){
        console.log(i);
        if(N/i !=i)
            console.log(N/i)
    }
}


