const cards = document.querySelector(`.cards`);
const newBooks = document.querySelector(`.newBooks`);
const addBook = document.createElement(`button`);
const dialog = document.querySelector(`#bookDialog`);
const addBtn = document.querySelector(`.add`);
addBook.textContent = `NEW BOOK`;
newBooks.appendChild(addBook);
newBooks.addEventListener(`click`, displayBookForm);
addBtn.addEventListener(`click`, closeForm);

const myLibrary = [`Ursul păcălit de munte`, `Crapă din trei mieji`, `Cu fița roșie`];
myLibrary.forEach(element => {
    const card = document.createElement(`div`);
    const title = document.createElement(`p`);
    card.setAttribute(`class`, `card`);
    cards.appendChild(card);
    card.appendChild(title);
    title.textContent = element;

});

function closeForm() {
    const author = document.querySelector(`#author`).value;
    const title = document.querySelector(`#title`).value;
    const pages = document.querySelector(`#pages`).value;
    const read = document.querySelector('input[name="read"]:checked').value;
    dialog.close();
    const book = new Book(author, title, pages, read);
    addBookToLibrary(book);
}

function Book(author, title, pages, read) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function displayBookForm() {
    dialog.showModal();
}

function addBookToLibrary(object) {
    // do stuff here
    
    const card = document.createElement(`div`);
    const title = document.createElement(`p`);
    const author = document.createElement(`p`);
    const pages = document.createElement(`p`);
    const read = document.createElement(`p`);
    const readBtn = document.createElement(`button`);
    const removeBtn = document.createElement(`button`);
    card.setAttribute(`class`, `card`);
    cards.appendChild(card);
    card.appendChild(author);
    card.appendChild(title);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(readBtn);
    card.appendChild(removeBtn);
    author.textContent = `Author: ${object.author}`;
    title.textContent = `Title: ${object.title}`;
    pages.textContent = `Pages: ${object.pages}`;
    read.textContent = `Read: ${object.read}`;
    readBtn.textContent = `Switch`
    readBtn.addEventListener(`click`, function() {
        const readValue = [`Read: ✔️`, `Read: ❌`]
        if (read.textContent === readValue[0]) {
            read.textContent = readValue[1];
        } else {
            read.textContent = readValue[0];
        }
    });
    removeBtn.textContent = `Remove`
    removeBtn.addEventListener(`click`, function() {
        cards.removeChild(card);
    });
}