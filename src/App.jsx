import { useState } from 'react'

function App() {

  // Creo l'array di articoli
  const articoli = ["Le meraviglie del cosmo: esplorando l'universo", "Cucina italiana: ricette tradizionali rivisitate", "Tecnologia verde: il futuro sostenibile", "Arte contemporanea: tendenze e protagonisti", "Viaggi low-cost: destinazioni imperdibili"];

  // BONUS const articoli = [ 
  // {
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
  //   }
  // ];

  const [x, sety] = useState(0)

  return (
    <>
      <div className="container">
        <form action="/action_page.php" method="get">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"></input>
        </form>
      </div>
    </>
  )
}

export default App
