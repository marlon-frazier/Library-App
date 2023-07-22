const library = []
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const isRead = document.getElementById('isRead')
const addBook = document.querySelector('.add-book')
const modal = document.querySelector('.modal')
const submitBtn = document.querySelector('.submitBtn')
const bookContainer = document.querySelector('.book-container')
const removeBook = document.querySelector('.remove-book')

addBook.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

window.addEventListener('click', (event) => {
    if (event.target === modal){
        modal.classList.add('hidden')
    }
})

submitBtn.addEventListener('click', () => {
    addBookToLibrary()
    title.value = ''
    author.value = ''
    pages.value = ''
    isRead.checked = false
    modal.classList.add('hidden')
    renderBooks()
})


function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(){
    let book = new Book(title.value, author.value, pages.value, isRead.checked)
    library.push(book)
    console.log(library)
}

function renderBooks(){

    bookContainer.innerHTML = ''

    library.forEach((book) => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card')

        const bookTitle = document.createElement('p')
        bookTitle.textContent = `Title:  ${book.title}`

        const bookAuthor = document.createElement('p')
        bookAuthor.textContent = `Author:  ${book.author}`

        const bookPages = document.createElement('p')
        bookPages.textContent = `Pages:  ${book.pages}`

        const bookIsRead = document.createElement('p')
        bookIsRead.textContent = `Have you read it?  ${book.isRead ? 'Yes' : 'No'}`

        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove Book'
        removeBtn.classList.add = 'remove-book'

        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookIsRead)
        bookCard.appendChild(removeBtn)

        bookContainer.appendChild(bookCard)
    })
}
