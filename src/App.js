import Carrinho from "./components/Carrinho";
import { Routes, Route } from "react-router-dom";
import ListadeProtudos  from "./components/ListadeProdutos";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<ListadeProtudos/>}/>
      <Route path="carrinho" element={<Carrinho/>}/>
    </Routes>
  );
}

export default App;
