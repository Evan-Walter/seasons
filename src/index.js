import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <>App</>;
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
