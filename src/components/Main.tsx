import { useState } from "react";
import { ClaudeRecipe } from "./ClaudeRecipe.tsx"
import { IngredientsList } from "./IngredientsList.tsx"
import { getRecipeFromChefClaude } from "../../ai.ts"

export const Main = () => {

    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipe, setRecipe] = useState("")

    const addIngredient = (formData: FormData) => {
        const newIngredient = formData.get("ingredient") as string
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient
            ]
        )
    }

    const getRecipe = async() => {
        const recipeSuggestion = await getRecipeFromChefClaude(ingredients)
        console.log(recipeSuggestion)
        setRecipe(recipeSuggestion)
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
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}/>}
            {recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />}
            
        </main>
    )
}