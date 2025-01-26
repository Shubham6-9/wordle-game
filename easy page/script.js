const wordHints = [
    { word: "happy", hint: "Feeling good and cheerful" },
    { word: "sad", hint: "Feeling down or upset" },
    { word: "quick", hint: "Fast or speedy" },
    { word: "slow", hint: "Not fast" },
    { word: "big", hint: "Large in size" },
    { word: "small", hint: "Not large" },
    { word: "hot", hint: "Having a high temperature" },
    { word: "cold", hint: "Having a low temperature" },
    { word: "tall", hint: "Having height" },
    { word: "short", hint: "Not tall" },
    { word: "bright", hint: "Giving off light" },
    { word: "weak", hint: "Not strong" },
    { word: "hard", hint: "Not soft" },
    { word: "soft", hint: "Not hard" },
    { word: "dirty", hint: "Covered with dirt" },
    { word: "fun", hint: "Enjoyable or amusing" },
    { word: "boring", hint: "Not interesting" },
    { word: "rich", hint: "Having a lot of money" },
    { word: "poor", hint: "Lacking money" },
    { word: "good", hint: "Of high quality" },
    { word: "bad", hint: "Of low quality" },
    { word: "old", hint: "Not new" },
    { word: "new", hint: "Recently made" },
    { word: "full", hint: "Containing a lot" },
    { word: "empty", hint: "Containing nothing" },
    { word: "quiet", hint: "Not loud" },
    { word: "loud", hint: "Making a lot of noise" },
    { word: "love", hint: "A strong feeling of affection" },
    { word: "hate", hint: "Strong dislike" },
    { word: "neat", hint: "Tidy and clean" },
    { word: "messy", hint: "Not tidy" },
    { word: "friendly", hint: "Kind and pleasant" },
    { word: "mean", hint: "Unkind" },
    { word: "brave", hint: "Not afraid" },
    { word: "scared", hint: "Afraid or fearful" },
    { word: "lazy", hint: "Not willing to work" },
    { word: "funny", hint: "Making you laugh" },
    { word: "serious", hint: "Not joking" },
    { word: "thin", hint: "Not fat" },
    { word: "fat", hint: "Having more body fat" },
    { word: "wet", hint: "Covered with liquid" },
    { word: "dry", hint: "Not wet" },
    { word: "sweet", hint: "Tasting sugary" },
    { word: "sour", hint: "Tasting sharp or acidic" },
    { word: "bitter", hint: "Having a harsh taste" },
    { word: "salty", hint: "Tasting like salt" },
    { word: "young", hint: "Not old" },
    { word: "safe", hint: "Protected from harm" },
    { word: "noisy", hint: "Loud or disruptive" },
    { word: "wide", hint: "Having a large width" },
    { word: "narrow", hint: "Limited in width" },
    { word: "round", hint: "Having a circular shape" },
    { word: "square", hint: "Having four equal sides" },
    { word: "sharp", hint: "Having a fine edge" },
    { word: "blunt", hint: "Not sharp" },
    { word: "cloudy", hint: "Covered with clouds" },
    { word: "rainy", hint: "Characterized by rain" },
    { word: "snowy", hint: "Characterized by snow" },
    { word: "sunny", hint: "Full of sunlight" },
    { word: "windy", hint: "Characterized by wind" },
    { word: "icy", hint: "Covered in ice" },
    { word: "calm", hint: "Peaceful and relaxed" },
    { word: "chaotic", hint: "Disorderly and unpredictable" },
    { word: "generous", hint: "Willing to give" },
    { word: "loyal", hint: "Faithful and supportive" },
    { word: "optimistic", hint: "Hopeful for the future" },
    { word: "peaceful", hint: "Free from disturbance" },
    { word: "loose", hint: "Not tight" },
    { word: "tight", hint: "Firm and secure" },
    { word: "healthy", hint: "In good physical condition" },
    { word: "unhealthy", hint: "Not in good physical condition" },
    { word: "modern", hint: "Relating to the present or recent times" },
    { word: "ancient", hint: "Very old, from a long time ago" },
    { word: "pond", hint: "A small body of water" },
    { word: "leaf", hint: "A green part of a plant" },
    { word: "book", hint: "A collection of written or printed pages" },
    { word: "chair", hint: "A piece of furniture for sitting" },
    { word: "desk", hint: "A piece of furniture for writing or working" },
    { word: "shoe", hint: "A covering for the foot" },
    { word: "sock", hint: "A piece of clothing worn on the foot" },
    { word: "moon", hint: "The Earth's natural satellite" },
    { word: "tree", hint: "A tall plant with a trunk and leaves" },
    { word: "beach", hint: "A sandy area by the sea" },
    { word: "stone", hint: "A hard, solid nonmetallic mineral matter" },
    { word: "rope", hint: "A strong, thick string" },
    { word: "flag", hint: "A piece of cloth with a design, usually a symbol" },
    { word: "ice", hint: "Frozen water" },
    { word: "salt", hint: "A white crystalline substance used for seasoning" },
    { word: "fire", hint: "A process of combustion that produces light and heat" },
    { word: "sand", hint: "Small particles of rock, often found on beaches" },
    { word: "mountain", hint: "A large raised area of land" },
    { word: "valley", hint: "An area of land between mountains" },
    { word: "hill", hint: "A small raised area of land" },
    { word: "cloud", hint: "A mass of water vapor in the sky" },
    { word: "snow", hint: "Frozen water crystals that fall from the sky" },
    { word: "river", hint: "A large natural stream of water" },
    { word: "ocean", hint: "A vast body of salt water" },
    { word: "village", hint: "A small community of people" },
    { word: "city", hint: "A large town" },
    { word: "garden", hint: "A piece of ground where plants are grown" },
    { word: "bridge", hint: "A structure that spans and provides passage over a river or road" },
    { word: "bike", hint: "A two-wheeled vehicle powered by pedaling" },
    { word: "car", hint: "A road vehicle with four wheels" },
    { word: "train", hint: "A series of connected vehicles traveling on rails" },
    { word: "plane", hint: "An aircraft that flies in the sky" },
    { word: "bus", hint: "A large motor vehicle used for transporting passengers" },
    { word: "truck", hint: "A large motor vehicle used for transporting goods" }
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
    document.getElementById("back").addEventListener('click', () => window.location.href = "../level page/index.html")
}, 121000);
function time() {
    count++;
    if (count < 10) {
        document.getElementById("time").innerText = `00:0${count}`
    } else if (count < 60) {
        document.getElementById("time").innerText = `00:${count}`
    } else if (count <= 120) {
        if ((count - 60) < 10) {
            document.getElementById("time").innerText = `01:0${count - 60}`
        } else {
            document.getElementById("time").innerText = `01:${count - 60}`
        }
    }
} 