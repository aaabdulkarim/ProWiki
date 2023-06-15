import "./ArticleSearch.css"
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";


// You can access and use the saved data outside of the fetch method

function getAuthor(id) {
    const [author, setAuthor] = createSignal(null);

    fetch('http://127.0.0.1:8000/user?id=' + id)
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        return response.json();
        })
    .then(apiData => {
            setAuthor(apiData)
        })
    .catch(error => {
            console.error(error);
        });

    return author;

}

function ArticleSearch() {
    const [articles, setArticles] = createSignal(null);

  
    // Random Articles
    fetch('http://127.0.0.1:8000/articles')
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(apiData => {
        setArticles(apiData);
      })
      .catch(error => {
        console.error(error);
    });


    return (
        <main class="container">
            <Show when={2 > 0} fallback={
                <article style="cursor: auto; height: 80vh" aria-busy="true"></article>
            }>

                {/* For each geht durch jedes Article durch und platziert  */}
                <For each={articles()}>{(article) =>

                    <div class="grid">
                        <A href={"/article/" + article[0]} >

                            <article>
                                <h5>{article[1]} </h5>
                                Author : {getAuthor(article[2])}
                                <pre>{article[3]}</pre>
                            </article>
                        </A>

                    </div>
                }</For>

            </Show>


        </main>
    );
}

export default ArticleSearch;



