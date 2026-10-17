import { useState } from "react";
import { ClaudeRecipe } from "./ClaudeRecipe"
import { IngredientsList } from "./IngredientsList"

export const Main = () => {

    const [ingredients, setIngredients] = useState<string[]>(["all the main spices", "pasta", "ground beef", "tomato paste"]);
    const [recipeShown, setRecipeShown] = useState(false);
    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

    const addIngredient = (formData: FormData) => {
        const newIngredient = formData.get("ingredient") as string
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient
            ]
        )
    }

    const toggleRecipe = () => {
        setRecipeShown( prevRecipe => !prevRecipe)
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
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipe={toggleRecipe} />}
            {recipeShown && <ClaudeRecipe />}
            
        </main>
    )
}