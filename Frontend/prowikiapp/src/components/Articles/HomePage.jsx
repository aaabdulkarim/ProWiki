import ArticleSearch from "./ArticleSearch";
import RandomArticle from "./RandomArticle";


function HomePage() {
 

    return (
        <div>
            <Show
                when={localStorage.getItem("currKeyword") == ""}
                fallback={<ArticleSearch/>}
            >
                <RandomArticle/>
            </Show>
        </div>
    );
}

export default HomePage;



