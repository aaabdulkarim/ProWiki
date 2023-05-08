import "./ArticleSearch.css"

var articles = [2, 1, 3,]


function ArticleSearch() {
    return (
    <main class="container">
        <Show when={-2 > 0} fallback={
            <article style="cursor: auto; height: 80vh" aria-busy="true"></article>
        }>

            {/* For each geht durch jeden Article durch und platziert  */}
            <For each={articles}>{() =>
                <div class="grid">
                    <article></article>
                    <article></article>
                    <article></article>

                </div>
            }</For>
        

        </Show>


    </main>
    );
}

export default ArticleSearch;



