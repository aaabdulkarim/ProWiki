import SolidMarkdown from "solid-markdown";
import style from "./Article.css";
import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";



function Article() {
    const params = useParams(); 
    console.log(params);


      fetch('http://127.0.0.1:8000/articles/id?id=' + params.id)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(apiData => {
            localStorage.setItem("text", apiData.text)
        })
      .catch(error => {
        console.error(error);
    });

    return (
        <div>
            <main class="container">
                <article class="article">
                    <SolidMarkdown children={localStorage.getItem("text")} />
                </article>

            </main>
        </div>
    );
}

export default Article;



