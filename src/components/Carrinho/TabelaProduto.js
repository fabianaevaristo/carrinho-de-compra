
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
function TabelaProduto(props){
  return(
  <>
    <Typography variant="h5">Carrinho de Compras</Typography>
    <TableContainer> 
      <Table> 
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Valor total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.children}
        </TableBody>
      </Table>   
    </TableContainer>
    </>
  );

}

export default TabelaProduto;


