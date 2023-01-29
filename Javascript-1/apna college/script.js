let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    // alert("Namaste World!");
    let name= prompt('Enter Name of Student');
    namasteBtn.textContent='Roll No. 1: ' + name;
}