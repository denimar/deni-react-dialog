import './Box.scss';
import BoxHelper from './BoxHelper';
import Constant from '../Constant';

class Box {

  constructor() {
    this.defaultConfig = {
      height: '260px',
      modal: false,
	    width: '470px',
      position: Constant.POSITION.CENTER,
      animate: false
    };
  };

  windowClick() {
    //
    if ((event.target === this.backgroundWnd) && (this.config.modal === false)) {
      this.close();
    }
  }

  getDivToSetHtml() {
    return this.mainWnd;
  }

  build(config = {}) {
    //
    this.config = Object.assign({}, this.defaultConfig, config);

  	//
  	this.backgroundWnd = document.createElement('div');
  	this.backgroundWnd.classList.add('background-wnd-container');

  	//
  	this.mainWnd = document.createElement('div');
  	this.mainWnd.classList.add('main-wnd-container');

    if (this.config.animate) {
      BoxHelper.setAnimation.call(this, this.mainWnd);
    }

  	this.mainWnd.style.height = this.config.height;
    this.mainWnd.style.width = this.config.width;

    //
    if (config.htmlTemplate) {
      this.getDivToSetHtml().innerHTML = config.htmlTemplate;
    } else {
      BoxHelper.getContentFromUrl(config.urlTemplate)
        .then((htmlTemplate) => {
          this.getDivToSetHtml().innerHTML = htmlTemplate;
        });
    }

    //
    this.onshow = this.config.onshow;
    this.onclose = this.config.onclose;
  }

  show(config = {}) {
    return new Promise((successFn, failureFn) => {
      //
    	this.build(this._normalizeDialogArguments(arguments));

      //
      window.addEventListener('resize', BoxHelper.windowResize.bind(this, this.mainWnd, this.config.position));

      //
      this.backgroundWnd.appendChild(this.mainWnd);
    	this.backgroundWnd.addEventListener('click', this.windowClick.bind(this));

      //
      document.body.appendChild(this.backgroundWnd);

      //
      BoxHelper.windowResize.call(this, this.mainWnd, this.config.position);

      this.promiseResolve = successFn;

      setTimeout(() => {
        let firstFocusableElement = this._getFirstFocusableElement();
        if (firstFocusableElement) {
          firstFocusableElement.focus();
        }

        if (this.onshow) {
          this.onshow(this.backgroundWnd);
        }
      }, 50);
    });
  }

  close(config = {}) {
    //
    window.removeEventListener('resize', BoxHelper.windowResize.bind(this, this.mainWnd, this.config.position));

    //
    document.body.removeChild(this.backgroundWnd);
    this.backgroundWnd = undefined;
    this.mainWnd = undefined;
  }

  _getFirstFocusableElement() {
    let focusableElements = this.mainWnd.querySelectorAll('input, select, textarea');
    for (let elem of focusableElements) {
      if (!elem.hidden && !elem.disabled) {
        return elem;
      }
    }
    return null;
  }

  _normalizeDialogArguments(args) {
    if (args.length === 0) {
      throw new Error('Arguments passed in a wrong way!');
    } else if ((args.length === 1) && (typeof args[0] === 'object')) {
      return args[0];
    } else {
      let newArgs = {};

      if (args.length === 1) {
        newArgs.htmlTemplate = args[0];
      } else if (args.length >= 2) {
        newArgs.htmlTemplate = args[0];
        newArgs.modal = args[1];
      }
      return newArgs;
    }
  }


}

export default Box;
