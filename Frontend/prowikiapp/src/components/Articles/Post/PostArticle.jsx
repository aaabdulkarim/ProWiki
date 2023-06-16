import "./PostArticle.css"
import { createSignal } from "solid-js";


function PostArticle() {

  const [title, setTitle] = createSignal('');
  const [text, setText] = createSignal('');

  function handleSubmit(event) {
    let data = {
      title: title(),
      author_id : 1,
      text: text()
    }

    console.log(data);
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    
    };

    event.preventDefault();


    fetch('http://127.0.0.1:8000/articles', options)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error("Error:", error);
    });
  }

  return (
    <main class="container">
      <form>

        <div class="grid">

          <label>
            Title


            <input value={title()} onInput={event => setTitle(event.target.value)} type="text" id="title" name="title" placeholder="Title" required/>

          </label>

        

        </div>

          <label for="email">Text (in markdown)</label>
          <textarea value={text()} onInput={event => setText(event.target.value)} type="textfield" id="textfield" name="textfield"  required/>

          <button onClick={handleSubmit} type="submit">Submit</button>

      </form>
    </main>
  );
}

export default PostArticle;



