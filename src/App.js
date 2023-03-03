import './App.css';
import Product from './components/Product';

function App() {
  const productData=[
  {
    id : 1,
    price : '$10',
    title : 'Product 1',
    description :'First product'
  },
  {
    id : 2,
    price : '$20',
    title : 'Product 2',
    description :'Second product'
  },
]
  return (
    <>
    <Product price={productData[0].price} title={productData[0].title} desc={productData[0].description} />
    <Product price={productData[1].price} title={productData[1].title} desc={productData[1].description} />
    </>
    );
}

export default App;
