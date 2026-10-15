export const Main = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsLi = ingredients.map( (ingredient) => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient") as string
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
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