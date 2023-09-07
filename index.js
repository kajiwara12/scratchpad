var lines = [
    'It\'s me.',
    "Can you hear me?",
    "from the other side",
    "from the outside",
];
for (let i = 0; i < lines.length; i++) {
    lines[i] = "Hello, " + lines[i];
}

console.log(lines);
/* var education = "a Master's degree";

// set the value of this based on a person's education
var salary = 0;

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
}
console.log(
    `In 2015, a person with ${education} earned an average of $${salary.toLocaleString(
        "en-US"
    )}/year.`
); */
/* var eatsPlants = false;
var eatsAnimals = true;

var category =
    eatsPlants && !eatsAnimals
        ? "herbivore"
        : eatsPlants && eatsAnimals
        ? "omnivore"
        : !eatsPlants && eatsAnimals
        ? "carnivore"
        : undefined;

console.log(category); */

/* function isLastEvenOdd(numArray) {
    if (numArray[numArray.length - 1] % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(isLastEvenOdd([1,2,3,4,5])); */

var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.7;

if (
    shirtWidth >= 18 &&
    shirtWidth < 20 &&
    shirtLength >= 28 &&
    shirtLength < 29 &&
    shirtSleeve >= 8.13 &&
    shirtSleeve < 8.38
) {
    console.log("S");
} else if (
    shirtWidth >= 20 &&
    shirtWidth < 22 &&
    shirtLength >= 29 &&
    shirtLength < 30 &&
    shirtSleeve >= 8.38 &&
    shirtSleeve < 8.63
) {
    console.log("M");
} else if (
    shirtWidth >= 22 &&
    shirtWidth < 24 &&
    shirtLength >= 30 &&
    shirtLength < 31 &&
    shirtSleeve >= 8.63 &&
    shirtSleeve < 8.88
) {
    console.log("L");
} else if (
    shirtWidth >= 24 &&
    shirtWidth < 26 &&
    shirtLength >= 31 &&
    shirtLength < 33 &&
    shirtSleeve >= 8.88 &&
    shirtSleeve < 9.63
) {
    console.log("XL");
} else if (
    shirtWidth >= 26 &&
    shirtWidth < 28 &&
    shirtLength >= 33 &&
    shirtLength < 34 &&
    shirtSleeve >= 9.63 &&
    shirtSleeve < 10.13
) {
    console.log("2XL");
} else if (
    shirtWidth === 28 &&
    shirtLength === 34 &&
    shirtSleeve === 10.13
) {
    console.log("3XL");
} else {
    console.log("NA");
}

/* function toASCII(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string.charCodeAt(i));
    }
}
toASCII('cheese'); */
/* function myFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
myFunction('cheese') */
/* function fibs(num) {
    let arr = [];
    if (num < 2) {
        arr.push(num);
    } else {
        arr.push(0,1);
        for (let i = 2; i <= num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr;
    }
}
console.log(fibs(8));

function fibss(num) {
    if (num < 2) {
        return num;
    } else {
        return fibss(num - 1) + fibss(num - 2);
    }
}
console.log(fibss(8)); */
/* function prodArr(arr){
    if (arr.length === 0){
        return 1;
    } else {
    return arr.shift() * prodArr(arr);
    }
}
console.log(prodArr([1,2,3])); */

/* function fact(n){
    if (n === 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
console.log(fact(5)); */
/* function power(num, n){
    if (n <= 0) {
        return 1;
    }
    else {
        return num * power(num, n - 1);
    }
}
console.log(power(2,4)); */
/* function sumRange(n){
    if (n === 1) {
        return 1;
    } else {
        return n + sumRange(n - 1);
    }
}

console.log(sumRange(3)); */

/* const img = document.createElement("img");
document.body.appendChild(img);
fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=&tag=glitch+vaporwave=r",
    { mode: "cors" }
)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
    }); */
/* function getWeather() {
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                const { latitude: lat, longitude: long } = position.coords;
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=xxxxxxxxxxxxxx`
                );
                const data = await response.json();
                const weatherConversion = Math.floor(((data.main.temp - 273.15) * 9) / 5 + 32);
                const sunrise = new Date(data.sys.sunrise * 1000) .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                resolve(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon"><br>It is ${weatherConversion}°F with ${data.weather[0].description} in ${data.name}.<br> The sunrise will be at ${sunrise} and the sunset will be at ${sunset}`);
            });
        } else {
            reject("Geolocation is not supported in your browser.");
        }
    });
} */
/* function displayData(weather) {
    weatherDisplay.innerHTML = (weather);
}

function displayError(error) {
    console.log(error);
}

getWeather().then(displayData).catch(displayError);

const weatherDisplay = document.getElementById('weather'); */
/* async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroes = await response.json();
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
}

function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;

    for (let hero of heroes) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = "Superpowers:";

        const superPowers = hero.powers;
        for (let power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
populate(); */
/* const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Enter your EMAIL!";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "That's not an email!";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Your email needs to be ${email.minLength} characters; you entered ${email.value.length} characters.`;
    } else {
        emailError.className = "error active";
    }
}
 */
