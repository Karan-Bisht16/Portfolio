const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const value = "websites";
const element = document.querySelector("#scrambledText");
console.log(element);
console.log(element.innerText);


let iteration = 0;
const interval = setInterval(() => {
    element.innerText.split("")
        .map((letter, index) => {
            if (index < iteration) {
                return value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)]
        }).join("");
    if (iteration >= value.length) {
        clearInterval(interval);
    }
    iteration += 1 / 5;
}, 1000);

5*30*2 300
8*30*2 480