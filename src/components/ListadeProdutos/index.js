
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material"
import { getProdutos } from "../../request";
import { useState, useEffect } from "react";
import  api  from "../../request/request.util";

function ListadeProtudos(){
  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    async function fetchApi(){
          const response = await api.get("/estoque")
          setProdutos(response.data)
    }

    fetchApi() 
  }, []);

  
  return(
    <Grid container spacing={2}>
      {produtos.map(produto => {
        return(
          <Grid item xs={3}>
          <Card>
            <CardMedia
              sx={{ height: 300 }}
              image={produto.imagem[0]}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="body2">{produto.modelo}</Typography>
              <Typography variant="body2">{produto.preco}</Typography>
              <Typography variant="body2">{produto.nota}</Typography>
            </CardContent>
          </Card>
          </Grid>
        )
      }) }
    </Grid>
  )
}

export default ListadeProtudos;