import React from 'react';
// import './App.css';
import Previsao from './componentes/previsao/Previsao'
import Comentarios from './componentes/comentarios/Comentarios'
import Contador from './componentes/contador/Contador'

function App() {
  return (
    <div className="container">
           
        <Previsao/>
        <Contador/>
        <Comentarios
         img={''}
         nome="Mell"
         subtitulo="Ameeeeei, faiz mais"
         comentario="nossa, babado esse video. Melhor youtuber"
        />
      

    </div>
  );
}

export default App;
