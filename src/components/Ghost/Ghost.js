import './Ghost.scss';
import GhostTitleBar from './GhostTitleBar';
import GhostBody from './GhostBody';
import BoxHelper from '../Box/BoxHelper';
import Constant from '../Constant';

class Ghost {

  constructor() {
		this.defaultConfig = {
      animate: true,
      position: Constant.POSITION.TOP_CENTER,
      timeout: 3000, //3 seconds
      type: Constant.MESSAGE_TYPE.INFO
    };
    this.body = GhostBody;
  }

	build(config = {}) {
    //
  	this.config = Object.assign({}, this.defaultConfig, config);

		//
  	this.ghostWnd = document.createElement('div');
  	this.ghostWnd.classList.add('ghost-container');

    if (this.config.animate) {
      BoxHelper.setAnimation(this.ghostWnd, this.config.position);
    }

    //
    if (config.title) {
      let ghostTitleBar = new GhostTitleBar(config.title || 'Title Here');
      this.ghostWnd.appendChild(ghostTitleBar.getEl());
    }

    //
    this.ghostWnd.appendChild(this.body);

    //
    this.body.innerHTML = '<i class="fa ' + BoxHelper.getIconClassByMessageType(this.config.type) + ' fa-2x ghost-icon"></i>' +
                          '<span class="gost-html-message">' + config.htmlTemplate + '</span>';
	}

	show(config = {}) {
  	//
  	this.build(this._normalizeDialogArguments(arguments));

    //
    window.addEventListener('resize', BoxHelper.windowResize.bind(this, this.ghostWnd, this.config.position));

    //
    document.body.appendChild(this.ghostWnd);

    //
    BoxHelper.windowResize.call(this, this.ghostWnd, this.config.position);

    setTimeout(() => {
      this.close();
    }, this.config.timeout);
	}

  close(config = {}) {
    //
    window.removeEventListener('resize', BoxHelper.windowResize.bind(this, this.ghostWnd, this.config.position));

    //
    document.body.removeChild(this.ghostWnd);
    this.ghostWnd = undefined;
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
        newArgs.type = args[1];

        if (args.length >= 3) {
          newArgs.timeout = args[2];

          if (args.length >= 4) {
            newArgs.title = args[3];
          }
        }
      }
      return newArgs;
    }
  }

}

export default Ghost;
