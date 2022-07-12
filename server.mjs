import Contenedor from './app.mjs';
import express from 'express';
const app = express();

const PORT = 8080;
const contenedor = new Contenedor('productos');

async function main(){
    const contenedor = new Contenedor('productos');
    console.log("contenedor: ", contenedor);
    await contenedor.save({
        title: 'Escuadra',
        price: 100,
        thumbnail: 'url',
    });
    await contenedor.save({
        title: 'Calculadora',
        price: 200,
        thumbnail: 'url',
    });
    await contenedor.save({
        title: 'Globo Terráqueo',
        price: 300,
        thumbnail: 'url',
    });
}
main();


app.get("/productos", async (req, res) => {
    const allProducts = await contenedor.getAll();
    res.send(allProducts);
  });
  
  app.get("/productoRandom", async (req, res) => {
    const allProducts = await contenedor.getAll();
    let random = Math.floor(Math.random() * allProducts.length);
    const randomProduct = await contenedor.getById(allProducts[random].id);
    res.send(randomProduct);
  });
  
  const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
  });
  server.on("error", (error) => console.log(`Error en servidor ${error}`));