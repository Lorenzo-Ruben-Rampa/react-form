import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  const articoli = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  const [x, sety] = useState(0)

  return (
    <>
      <div className="container">
        <ul>
          {articoli.map((articolo, index) => (
            <li
              key={index}>{articolo}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <form action="/action_page.php" method="get">
          <label>First name:</label>
          <input type="text" id="fname" name="fname" placeholder="Inserire il nome qui"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  )
}

export default App
