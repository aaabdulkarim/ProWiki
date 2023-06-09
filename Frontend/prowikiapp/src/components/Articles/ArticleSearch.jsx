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
    let keyword = localStorage.getItem("currKeyword")
    // Random Articles
    fetch(`http://127.0.0.1:8000/articles/keyword/?keyword=${keyword}`)
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
 
            <h1>
            Beiträge entsprechend deiner Suche gefunden:  {keyword}
            </h1>

            {/* For each geht durch jedes Article durch und platziert  */}
            <For each={articles()}>{(article) =>

                <div class="grid">
                    <A href={"/article/" + article[0]} >

                        <article>
                            <h5>{article[2]} </h5>
                            {console.log(articles())}
                            Author : {getAuthor(article[1])}
                            <pre>{article[3]}</pre>
                        </article>
                    </A>

                </div>
            }</For>


        </main>
    );
}

export default ArticleSearch;



