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

    /**
     * Challenge:
     * Only display the div.get-recipe-container if the ingredients list
     * has more than 3 items in it. (Fewer than that and it might not
     * give great results from the chef 🤖👩‍🍳)
     */

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
            { ingredients.length > 0 &&
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list">
                    {ingredientsLi}
                </ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div >
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button type="button">Get a recipe</button>
                </div>}
            </section>
            }

        </main>
    )
}