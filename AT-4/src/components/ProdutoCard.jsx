function ProdutoCard({ nome, categoria, preco }) {
  return (
    <div style={{ border: '1px solid #4CAF50', padding: '15px', width: '200px' }}>
      <h3 style={{ margin: 0 }}>{nome}</h3>
      <span style={{ fontSize: '0.8rem', color: '#666' }}>{categoria}</span>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#4CAF50' }}>
        R$ {preco.toFixed(2)}
      </p>
    </div>
  );
}

export default ProdutoCard;