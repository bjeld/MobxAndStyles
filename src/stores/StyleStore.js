import { observable, action, useStrict } from 'mobx';

useStrict(true);

class StyleStore {

  /**
   * ApplicationBar Styles
   */
  @observable applicationBarStyle = {
    height: 40,
    backgroundColor: '#303030',
    color: '#ffffff'
  }

  @action switchToDarkTheme() {
    this.applicationBarStyle = {
      ...this.applicationBarStyle,
      backgroundColor: '#303030',
      color: '#ffffff'
    }
  }

  @action switchToLightTheme() {
    this.applicationBarStyle = {
      ...this.applicationBarStyle,
      backgroundColor: '#EEEEEE',
      color: '#333333'
    }
  }
}

export default StyleStore;
