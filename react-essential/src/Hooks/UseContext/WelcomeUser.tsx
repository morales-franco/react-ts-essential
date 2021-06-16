import React from 'react';
import { useAuthContext } from './AuthProvider';

export const WelcomeUser: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuthContext();

  return (
    <>
      <div className='row'>
        <h1>isAuthenticated: {isAuthenticated ? 'SI' : 'NO'}</h1>
        <h1>user: {user?.name}</h1>
      </div>

      <div className='row'>
        <button
          className='btn btn-primary mb-1'
          onClick={() =>
            login({
              name: 'NEW USER',
            })
          }
        >
          {' '}
          LOGIN
        </button>

        <button className='btn btn-primary mb-1' onClick={() => logout()}>
          {' '}
          LOGOUT
        </button>
      </div>
    </>
  );
};
