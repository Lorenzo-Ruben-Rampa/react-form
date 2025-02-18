import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  const initialArticles = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  // BONUS
  // const initialArticlesArray = [
  //   {
  //     titolo: "Le meraviglie del cosmo: esplorando l'universo",
  //     occhiello: "Un viaggio attraverso le galassie e i misteri dello spazio profondo.",
  //     categoria: "Scienza"
  //   },
  //   {
  //     titolo: "Cucina italiana: ricette tradizionali rivisitate",
  //     occhiello: "Scopri come innovare i piatti classici della tradizione culinaria italiana.",
  //     categoria: "Cucina"
  //   },
  //   {
  //     titolo: "Tecnologia verde: il futuro sostenibile",
  //     occhiello: "Come le innovazioni tecnologiche stanno contribuendo a un pianeta più pulito.",
  //     categoria: "Ambiente"
  //   },
  //   {
  //     titolo: "Arte contemporanea: tendenze e protagonisti",
  //     occhiello: "Un'analisi delle correnti artistiche moderne e dei loro principali esponenti.",
  //     categoria: "Arte"
  //   },
  //   {
  //     titolo: "Viaggi low-cost: destinazioni imperdibili",
  //     occhiello: "Consigli e trucchi per viaggiare il mondo senza spendere una fortuna.",
  //     categoria: "Viaggi"
  //   },
  //   {
  //     titolo: "Innovazione digitale: esempi e trend del futuro",
  //     occhiello: "Esploriamo come la trasformazione digitale sta cambiando le nostre vite e quali sono le prospettive future.",
  //     categoria: "Tecnologia"
  //   }
  // ];

  //  Nuovo articolo da aggiungere
  // {
  //   titolo: "Innovazione digitale: esempi e trend del futuro",
  //   occhiello: "Esploriamo come la trasformazione digitale sta cambiando le nostre vite e quali sono le prospettive future.",
  //   categoria: "Tecnologia"
  // }

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
