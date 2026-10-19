import ReactMarkdown from "react-markdown"

export const ClaudeRecipe = (
    {
        recipe
    }: {
        recipe: string
    }
) => {
    return(
        <section>
            <ReactMarkdown children={recipe}/>
        </section>
    )
}