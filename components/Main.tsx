import { useState } from "react";

export const Main = () => {

    /**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */

    const [ingredients, setIngredients] = useState<string[]>([]);


    const ingredientsLi = ingredients.map( (ingredient) => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    const addIngredient = (formData: FormData) => {
        const newIngredient = formData.get("ingredient") as string
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient
            ]
        )
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form" >
                <input 
                    placeholder="e.g. chicken breast"
                    type="text" 
                    aria-label="Adding ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsLi}
            </ul>
        </main>
    )
}