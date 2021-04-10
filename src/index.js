import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {data} from './books';
import Book from './Book';

function Booklist() {
    return (
        <section className="booklist">
            {data.map((book) => {
                return <Book key={book.id} {...book}/>;
            })}
        </section>
    );
}

ReactDOM.render(<Booklist />, document.getElementById('root'));