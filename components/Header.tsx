import chefClaude from "../images/chef-claude-icon.png"

export const Header = () => {
    return (
        <header>
            <div className="title-container">
                <img src={chefClaude} alt="claude icon chef version" />
                <span>Chef Claude</span>
            </div>
        </header>
    )
}