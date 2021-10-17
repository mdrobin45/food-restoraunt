import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn/SignIn';
import SignUp from './Components/SignIn/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';



const App = () =>
{
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/signIn'>
              <SignIn/>
            </Route>
            <Route exact path='/create-new-account'>
              <SignUp />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;