// Array
let books = JSON.parse(localStorage.getItem("books")) || [];

// Button
let addBtn = document.getElementById("addBtn");

// Button Event
addBtn.addEventListener("click", addBook);

// Display old books
displayBooks();

// Add Book Function
function addBook() {

    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("authorName").value;
    let category = document.getElementById("category").value;
    let bookId = document.getElementById("bookId").value;
    let year = document.getElementById("year").value;
    let status = document.getElementById("status").value;

    // Validation
    if (
        title === "" ||
        author === "" ||
        category === "" ||
        bookId === "" ||
        year === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    // Object
    let book = {
        title: title,
        author: author,
        category: category,
        bookId: bookId,
        year: year,
        status: status
    };

    // Save in Array
    books.push(book);

    // Save in Local Storage
    localStorage.setItem("books", JSON.stringify(books));

    // Refresh Table
    displayBooks();

    // Clear Inputs
    document.getElementById("bookTitle").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("bookId").value = "";
    document.getElementById("year").value = "";
    document.getElementById("status").value = "Available";
} 

// Display Books
function displayBooks() {

    let bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    for (let i = 0; i < books.length; i++) {

        bookList.innerHTML += `
        <tr>
            <td>${books[i].title}</td>
            <td>${books[i].author}</td>
            <td>${books[i].category}</td>
            <td>${books[i].bookId}</td>
            <td>${books[i].year}</td>
            <td>${books[i].status}</td>

            <td>
                <button onclick="editBook(${i})">Edit</button>
                <button onclick="deleteBook(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
}


// Edit Book
function editBook(index) {

    document.getElementById("bookTitle").value = books[index].title;
    document.getElementById("authorName").value = books[index].author;
    document.getElementById("category").value = books[index].category;
    document.getElementById("bookId").value = books[index].bookId;
    document.getElementById("year").value = books[index].year;
    document.getElementById("status").value = books[index].status;

    books.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}
// Delete Book
function deleteBook(index) {

    let confirmDelete = confirm("Are you sure you want to delete this book?");

    if (confirmDelete) {

        books.splice(index, 1);

        localStorage.setItem("books", JSON.stringify(books));

        displayBooks();

    }
}