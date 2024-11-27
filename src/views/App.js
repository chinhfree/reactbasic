import logo from './logo.svg';
import './App.scss';
import DemoComponent from './Example/DemoComponent';
import RootComponent from './Todos/RootComponent';
import Home from './nav/Home';
import Nav from './nav/Nav';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListUsers from './User/ListUsers';



function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <Home /> */}
          {/* <DemoComponent /> */}
          {/* {<RootComponent />} */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/demo">
              <DemoComponent />
            </Route>
            <Route path="/todo">
              <RootComponent />
            </Route>
            <Route path="/user">
              <ListUsers />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />

      </div>
    </Router>
  );
}

export default App;
