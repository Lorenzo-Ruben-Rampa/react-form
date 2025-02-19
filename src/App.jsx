import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  // const initialArticles = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  // BONUS Array di articoli aggiornato
  const initialArticlesArray = [
    {
      id: 1,
      titolo: "Le meraviglie del cosmo: esplorando l'universo",
    },
    {
      id: 2,
      titolo: "Cucina italiana: ricette tradizionali rivisitate",
    },
    {
      id: 3,
      titolo: "Tecnologia verde: il futuro sostenibile",
    },
    {
      id: 4,
      titolo: "Arte contemporanea: tendenze e protagonisti",
    },
    {
      id: 5,
      titolo: "Viaggi low-cost: destinazioni imperdibili",
    },
    {
      id: 6,
      titolo: "Innovazione digitale: esempi e trend del futuro",
    }
  ];

  //  Nuovo articolo da aggiungere
  // {
  // id: 7,  
  // titolo: "Innovazione digitale: esempi e trend del futuro",
  // }

  // useState
  const [articles, setArticles] = useState(initialArticlesArray);
  // const [newArticle, setNewArticle] = useState("");
  // Modifico in modo che l'array tratti oggetti, non più stringhe
  const [newArticle, setNewArticle] = useState({
    id: Number,
    titolo: '',
  });

  // Gestore per l'aggiunta di un nuovo articolo  
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setArticles([...articles, newArticle]);
  //   // azzero il valore di newArticle
  //   setNewArticle('');
  // }

  // Modifica al gestore per l'aggiunta di un nuovo articolo in caso i campi non sono compilati
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newArticle.titolo) {
      const articleWithId = {
        ...newArticle,
        id: articles.length ? articles[articles.length - 1].id + 1 : 1
      };
      setArticles((prevArticles) => [...prevArticles, articleWithId]);
      setNewArticle({ titolo: '' });
    } else {
      alert('Per favore, compila tutti i campi.');
    }
  };

  //Definisco la funzione per l'onChange
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value
    }));
  };

  // //Rimuovere un articolo
  const removeArticle = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
  };

  return (
    <>
      <div className="container">
        <ul>
          {articles.map((article, id) => (
            <li
              key={article.id}><h2>{article.titolo}</h2>
              <button onClick={() => removeArticle(article.id)}>Cancella</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} action="/action_page.php" method="get">
          {/* <label>Aggiungi Articolo:</label>
          <input type="text" id="fname" name="fname" value={newArticle} onChange={event => { setNewArticle(event.target.value) }} placeholder="Inserire il nuovo articolo qui"></input>}
          {/* Modifica agli input per il passaggio ad array di oggetti */}
          <label>
            <p className="label-sm">Titolo:</p>
            <input
              type="text" name="titolo" value={newArticle.titolo} onChange={handleInputChange} placeholder="Inserisci il titolo" />
          </label>
          <span><input className="submit-bt" type="submit" value="Aggiungi Articolo" /></span>
        </form>
      </div>
    </>
  )
}

export default App
