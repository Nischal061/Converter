function converter() {
    const select = document.getElementById('convert');
    const dropdown = select.value;
    const content = document.getElementById('content');

    if (select.value === "temp") {
        content.innerHTML = `
        <span>Input Fahrenheit</span>
    <input type="number" placeholder="Fahrenheit" id="fah" oninput="fah()">
    <span>Input Celsius</span>
    <input type="number" placeholder="Celsius" id="cel" oninput="cel()">
        `
    } else if (select.value === "weight") {
        content.innerHTML = `   <span>Input Kilogram</span>
    <input type="number" id="kilo" placeholder="K.G" oninput="kg()  ">
    <span>Input Pound </span>
        <input type="number" id="pound" placeholder="lbs" oninput="lbs()">`

    } else if (select.value === "length") {
        content.innerHTML = `<span>Kilometre</span>
    <input type="number" id="k&m" oninput="km()" placeholder="KM">
    <span>Mile</span>
    <input type="number" id="mile" oninput="mile()" placeholder="Mile">`
    } else content.innerHTML = ("Please select a method");
}

function fah() {
    let Fahrenheit = document.getElementById('fah');
    let Celsius = document.getElementById('cel');
    fahinput = parseFloat(Fahrenheit.value);
    if (fahinput === 0) {
        Celsius.value = 0;
    } else if (isNaN(fahinput)) {
        Celsius.value = null;
    } else if (fahinput > 0) {
        Celsius.value = ((fahinput - 32) * 5 / 9).toFixed(2);
    }
    const clear = () => {
        setTimeout(() => {
            Fahrenheit.value = null;
            Celsius.value = null;
        }, 100)
    }
    Fahrenheit.addEventListener('focus', clear);
    Celsius.addEventListener('focus', clear);
}

function cel() {
    let Fahrenheit = document.getElementById(  'fah');
    let Celsius = document.getElementById(  'cel');
    celinput = parseFloat(Celsius.value);
    if (celinput === 0) {
        Fahrenheit.value = 0;
    } else if (isNaN(celinput)) {
        Fahrenheit.value = null;
    } else if (celinput > 0) {
        Fahrenheit.value = ((celinput * 9 / 5) + 32).toFixed(2);
    }
    const clear = () => {
        setTimeout(() => {
            Fahrenheit.value = null;
            Celsius.value = null;
        }, 100)
    }
    Fahrenheit.addEventListener('focus', clear);
    Celsius.addEventListener('focus', clear);
}

function kg() {
    let kilogram = document.getElementById('kilo');
    let pound = document.getElementById('pound');
    kginput = parseFloat(kilogram.value);
    lbsinput = parseFloat(pound.value);

    if (kginput > 0) {
        pound.value = (kginput * 2.20462).toFixed(5)
    } else if (kginput === 0) {
        pound.value = 0;
    }
    const clear = () => {
        setTimeout(() => {
            kilogram.value = null;
            pound.value = null;
        }, 100)
    }
    kilogram.addEventListener('focus', clear);
    pound.addEventListener('focus', clear);
}

function lbs() {
    let kilogram = document.getElementById('kilo');
    let pound = document.getElementById('pound');
    kginput = parseFloat(kilogram.value);
    lbsinput = parseFloat(pound.value);
    if (lbsinput > 0) {
        kilogram.value = (lbsinput / 2.20462).toFixed(5)
    }
    const clear = () => {
        setTimeout(() => {
            kilogram.value = null;
            pound.value = null;
        }, 100)
    }
    kilogram.addEventListener('focus', clear);
    pound.addEventListener('focus', clear);

}

function km() {
    let kilometre = document.getElementById('k&m');
    let Miles = document.getElementById('mile');
    mileinput = parseFloat(Miles.value);
    kilometreinput = parseFloat(kilometre.value);
    if (kilometreinput > 0) {
        Miles.value = (kilometreinput * 0.621371).toFixed(6);

    } else if (kilometreinput === 0) {
        Miles.value = 0;
    }
    const clear = () => {
        setTimeout(() => {
            kilometre.value = null;
            Miles.value = null;
        }, 100)
    }
    kilometre.addEventListener('focus', clear);
    Miles.addEventListener('focus', clear);
}

function mile() {
    let kilometre = document.getElementById('k&m');
    let Miles = document.getElementById('mile');
    mileinput = parseFloat(Miles.value);
    kilometreinput = parseFloat(kilometre.value);
    if (mileinput > 0) {
        kilometre.value = (mileinput / 0.621371).toFixed(5);
    } else if (mileinput === 0) {
        kilometre.value = 0;
    }
    const clear = () => {
        setTimeout(() => {
            kilometre.value = null;
            Miles.value = null;
        }, 100)
    }
    kilometre.addEventListener('focus', clear);
    Miles.addEventListener('focus', clear);
}

