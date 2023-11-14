import './App.css'
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <div className="card">
        <h2>Rick Sanchez</h2>
        <div className="tags">
          <div classname="tag">Status: Vivo</div>
          <div classname="tag">Espécie: Humana</div>
          <div classname="tag">Origem: Terra</div>
        </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <div class="texto-oculto">Texto que aparece ao passar o mouse</div>
      </div>
      <br />
      <Card />
    </>
  )
}

export default App;
