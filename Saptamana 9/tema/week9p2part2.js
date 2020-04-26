
// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.



const books = [
    {
        title: 'The Power of Habit',
        img: 'https://images-na.ssl-images-amazon.com/images/I/517FwF49v%2BL._SX322_BO1,204,203,200_.jpg',
        author: 'Charles Duhigg',
        read: true
    },
    {
        title: 'Mindset: The New Psychology of Success',
        img: 'https://images-na.ssl-images-amazon.com/images/I/413tqlJBxqL._SX317_BO1,204,203,200_.jpg',
        author: 'Carol S. Dweck',
        read: false
    }];


for (i = 0; i < books.length; i++) {
    const bookParagraph = document.createElement('p');
    const bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookParagraph.appendChild(bookDescription);
    document.body.appendChild(bookParagraph);

}


const bookList = document.createElement('ul');
for (let i = 0; i < books.length; i++) {

    const bookLi = document.createElement('li');

    const bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookLi.appendChild(bookDescription);
    if (books[i].read) {
        bookLi.style.color = 'red';
    }
    bookList.appendChild(bookLi);
    const bookCover = document.createElement('img');
    bookCover.src = books[i].img;
    bookLi.appendChild(bookCover);
    bookCover.style.width ='100px';
}

document.body.appendChild(bookList);