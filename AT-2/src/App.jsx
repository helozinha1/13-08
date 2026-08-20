import BotaoPersonalizado from './components/BotaoPersonalizado'
import './App.css'

function App() {
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Meus Botões Reutilizáveis</h2>
      
      {/* Reutilizando o MESMO componente, mas com resultados visuais diferentes graças às Props */}
      <BotaoPersonalizado text="Salvar" />
      <BotaoPersonalizado text="Cancelar" />
      <BotaoPersonalizado text="Excluir" />
    </div>
  )
}

export default App
