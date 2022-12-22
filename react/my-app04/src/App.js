import logo from './logo.svg';
import './App.css';
// import ProductDetail from './app/component/product-detail.component';
import ProductList from './app/component/product-list.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      {/* <ProductDetail></ProductDetail> */}
      <ProductList></ProductList>
    </div>
  );
}

export default App;
