import React, { useState } from 'react';
import AppRoute from './components/AppRoute/AppRoute';
import ThemeSwitch from './components/UI/ThemeSwitch';
import cn from 'classnames';
import  './index.css';

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={cn('wrapper', { ['lightMode']: theme === true })}>
      <AppRoute />
      <ThemeSwitch onClick={() => setTheme(!theme)} />
    </div>
  );
}

export default App;
