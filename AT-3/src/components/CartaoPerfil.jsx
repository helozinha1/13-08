// Usando { desestruturação } para extrair as propriedades diretamente do objeto props
function CartaoPerfil({ nome, idade, profissao }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '15px', 
      margin: '10px',
      width: '250px'
    }}>
      <h2 style={{ margin: '0 0 10px 0' }}>{nome}</h2>
      <p style={{ margin: '5px 0' }}>Idade: {idade} anos</p>
      <p style={{ margin: '5px 0' }}>Profissão: <strong>{profissao}</strong></p>
    </div>
  );
}

export default CartaoPerfil;