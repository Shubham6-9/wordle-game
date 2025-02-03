const wordHints = [
    { word: "dong", hint: "A bell, but also a slang term for male parts" },
    { word: "bum", hint: "The back part of the body, but can also mean butt" },
    { word: "pen", hint: "A writing tool, but also slang for male parts" },
    { word: "butt", hint: "The back of the body, but can also mean someone's rear" },
    { word: "head", hint: "The top of the body, but sometimes used for oral actions" },
    { word: "nuts", hint: "Seeds, but also used to refer to testicles" },
    { word: "lick", hint: "A small taste, but also used in suggestive ways" },
    { word: "tight", hint: "Something that fits closely, but can describe someone in a suggestive way" },
    { word: "cock", hint: "A male bird, but also a slang word for male parts" },
    { word: "balls", hint: "Used in sports, but also refers to testicles" },
    { word: "wiener", hint: "A sausage, but also used for male parts" },
    { word: "rack", hint: "A place to hang things, but also a slang term for breasts" },
    { word: "junk", hint: "Things of little value, but also slang for male parts" },
    { word: "beaver", hint: "An animal, but can also be slang for female parts" },
    { word: "box", hint: "A container, but can also be used as slang for female parts" },
    { word: "shlong", hint: "A funny-sounding word, but slang for male parts" },
    { word: "hooters", hint: "Slang for breasts, also a restaurant name" },
    { word: "pecker", hint: "A small tool, but also slang for male parts" },
    { word: "bush", hint: "A plant, but can also refer to hair in private areas" },
    { word: "booty", hint: "A term for treasure, but also slang for butt" },
    { word: "bip", hint: "A small amount, but can refer to dipping something into a body part" },
    { word: "hammer", hint: "A tool, but can be used as slang for male parts" },
    { word: "wrench", hint: "A tool, but can be a crude reference to male parts" },
    { word: "hotdog", hint: "A type of food, but sometimes used as slang for male parts" },
    { word: "choke", hint: "To press on someone's throat, but also slang for something sexual" },
    { word: "headache", hint: "A pain in the head, but sometimes used in a suggestive way" },
    { word: "paddle", hint: "A tool for rowing, but can be slang for spanking" },
    { word: "crack", hint: "A break or fracture, but also refers to a body part" },
    { word: "pump", hint: "A tool for inflating, but can be slang for sexual activity" },
    { word: "rub", hint: "To massage, but can also refer to something sexual" },
    { word: "whip", hint: "A tool for striking, but can refer to something sexual in slang" },
    { word: "swing", hint: "To move back and forth, but can refer to sexual activity" },
    { word: "clinch", hint: "To hold tight, but can be used in a suggestive context" },
    { word: "peach", hint: "A fruit, but can refer to someone's rear" },
    { word: "shaft", hint: "A long, narrow part, but can also mean male genitalia" },
    { word: "tackle", hint: "To take down, but can also refer to male parts" },
    { word: "grind", hint: "To crush into small pieces, but used in a suggestive way" },
    { word: "cream", hint: "A dairy product, but also used in a sexual context" },
    { word: "plug", hint: "A device to block a hole, but also used in a suggestive way" },
    { word: "cherry", hint: "A fruit, but also slang for virginity" },
    { word: "mound", hint: "A small hill, but can be used in reference to the body" },
    { word: "tip", hint: "The end of something, but also used in sexual slang" },
    { word: "buzz", hint: "A light vibration, but sometimes used for excitement or sexual references" },
    { word: "lob", hint: "To throw something, but can be used in reference to something sexual" },
    { word: "hose", hint: "A flexible pipe, but also slang for legs or a body part" },
    { word: "muff", hint: "A hand warmer, but can be a crude slang term" },
    { word: "banger", hint: "A type of sausage, but can refer to a sexual encounter" },
    { word: "chin", hint: "The bottom part of the face, but used in some crude contexts" },
    { word: "bite", hint: "To cut with teeth, but can also refer to something sexual" },
    { word: "nail", hint: "A sharp object, but sometimes used for sexual actions" },
    { word: "bowl", hint: "A rounded dish, but can also refer to male genitalia in slang" },
    { word: "skirt", hint: "A type of clothing, but sometimes used in a sexual context" },
    { word: "shovel", hint: "A tool for digging, but used in crude references" },
    { word: "rope", hint: "A strong, thick string, but can be associated with restraint" },
    { word: "pillow", hint: "A soft cushion, but can be used in a suggestive way" },
    { word: "slip", hint: "To slide, but can refer to sexual movement" },
    { word: "drive", hint: "To operate a vehicle, but can also be used suggestively" },
    { word: "tail", hint: "The back part of an animal, but also used for a person's rear" }
];


let userScore = 0;
document.getElementById("score").innerText = `Score : ${userScore}`
displayHint();
function displayHint() {
    let index = Math.floor(Math.random() * wordHints.length)
    let answer = (wordHints[index].word).split("")
    document.getElementById("hint").innerText = `${wordHints[index].hint} (${answer.length} Letters)`
    document.getElementById("submit").removeEventListener('click', () => {
        check(answer);
    })
    document.getElementById("submit").addEventListener('click', () => {
        check(answer);
    })
}

function check(answer) {
    let input = (document.getElementById("guess").value).split("")
    if (input == "") {
        document.getElementById("input-err").style.display = "block"
    } else {
        document.getElementById("input-err").style.display = "none"
        if (input.length == answer.length) {
            let arr = []
            document.getElementById("input-err2").style.display = "none"
            input.forEach((e, i) => {
                if (e == answer[i]) {
                    arr.push(e);
                } else {
                    arr.push("_");
                }
            })
            document.getElementById("correctWord").innerText = `${arr.join(" ")}`
            if (arr.join("") == answer.join("")) {
                userScore++;
                console.log(userScore)
                document.getElementById("score").innerText = `Score : ${userScore}`
                document.getElementById("guess").value = ""
                displayHint();
            }
        } else {
            document.getElementById("input-err2").style.display = "block"
        }
    }
}

let interval = setInterval(time, 1000);
let count = 0
setTimeout(() => {
    clearInterval(interval);
    alert("Game Over !")
    document.getElementById("submit").style.display = "none"
    document.getElementById("reset").style.display = "block"
    document.getElementById("reset").addEventListener('click', () => window.location.href = "./index.html")
    document.getElementById("guess").style.display = "none"
    document.getElementById("back").style.display = "block"
    document.getElementById("back").addEventListener('click', () => window.location.href = "../index.html")
}, 60000);
function time() {
    count++;
    if (count < 10) {
        document.getElementById("time").innerText = `00:0${count}`
    } else if (count < 60) {
        document.getElementById("time").innerText = `00:${count}`
    }
} 