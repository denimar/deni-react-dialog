import Constant from '../Constant';

class BoxHelper {

  static windowResize(mainWnd, position) {
    _AlignHorizontally(mainWnd, position);
    _AlignVertically(mainWnd, position);
  }

  static setAnimation(mainWnd, position) {
    mainWnd.classList.add('with-animation');

    //top
    if ([Constant.POSITION.TOP_LEFT, Constant.POSITION.TOP_CENTER, Constant.POSITION.TOP_RIGHT].includes(position)) {
      mainWnd.classList.add('top-to-bottom');
    //center
    } else if ([Constant.POSITION.CENTER_LEFT, Constant.POSITION.CENTER, Constant.POSITION.CENTER_RIGHT].includes(position)) {
    //bottom
    } else if ([Constant.POSITION.BOTTOM_LEFT, Constant.POSITION.BOTTOM_CENTER, Constant.POSITION.BOTTOM_RIGHT].includes(position)) {
      mainWnd.classList.add('bottom-to-top');
    }

  }

  static getContentFromUrl(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let self = this;
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            resolve(xhr.responseText);
          }
      };
      xhr.open('GET', url);
      xhr.send();
    });
  }

  static getIconClassByMessageType(messageType) {
    switch(messageType) {
      case Constant.MESSAGE_TYPE.INFO:
        return Constant.MESSAGE_ICONS.INFO;
        break;
      case Constant.MESSAGE_TYPE.SUCCESS:
        return Constant.MESSAGE_ICONS.SUCCESS;
        break;
      case Constant.MESSAGE_TYPE.WARNING:
        return Constant.MESSAGE_ICONS.WARNING;
        break;
      case Constant.MESSAGE_TYPE.ERROR:
        return Constant.MESSAGE_ICONS.ERROR;
        break;
      case Constant.MESSAGE_TYPE.CONFIRM:
        return Constant.MESSAGE_ICONS.CONFIRM;
        break;
      default:
        return Constant.MESSAGE_ICONS.INFO;
    }
  }

}

export default BoxHelper;

function _AlignHorizontally(mainWnd, position) {
  //left
  if ([Constant.POSITION.TOP_LEFT, Constant.POSITION.CENTER_LEFT, Constant.POSITION.BOTTOM_LEFT].includes(position)) {
    mainWnd.style.left = Constant.DEFAULT_MARGIN.LEFT + 'px';
  //center
  } else if ([Constant.POSITION.TOP_CENTER, Constant.POSITION.CENTER, Constant.POSITION.BOTTOM_CENTER].includes(position)) {
    let centerPosX = (window.innerWidth / 2) - (mainWnd.clientWidth / 2);
    mainWnd.style.left = centerPosX + 'px';
  //right
  } else if ([Constant.POSITION.TOP_RIGHT, Constant.POSITION.CENTER_RIGHT, Constant.POSITION.BOTTOM_RIGHT].includes(position)) {
    mainWnd.style.left = (window.innerWidth - mainWnd.clientWidth - Constant.DEFAULT_MARGIN.RIGHT) + 'px';
  }
}

function _AlignVertically(mainWnd, position) {
  //top
  if ([Constant.POSITION.TOP_LEFT, Constant.POSITION.TOP_CENTER, Constant.POSITION.TOP_RIGHT].includes(position)) {
    mainWnd.style.top = Constant.DEFAULT_MARGIN.TOP + 'px';
  //center
  } else if ([Constant.POSITION.CENTER_LEFT, Constant.POSITION.CENTER, Constant.POSITION.CENTER_RIGHT].includes(position)) {
    let centerPosY = (window.innerHeight / 2) - (mainWnd.clientHeight / 2);
    mainWnd.style.top = centerPosY + 'px';
  //bottom
  } else if ([Constant.POSITION.BOTTOM_LEFT, Constant.POSITION.BOTTOM_CENTER, Constant.POSITION.BOTTOM_RIGHT].includes(position)) {
    mainWnd.style.top = (window.innerHeight - mainWnd.clientHeight - Constant.DEFAULT_MARGIN.BOTTOM) + 'px';
  }
}
