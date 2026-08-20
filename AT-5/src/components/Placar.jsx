import { useState } from 'react';

function Placar() {
  // Dois estados independentes
  const [pontosTimeA, setPontosTimeA] = useState(0);
  const [pontosTimeB, setPontosTimeB] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>🏆 Placar do Jogo</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', fontSize: '2rem' }}>
        <div>
          <p>Time A</p>
          <strong>{pontosTimeA}</strong>
          <br/>
          <button onClick={() => setPontosTimeA(pontosTimeA + 1)}>+1 Ponto</button>
        </div>
        
        <div>
          <p>Time B</p>
          <strong>{pontosTimeB}</strong>
          <br/>
          <button onClick={() => setPontosTimeB(pontosTimeB + 1)}>+1 Ponto</button>
        </div>
      </div>
    </div>
  );
}

export default Placar;
