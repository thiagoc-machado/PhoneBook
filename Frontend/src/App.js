import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
