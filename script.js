const books = JSON.parse(localStorage.getItem('books')) || [];

function addBooks() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    const status = document.getElementById('status').value;
    const book = { title, author, year, genre, status };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books))
    renderBooks();
}

document.getElementById('add').addEventListener('click', function () {
    addBooks();
})

function deleteBook(index) {
    books.splice(index, 1)
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
}

function deleteAllBook() {
    const books = [];
}

document.getElementById('delete').addEventListener('click', function () {
    deleteAllBook();
})


function renderBooks() {
    const bookList = document.getElementById('bookList');
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML =
            `<div>
                ${book.title} - ${book.author} - ${book.genre} - ${book.year} - ${book.status}
            </div>
            <div>
                <button onclick="editBook(${index})">Редактировать</button>
                <button onclick="deleteBook(${index})">Удалить</button>
            </div>`
        bookList.appendChild(bookItem)
    });
    document.getElementById('bookCount').innerText = `Количество  книг: ${books.length}`;
}


function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('year').value = book.year;
    document.getElementById('genre').value = book.genre;
    document.getElementById('status').value = book.status;
}


document.getElementById('refresh').addEventListener('click', function () {
    location.reload()
})

renderBooks();
