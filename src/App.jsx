import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  // const initialArticles = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  // BONUS Array di articoli aggiornato
  const initialArticlesArray = [
    {
      titolo: "Le meraviglie del cosmo: esplorando l'universo",
      occhiello: "Un viaggio attraverso le galassie e i misteri dello spazio profondo.",
      categoria: "Scienza"
    },
    {
      titolo: "Cucina italiana: ricette tradizionali rivisitate",
      occhiello: "Scopri come innovare i piatti classici della tradizione culinaria italiana.",
      categoria: "Cucina"
    },
    {
      titolo: "Tecnologia verde: il futuro sostenibile",
      occhiello: "Come le innovazioni tecnologiche stanno contribuendo a un pianeta più pulito.",
      categoria: "Ambiente"
    },
    {
      titolo: "Arte contemporanea: tendenze e protagonisti",
      occhiello: "Un'analisi delle correnti artistiche moderne e dei loro principali esponenti.",
      categoria: "Arte"
    },
    {
      titolo: "Viaggi low-cost: destinazioni imperdibili",
      occhiello: "Consigli e trucchi per viaggiare il mondo senza spendere una fortuna.",
      categoria: "Viaggi"
    },
    {
      titolo: "Innovazione digitale: esempi e trend del futuro",
      occhiello: "Esploriamo come la trasformazione digitale sta cambiando le nostre vite e quali sono le prospettive future.",
      categoria: "Tecnologia"
    }
  ];

  //  Nuovo articolo da aggiungere
  // {
  //   titolo: "Innovazione digitale: esempi e trend del futuro",
  //   occhiello: "Esploriamo come la trasformazione digitale sta cambiando le nostre vite e quali sono le prospettive future.",
  //   categoria: "Tecnologia"
  // }

  // useState
  const [articles, setArticles] = useState(initialArticlesArray);
  // const [newArticle, setNewArticle] = useState("");
  // Modifico in modo che l'array tratti oggetti, non più stringhe
  const [newArticle, setNewArticle] = useState({
    titolo: '',
    occhiello: '',
    categoria: ''
  });

  // Gestore per l'aggiornamento del nuovo articolo
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value
    }));
  };

  // Gestore per l'aggiunta di un nuovo articolo  
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setArticles([...articles, newArticle]);
  //   // azzero il valore di newArticle
  //   setNewArticle('');
  // }

  // Modifica al gestore per l'aggiunta di un nuovo articolo
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newArticle.titolo && newArticle.occhiello && newArticle.categoria) {
      setArticles((prevArticles) => [...prevArticles, newArticle]);
      setNewArticle({ titolo: '', occhiello: '', categoria: '' });
    } else {
      alert('Per favore, compila tutti i campi.');
    }
  };

  return (
    <>
      <div className="container">
        <ul>
          {articles.map((article, index) => (
            <li
              key={index}><h2>{article.titolo}</h2>
              <p>{article.occhiello}</p>
              <p><em>{article.categoria}</em></p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} action="/action_page.php" method="get">
          {/* <label>Aggiungi Articolo:</label>
          <input type="text" id="fname" name="fname" value={newArticle} onChange={event => { setNewArticle(event.target.value) }} placeholder="Inserire il nuovo articolo qui"></input>
          <input type="submit" value="Aggiungi"></input> */}
          {/* Modifica agli input per il passaggio ad array di oggetti */}
          <label>
            Titolo:
            <input
              type="text"
              name="titolo"
              value={newArticle.titolo}
              onChange={handleInputChange}
              placeholder="Inserisci il titolo"
            />
          </label>
          <br />
          <label>
            Occhiello:
            <input
              type="text"
              name="occhiello"
              value={newArticle.occhiello}
              onChange={handleInputChange}
              placeholder="Inserisci l'occhiello"
            />
          </label>
          <br />
          <label>
            Categoria:
            <input
              type="text"
              name="categoria"
              value={newArticle.categoria}
              onChange={handleInputChange}
              placeholder="Inserisci la categoria"
            />
          </label>
          <br />
          <input type="submit" value="Aggiungi Articolo" />
        </form>
      </div>
    </>
  )
}

export default App
