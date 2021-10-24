class BookList {
  constructor(books) {
    this.books = books;
  }

  set books(booksArr) {
    this._books = booksArr;
  }

  get books() {
    return this._books;
  }

  get readBooks() {
    let read = 0;
    this.books.forEach((book) => {
      if (book.read) read += 1;
    });
    return read;
  }

  get undreadBooks() {
    return this.books.length - this.readBooks;
  }

  get currentBook() {
    let curBook = 'No books being read';
    this.books.forEach((book) => {
      if (!book.read && typeof curBook === 'string') curBook = book;
    });
    return curBook;
  }

  get nextBook() {
    const indexOfCurBook = this.books.indexOf(this.currentBook);
    if (indexOfCurBook + 1 === this.books.length) return this.books[0];
    return this.books[indexOfCurBook + 1];
  }

  get prevBook() {
    const indexOfCurBook = this.books.indexOf(this.currentBook);
    if (indexOfCurBook === 0) return this.books[this.books.length - 1];
    return this.books[indexOfCurBook - 1];
  }

  addBook(book) {
    if (this.books) this.books.push(book);
    else this.books = [book];
  }

  finishCurrentBook() {
    const currentBook = this.currentBook;
    if (typeof currentBook === 'string') {
      console.log(currentBook);
    } else {
      currentBook.read = true;
      currentBook.date = new Date(Date.now());
    }
  }
}

class Book {
  constructor({ title, genre, author, read, date }) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.date = date;
  }

  set date(dateObj) {
    if (!(typeof dateObj === 'object')) {
      console.log('Date should be an object');
      this._date = undefined;
    } else {
      this._date = dateObj;
    }
  }

  get date() {
    return this._date;
  }
}

const book1 = new Book({
  title: 'Harry Potter',
  genre: 'Sci-Fi',
  author: 'I forgot her name',
  read: false,
});

const book2 = new Book({
  title: 'Harry Potter 2',
  genre: 'Sci-Fi',
  author: 'I forgot her name again',
  read: false,
});

const book3 = new Book({
  title: '7even',
  genre: 'Horror',
  author: 'Someone',
  read: false,
});

const books = [book1, book2];
const bookList = new BookList(books);
bookList.addBook(book3);

module.exports = bookList;
