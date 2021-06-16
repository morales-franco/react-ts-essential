import React from 'react';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Home } from './Home/Home';
import { AuthProvider } from './Hooks/UseContext/AuthProvider';
import { WelcomeUser } from './Hooks/UseContext/WelcomeUser';
import { UseEffectMagicNumber } from './Hooks/UseEffect/UseEffectMagicNumber';
import { CounterWithUseReducer } from './Hooks/UseReducer/CounterWithUseReducer';
import { CounterApp } from './Hooks/UseState/CounterApp';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <NavLink to='/' className='navbar-brand'>
            Home
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink to='/use-state' className='nav-link'>
                  UseState
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/use-effect' className='nav-link'>
                  UseEffect
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/use-reducer' className='nav-link'>
                  UseReducer
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/use-context' className='nav-link'>
                  UseContext
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <AuthProvider>
          <main className='flex-shrink-0'>
            <div className='container'>
              <Switch>
                <Route path='/use-state'>
                  <CounterApp />
                </Route>
                <Route path='/use-effect'>
                  <UseEffectMagicNumber />
                </Route>
                <Route path='/use-reducer'>
                  <CounterWithUseReducer />
                </Route>
                <Route path='/use-context'>
                  <WelcomeUser />
                </Route>

                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </main>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
