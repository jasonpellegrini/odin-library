const mainContainer = document.getElementById('mainContainer');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const naruto = new Book('naruto', 'kishimoto', '112', 'read');
const demonSlayer = new Book('demon slayer', 'jetski', '78', 'not read');
const blackClover = new Book('black clover', 'idek', '141', 'read');

myLibrary.push(naruto);
myLibrary.push(demonSlayer);
myLibrary.push(blackClover);

//creating cards

function createCard(book) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add('cards');
    cardContainer.innerHTML=`
    <div class="card-info">
        <h3>${book.title}<h3>
        <span>${book.author}</span>
        <span>${book.pages} pages</span>
    </div>
    <div class="card-status">
    `;
    mainContainer.appendChild(cardContainer);
}

function displayCards() {
    myLibrary.forEach(createCard);
}

function takeValue() {
    event.preventDefault()
    var bookTitle = document.getElementById('bookTitle').value;
    var bookAuthor = document.getElementById('bookAuthor').value;
    var bookPages = document.getElementById('bookPages').value;
    var bookRead = document.getElementById('bookRead').value;

    let bookPlaceholder = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(bookPlaceholder);
    createCard(bookPlaceholder);
}


//getting user input




//Pop up code
const openPopupButtons = document.getElementById('addBookBtn');
const closePopupButtons = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');


function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

openPopupButtons.addEventListener('click', () => {
        openPopup(popup)
    })

closePopupButtons.addEventListener('click', () => {
        closePopup(popup)
    })

//end of popup button code

displayCards();


