import ProdutoCard from './components/ProdutoCard';

// Simulando dados vindo de uma API ou Banco de Dados
const produtos = [
  { id: 1, nome: "Teclado Mecânico", preco: 350.00, categoria: "Periféricos" },
  { id: 2, nome: "Mouse Gamer", preco: 210.50, categoria: "Periféricos" },
  { id: 3, nome: "Monitor Ultrawide", preco: 1500.00, categoria: "Monitores" },
  { id: 4, nome: "Mousepad Gigante", preco: 89.90, categoria: "Acessórios" }
];
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Catálogo da Loja</h2>
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        
        {/* A Mágica do React: Transformando dados em Componentes Visuais */}
        {produtos.map((produto) => (
          
          <ProdutoCard 
            key={produto.id}          /* A Key é obrigatória no React para listas! */
            nome={produto.nome} 
            categoria={produto.categoria} 
            preco={produto.preco} 
          />
          
        ))}

      </div>
    </div>
  );
}

export default App;