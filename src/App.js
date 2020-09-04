import React from 'react';
import AppRouter from './globalComponents/AppRouter/appRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
