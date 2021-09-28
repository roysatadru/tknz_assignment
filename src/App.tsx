import React from 'react';

import { GlobalComponent } from './layout';
import PacksDescription from './pages/PacksDescription';
import Home from './pages/Home'; // Created an empty home to better structure the code for later scaling up

const App: React.FC = () => {
  return (
    <div>
      <GlobalComponent />
      <Home />{/* Setup for scaling later */}
      <PacksDescription />
    </div>
  );
};

export default App;
