import ReactDom from 'react-dom';
import './index.css';
import { books } from './books.js';
import { Book } from './Book.js';


const newBooks = books.map((book) => {
  return (
    <Book
      key={book.id}
      {...book}
    />
  );
});

function BookList() {
  return (<section className="bookList">
    {newBooks}
  </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));