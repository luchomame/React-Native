import React from 'react';
import style from './recipe.module.css'; // export css as module

// now for ME. Make it so that ingredients have a fixed width.

const Recipe = (props) =>{
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <p>{props.calories}</p>
            <img className={style.image} src={props.image} alt="placeholder"/>
            <br/>
            <a href={props.url}> Recipe </a>
            <ol className={style.list}>
                {props.ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
                ))}
            </ol>

        </div>
    );
}

export default Recipe;
