import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <>Latitude: </>;
}

class App extends React.Component {
  render() {
    return <>Latitude: </>;
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
