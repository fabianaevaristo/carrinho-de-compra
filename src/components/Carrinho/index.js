
import { TableRow, TableCell, TextField } from "@mui/material";
import { useState } from "react"
import TabelaProduto from "./TabelaProduto";

function Carrinho() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      modelo: "Blusa manga longa",
      marca: "Trifil",
      preco: 78,
      imagem:"https://a-static.mlcdn.com.br/800x560/blusa-trifil…/13752029274/3317955fabfb0fda7bbfaad68144b152.jpg",
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

