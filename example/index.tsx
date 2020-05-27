import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ShareDialog from '../.';

const App = () => {
  return (
    <div>
      <ShareDialog />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
