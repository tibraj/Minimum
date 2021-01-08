document.getElementById('minimum').addEventListener('click', minimumTest);

function minimumTest(a, b) {
    if(a < b) return a;
    else return b;
}

console.log(minimumTest(23, 30));