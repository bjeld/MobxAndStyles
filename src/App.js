import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ApplicationBar from './applicationbar/ApplicationBar';

@observer(["styleStore"])
class App extends Component {
  render() {
    return (
      <div>
        <ApplicationBar />
        <button onClick={()=> this.props.styleStore.switchToLightTheme()}>switchToLightTheme</button>
        <button onClick={()=> this.props.styleStore.switchToDarkTheme()}>switchToDarkTheme</button>
      </div>
    );
  }
}

export default App;
