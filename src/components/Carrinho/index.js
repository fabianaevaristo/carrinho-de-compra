
import { TableRow, TableCell, TextField } from "@mui/material";
import { useState } from "react"
import TabelaProduto from "./TabelaProduto";
import './carrinho.css'

function Carrinho() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      modelo: "Blusa manga longa",
      marca: "Trifil",
      preco: 78,
      imagem:"https://i.imgur.com/rznyZgx.jpg",
      tamanho: "M",
      cor: "azul",
      quantidade: 1
    }
  ]);
                      
  function handleChange(id, quantidade){
    const novoProduto = produtos.map(item => {
      if(item.id == id){
        return {
          ...item, quantidade
        }
      }else{
        return item
      }
    }); 
    setProdutos(novoProduto);
  }

  return ( 
    <TabelaProduto>
          {produtos.map(produto => (
              <TableRow>
                <TableCell>
                  <img className="imagem" src={produto.imagem} />
                </TableCell>
                <TableCell>{produto.modelo}</TableCell>
                <TableCell> R$ {produto.preco.toFixed(2)}</TableCell>
                <TableCell> 
                  <TextField type="number" 
                  value={produto.quantidade} 
                  onChange={(e) => {
                    handleChange(produto.id, e.target.value)
                  }}/>
                </TableCell>
                <TableCell>{produto.cor}/{produto.tamanho}</TableCell>
                <TableCell> R$ {(produto.quantidade * produto.preco).toFixed(2)}</TableCell>
              </TableRow>
            ))}
    </TabelaProduto>
  );
}

export default Carrinho;

