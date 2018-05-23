import './GhostTitleBar.scss';

class GhostTitleBar {

  constructor(title) {
    this.container = document.createElement('div');
    this.container.classList.add('ghost-title-bar-container');    
    this.setTitle(title);
  }

  setTitle(title) {
    this.container.innerHTML = title;
  }

  getEl() {
    return this.container;
  }

}

export default GhostTitleBar;
