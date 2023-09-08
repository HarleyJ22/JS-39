const isLogged = true;
let promiseOne = new Promise((resolve, reject) => {
    if (isLogged) {
        resolve(Math.random());
    }
    reject("error");
});

let promiseTwo = (number) =>
    new Promise((resolve, reject) => {
        if (number > 0, 5) {
            resolve({ name: "John", age: 24 });
        }
        reject("The number isn't greater than 0,5");
    });

promiseOne
    .then(promiseTwo)
    .then((result) => console.log(result))
    .catch((err) => console.error(err))
    .finally(() => console.log(`print`))

