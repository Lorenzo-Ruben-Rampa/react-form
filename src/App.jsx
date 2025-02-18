import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  const initialArticles = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  const [articles, setArticles] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setArticles([...articles, newArticle]);
    // azzero il valore di newArticle
    setNewArticle('');
  }

  return (
    <>
      <div className="container">
        <ul>
          {articles.map((article, index) => (
            <li
              key={index}>{article}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} action="/action_page.php" method="get">
          <label>Aggiungi Titolo:</label>
          <input type="text" id="fname" name="fname" value={newArticle} onChange={event => { setNewArticle(event.target.value) }} placeholder="Inserire il nuovo titolo qui"></input>
          <input type="submit" value="Aggiungi"></input>
        </form>
      </div>
    </>
  )
}

export default App
