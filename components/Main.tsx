export const Main = () => {
    return (
        <main>
            <form className="add-ingredient-form" action="#">
                <input 
                    placeholder="e.g. chicken breast"
                    type="text" 
                    aria-label="Adding ingredient" 
                />
                <button>+ Add ingredient</button>
            </form>
        </main>
    )
}