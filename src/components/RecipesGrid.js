import React from 'react';
import Recipe from './Recipe';
import Loading from './Loading';
import { v4 as uuidv4 } from 'uuid';

const RecipesGrid = ({recipes, isLoading}) => {
    return isLoading ? <Loading /> : <div className="recipes">
        {recipes.map(recipe => (
            <Recipe key={uuidv4()} recipe={recipe} />
        ))}
    </div>
}

export default RecipesGrid;