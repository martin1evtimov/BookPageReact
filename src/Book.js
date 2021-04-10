import React from 'react';

const Book = (props) => {
    return (
        <article className="book">
            <img src={props.img} alt=""/>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
        </article>
    )
}

export default Book