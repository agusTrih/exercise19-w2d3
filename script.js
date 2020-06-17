/* ------------------------------------------------------------------------------------- */
/* ---------------------------------------TO DO APP------------------------------------- */

/* pertama ------ saya mendeklarasikan variable yang mengambil element "div" yang nantinya akan saya 
isi dengan dua div dengan div pertama yg berisi tulisan yang telah kita input dan div satunya lagi 
berisikan tombol button edit dan delete*/
let inputList = document.querySelector(".output-todo");
// kedua ----- saya mendeklarasikan variable list dengan aray kosong
let list = [];
/* ketiga ----- saya mendeklariskan variable yang mengambil element button dengan id button-input
-> fungsi nya nanti ketika saya klik button ini maka dia akan menghasilkan => value inputan dan 
juga tombol button edit dan delete */
let buttonInput = document.getElementById("button-input");
// ------ //
/* keempat ----- buat event didalam buttonInput yang ketika kita click dia akan mengambil value dari 
inputan kita lalu di push kedalam array kosong yang dibuat di awal setelah itu kita panggil
fungsi yang membuat 2 div dengan div pertama membuat wadah hasil inputan kita yang sudah di push
ke array kosong, dan div kedua berisi tombol button edit dan delete yg bersifat tetap  */
buttonInput.addEventListener("click", () => {
    const inputTodo = document.getElementById("input-todo").value;
    list.push(inputTodo);
    resultInput();
});
// KELIMA ----- Membuat fungsi yang tadi di panggiL di dalam event button
resultInput = () => {
    inputList.innerHTML = null;

    list.forEach((item, index) => {
        /* membuat div sebagai wadah  yang di isi dengan element p yg memiliki value dari inputan yang
        sudah di push ke array kosong */
        let inputValue = document.createTextNode(item);
        let text = document.createElement("p");
        text.appendChild(inputValue);
        let divTodo = document.createElement("div");
        divTodo.setAttribute("class", "todo");
        divTodo.appendChild(text);

        /* membuat div sebagai wadah  yang di isi dengan dua eement button dengan value edit dan delete*/
        let divButton = document.createElement("div");
        divButton.setAttribute("class", "button");
        let editButton = document.createElement("button");
        let textEdit = document.createTextNode("Edit");
        editButton.appendChild(textEdit);
        let deleteButton = document.createElement("button");
        let textDelete = document.createTextNode("Delete");
        deleteButton.appendChild(textDelete);
        divButton.appendChild(editButton);
        divButton.appendChild(deleteButton);

        /* membuat div sebagai wadah  dari kedua div yang pertama kita buat. note: memudahkan proses styleing */
        let divList = document.createElement("div");
        divList.setAttribute("class", "list");
        divList.appendChild(divTodo);
        divList.appendChild(divButton);
        // muat element yg sudah kita buat kedalam inputList yang sudah kita deklarasikan pertama
        inputList.appendChild(divList);

        // memanggil event edit
        editButton.addEventListener("click", () => {
            editItem(index);
        });
        // memanggil event delete
        deleteButton.addEventListener("click", () => {
            deleteItem(index);
        });
    });
};

editItem = (index) => {
    newItem = prompt("add edit to new list:");
    list.splice(index, 1, newItem);

    resultInput();
};

deleteItem = (index) => {
    list.splice(index, 1);

    resultInput();
};
