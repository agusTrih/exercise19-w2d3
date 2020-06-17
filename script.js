// deklarasi
let button = document.getElementById("button");
let task = document.getElementById("task");
let list = document.getElementById("list");
// ketika di klik akan tersambung dengan fungsi create item
button.addEventListener("click", (e) => {
    createItem(task.value);
});

// fungsi create item dengan parameter nilai dari hasil inputan kita pada id task
// menampilkan nilai input menggunakan insertAdjacentHTML YG terhubung dengan result
function createItem(value) {
    let result = `<li>${value}  <button>Edit</button><button>Delete</button></li>`;
    list.insertAdjacentHTML("beforeend", result);
    task.value = "";
}
