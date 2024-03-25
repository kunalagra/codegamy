
import React from 'react';
import Room from '../../Room';
import SocketWrapper from '../../SocketWraper';

function App() {
  return (
    <SocketWrapper><Room /></SocketWrapper>
  );
}

export default App;
