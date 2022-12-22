import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/maincotent/MainCotnent';
import NavBar from './components/navigation/NaveBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <hr/>
      <MainContent></MainContent>
      <hr/>
      <Footer></Footer>
    </div>
  );
}


export default App;
