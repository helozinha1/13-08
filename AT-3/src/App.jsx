import CartaoPerfil from './components/CartaoPerfil';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      
      {/* Passando múltiplas props de tipos diferentes (String e Number) */}
      <CartaoPerfil 
        nome="Helloysa" 
        idade={17} 
        profissao="Desenvolvedora Front-End" 
      />
      
      <CartaoPerfil 
        nome="Anna Laura" 
        idade={17} 
        profissao="Fono" 
      />
      
    </div>
  );
}

export default App;