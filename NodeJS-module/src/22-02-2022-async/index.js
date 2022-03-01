function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomNumber() {
    let waitTime = randomGenerator(500, 5000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = randomGenerator(1, 100);
            if (randomNumber < 1) 
                reject('Tempo inválido');
            else 
                resolve(randomNumber);
        }, waitTime);
    });
}  

let promisesArr = [];
for (let index = 0; index < 3; index++) {
    promisesArr.push(randomNumber());
}

Promise
    .all(promisesArr)
    .then(results => {
        results.forEach((result, idx) => {
            console.log(`result: ${idx}: ${result}`);
        });
});