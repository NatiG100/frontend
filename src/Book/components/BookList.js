import React from 'react';
import Book from './Book';
import './BookList.css';

const BookList = props =>{
    return (
        <div>
            {
            props.books.map(book=>(
                <Book 
                    title={book.title} 
                    description={book.description} 
                    linkTxt={book.linkTxt}
                />
            ))}
        </div>
    );
};
export default BookList;