// Angka
function satu() {
    let input = document.getElementById('input');
    let satu = 1;
    input.value += satu;
}
function dua() {
    let input = document.getElementById('input');
    let dua = 2;
    input.value += dua;
}
function tiga() {
    let input = document.getElementById('input');
    let tiga = 3;
    input.value += tiga;
}
function empat() {
    let input = document.getElementById('input');
    let empat = 4;
    input.value += empat;
}
function lima() {
    let input = document.getElementById('input');
    let lima = 5;
    input.value += lima;
}
function enam() {
    let input = document.getElementById('input');
    let enam = 6;
    input.value += enam;
}
function tujuh() {
    let input = document.getElementById('input');
    let tujuh = 7;
    input.value += tujuh;
}
function delapan() {
    let input = document.getElementById('input');
    let delapan = 8;
    input.value += delapan;
}
function sembilan() {
    let input = document.getElementById('input');
    let sembilan = 9;
    input.value += sembilan;
}
function nol() {
    let input = document.getElementById('input');
    let nol = 0;
    input.value += nol;
}


// delete
function reset() {
    let input = document.getElementById('input');
    let kosong = "";
    input.value = kosong;
    document.getElementById('meme').style.display = "none";
}
function deleted() {
    let input = document.getElementById('input');
    let hello = input.value;
    let subs = hello.substring(0, hello.length -1);
    input.value = subs;
}

//Action
function tambah() {
    let input = document.getElementById('input');
    let plus = "+";
    input.value += plus;
}
function kurang() {
    let input = document.getElementById('input');
    let minus = "-";
    input.value += minus;
}
function kali() {
    let input = document.getElementById('input');
    let kali = "*";
    input.value += kali;
}
function bagi() {
    let input = document.getElementById('input');
    let bagi = "/";
    input.value += bagi;
}
function koma() {
    let input = document.getElementById('input');
    let koma = ".";
    input.value += koma;
}


// Result
function Result() {
    let input = document.getElementById('input');
    input.value = eval(input.value);
    if (input.value == 80) {
        let meme = document.getElementById('meme');
        meme.style.display = "block";
    }
}