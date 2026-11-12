// Solver
function clearInputLinear(){
    document.querySelector("#k").value = "";
    document.querySelector("#m").value = "";

    clearOutputLinear()
}
function clearOutputLinear(){
    document.getElementById("xLinear").textContent = "";

    document.getElementById("solutionLinear1").textContent = ""
    document.getElementById("solutionLinear2").textContent = ""
    document.getElementById("solutionLinear3").textContent = ""

    document.getElementById("errorLinear").textContent = "";
}
function countLinear(){
    let k = parseFloat(document.getElementById("k").value);
    let m = parseFloat(document.getElementById("m").value);

    clearOutputLinear();

    if ( isNaN(k) || isNaN(m)){
        document.getElementById("errorLinear").textContent = "Это не число";
        return;
    }

    if ( k === 0 && m === 0){
        document.getElementById("solutionLinear1").textContent = "0x + 0 = 0"
        document.getElementById("x").textContent = `All real numbers (0 = 0 - всегда правда); x ∊ ( -∞ , ∞ )`;
    } else if (k === 0 && m !== 0){
        document.getElementById("solutionLinear1").textContent = `0x + ${m} = 0`
        document.getElementById("x").textContent = `No solution (0x + ${m} = 0 - ложь)`;
    } else {
        let x = -m / k;
        document.getElementById("solutionLinear1").textContent = `x = -${m} / ${k}`
        document.getElementById("xLinear").textContent = `x = ${x}`;
    }
}

function clearInputQuadratic(){
    document.querySelector("#a").value = "";
    document.querySelector("#b").value = "";
    document.querySelector("#c").value = "";

    clearOutputQuadratic()
}
function clearOutputQuadratic(){
    document.getElementById("dQuadratic").textContent = "";

    document.getElementById("solutionQuadratic1").textContent = "";
    document.getElementById("solutionQuadratic2").textContent = "";

    document.getElementById("x1Quadratic").textContent = "";
    document.getElementById("x2Quadratic").textContent = "";
    document.getElementById("errorQuadratic").textContent = "";
}
function countQuadratic() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // Clear old output
    clearOutputQuadratic();

    // 1. Check for invalid input
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("errorQuadratic").textContent = "Это не число";
        return;
    }

    // 2. Check a ≠ 0
    if (a === 0) {
        document.getElementById("errorQuadratic").textContent = "'a' не может быть равен 0 (не квадратичное уравнение)";
        return;
    }

    // 3. Calculate discriminant
    let dQuadratic = b * b - 4 * a * c;
    document.getElementById("dQuadratic").textContent = `D = ${b}² - 4*${a}*${c} = ${dQuadratic}`;

    // 4. Solve based on D
    if (dQuadratic < 0) {
        document.getElementById("x1Quadratic").textContent = `Нет корней (D < 0)`;
    }
    else if (dQuadratic === 0) {
        let x = -b / (2 * a);

        document.getElementById("solutionQuadratic1").textContent = `x = -${b} / (2*${a})`;

        document.getElementById("x1Quadratic").textContent = `x = ${x} (Двойной корень)`;
    }
    else if (dQuadratic > 0){
        let x1Quadratic = (-b + Math.sqrt(dQuadratic)) / (2 * a);
        let x2Quadratic = (-b - Math.sqrt(dQuadratic)) / (2 * a);

        document.getElementById("solutionQuadratic1").textContent = `x₁ = (-${b} + √${dQuadratic}) / (2*${a})`;
        document.getElementById("solutionQuadratic2").textContent = `x₂ = (-${b} - √${dQuadratic}) / (2*${a})`;

        document.getElementById("x1Quadratic").textContent = `x₁ = ${x1Quadratic}`;
        document.getElementById("x2Quadratic").textContent = `x₂ = ${x2Quadratic}`;
    }
}

// Practice

document.addEventListener("DOMContentLoaded", () => {
  newTaskLinear();
});
document.getElementById("taskInputLinear").addEventListener("keydown", function (enterTaskLinear) {
    if (enterTaskLinear.key === "Enter") {
        submitTaskLinear();
    }
});
function clearTaskLinear() {
    document.getElementById("taskLinear").textContent = "";
}
let xTaskLinear;
function newTaskLinear() {
    clearTaskLinear()
    document.getElementById("taskInputLinear").value = ""
    input = document.querySelector(".taskInput #taskInputLinear");
    input.style.borderColor = "black";

    // -10 to 10
    // Math.random() -> 0 to 1
    let kTaskLinear;
    do {
        kTaskLinear = Math.floor(Math.random() * 21) - 10;
    } while (kTaskLinear === 0);

    let mTaskLinear = Math.floor(Math.random() * 21 - 10);



    document.getElementById("taskLinear").textContent = `${kTaskLinear}x + ${mTaskLinear} = 0` ;

    xTaskLinear = -mTaskLinear / kTaskLinear;
    xTaskLinear = Number(xTaskLinear.toFixed(2));

    document.getElementById("taskLinear").textContent += " Ответ:  "  + xTaskLinear
}
function submitTaskLinear() {
    input = document.querySelector(".taskInput #taskInputLinear");
    userinput = document.getElementById("taskInputLinear").value;
    userinput = parseFloat(userinput)

    if (userinput !== xTaskLinear) {
    input.style.borderColor = "red";
    } 
    else {
    input.style.borderColor = "green";
    newTaskLinear()
    }
}

document.addEventListener("DOMContentLoaded", () => {
  newTaskQuadratic();
});
document.getElementById("taskInputQuadratic").addEventListener("keydown", function (enterTaskQuadratic) {
    if (enterTaskQuadratic.key === "Enter") {
        submitTaskQuadratic();
    }
});
function clearTaskQuadratic() {
    document.getElementById("taskQuadratic1").textContent = "";
    document.getElementById("taskQuadratic2").textContent = "";
}

let aTaskQuadratic;
let bTaskQuadratic;
let cTaskQuadratic;
let sqrtD;
function abcTaskQuadratic(){
    // a, b, c
    // -10 to 10, Math.random() -> 0 to 1
    aTaskQuadratic = Math.floor(Math.random() * 21 - 10);
    if (aTaskQuadratic === 0) {
        do {
            aTaskQuadratic = Math.floor(Math.random() * 21 - 10);
        } while (aTaskQuadratic !== 0)
    }
    bTaskQuadratic = Math.floor(Math.random() * 21 - 10);
    cTaskQuadratic = Math.floor(Math.random() * 21 - 10);


}

let x1TaskQuadratic;
let x2TaskQuadratic;
let numTaskQuadratic;

function newTaskQuadratic() {
    clearTaskQuadratic();

    const taskInput = document.getElementById("taskInputQuadratic");
    taskInput.value = "";
    taskInput.style.borderColor = "black";

    let a, b, c, d, sqrtD;

    // Повторяем генерацию, пока не получим подходящее уравнение.
    do {
        a = Math.floor(Math.random() * 21) - 10;
        b = Math.floor(Math.random() * 21) - 10;
        c = Math.floor(Math.random() * 21) - 10;

        d = b * b - 4 * a * c;
        sqrtD = Math.sqrt(d);
    } while (a === 0 || d < 0 || !Number.isInteger(sqrtD));

    // list of roots = [ x1, x2 ]
    const roots = [
        Number(((-b + sqrtD) / (2 * a)).toFixed(2)),
        Number(((-b - sqrtD) / (2 * a)).toFixed(2))
    ].sort((x, y) => x - y);

    // 0 — меньший корень, 1 — больший.
    numTaskQuadratic = Math.floor(Math.random() * 2);
    x1TaskQuadratic = roots[0];
    x2TaskQuadratic = roots[1];

    document.getElementById("taskQuadratic1").textContent =
        numTaskQuadratic === 0
            ? "Найти меньший корень. Ответ сократить до сотых.   " + x1TaskQuadratic
            : "Найти больший корень. Ответ сократить до сотых.   " + x2TaskQuadratic;
    document.getElementById("taskQuadratic2").textContent =
        `${a}x² + ${b}x + ${c} = 0`;
}

function submitTaskQuadratic() {
    const input = document.getElementById("taskInputQuadratic");
    const userinput = parseFloat(input.value);

    const correctAnswer =
        numTaskQuadratic === 0 
            ? x1TaskQuadratic 
            : x2TaskQuadratic;

    if (!Number.isNaN(userinput) && Math.abs(userinput - correctAnswer) < 0.001) {
        input.style.borderColor = "green";
        newTaskQuadratic();
    } else {
        input.style.borderColor = "red";
    }
}
