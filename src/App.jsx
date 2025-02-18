import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  const articoles = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  const [newArticle, setNewArticle] = useState("Innovazione digitale: esempi e trend del futuro");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Il nuovo articolo s'intitola: " + newArticle)
  }

  return (
    <>
      <div className="container">
        <ul>
          {articoles.map((article, index) => (
            <li
              key={index}>{article}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} action="/action_page.php" method="get">
          <label>Aggiungi Titolo:</label>
          <input type="text" id="fname" name="fname" value={newArticle} onChange={e => { setNewArticle(e.target.value) }} placeholder="Inserire il nuovo titolo qui"></input>
          <input type="submit" value="Aggiungi"></input>
        </form>
      </div>
    </>
  )
}

export default App
