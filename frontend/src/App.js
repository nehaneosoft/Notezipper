import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import MyNotes from "./components/screens/MyNotes/MyNotes";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <main>
     <Route path='/' component={LandingPage} exact/>
     <Route path='/mynotes' component={MyNotes} />
    </main>

    <Footer />
    </BrowserRouter>
   
     
    </>
  );
}

export default App;
