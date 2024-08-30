function Book(title, author) {
    this.title = title;
    this.author = author;
}
let Library = {
    books: [],
    addBook: function (book) {
        this.books.push(book);
        document.write('Added: ' + book.title + '<br/>');
    }, searchBooks: function (searchtitle) {
        let found = false;
        for (let book of this.books) {
            if (book.title.toLowerCase().includes(searchtitle.toLowerCase())||book.author.toLowerCase().includes(searchtitle.toLowerCase())) {
                document.write("Found:" + book.title +  ' by ' + book.author + '<br/>');
                found = true;
            } 
        }
        if(!found){
            document.write('Book with query ' + searchtitle + ' is not found<br/>');
        }
    }
}

function displayBooks() {
    Library.books.forEach((book, index) => {
        document.write(index+1 + '.' + book.title + ' by ' + book.author +'<br/>');
    });

}

// Adding books to the library
Library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
Library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
Library.addBook(new Book("1984", "George Orwell"));
Library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
Library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));

// Demonstrating functionality
document.write("<br/>Searching for the book with author 'Harper Lee':<br/>");
Library.searchBooks("Harper Lee");


document.write(
    "<br/>Searching for the book with title 'The Great Gastby':<br/>"
);
Library.searchBooks("The Great Gatsby");


document.write(
    "<br/>Searching for the book with title 'Design Thinking':<br/>"
);
Library.searchBooks("Design Thinking");


books = Library.books;
document.write("<br/>These are the books in the library:<br/>");
displayBooks();
