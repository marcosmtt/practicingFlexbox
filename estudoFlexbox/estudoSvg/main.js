const btns = document.querySelectorAll('.buttons button');
const cat = document.getElementsByClassName('cat')[0];

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
    alert("test this shit");
}
