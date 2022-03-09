import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import MyNotes from "./components/screens/MyNotes/MyNotes";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <main>
     <Route path='/' component={LandingPage} exact/>
     <Route path='/login' component={LoginScreen} exact />
     <Route path='/register' component={RegisterScreen} exact />
     <Route path='/mynotes' component={MyNotes} />
    </main>

    <Footer />
    </BrowserRouter>
   
     
    </>
  );
}

export default App;
