import React from 'react'
import { DeniReactModal, Button, Position } from 'deni-react-modal'
import './Dialog.scss'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import MdWarning from 'react-icons/lib/md/warning'
import MdErrorOutline from 'react-icons/lib/md/error-outline'
import FaCheck from 'react-icons/lib/fa/check'

import Constant from '../Constant'

class Dialog extends DeniReactModal {

  dialog(config) {
    return new Promise((resolveFn) => {
      this.resolveDlgPromise = resolveFn
      this.messageType = config.messageType
      this.title = config.title || 'Dialog'
      this.width = config.width
      if (config.htmlMessage) {
        this.message = config.htmlMessage
        this.show()
      } else if (config.urlContent)   {
        this._getContentFromUrl(config.urlContent).then(htmlContent => {
          this.message = htmlContent
          this.show()
        })
      }    
    })  
  }

  info(message) {
    return this.dialog({messageType: Constant.MESSAGE_TYPE.INFO, title: 'Information', htmlMessage: message})
  }

  confirm(message) {
    return this.dialog({messageType: Constant.MESSAGE_TYPE.CONFIRM, title: 'Confirmation', htmlMessage: message})    
  }  

  error(message) {
    return this.dialog({messageType: Constant.MESSAGE_TYPE.ERROR, title: 'Error', htmlMessage: message})        
  }  

  warning(message) {
    return this.dialog({messageType: Constant.MESSAGE_TYPE.WARNING, title: 'Warning', htmlMessage: message})            
  }   

  success(message) {
    return this.dialog({messageType: Constant.MESSAGE_TYPE.SUCCESS, title: 'Sucess', htmlMessage: message})                
  }    

  modalConfirm(modalContainer, buttonObj) {
    let button = buttonObj.value
    this.resolveDlgPromise({modalContainer, button})
    return true
  }

  getConfig() {
    let options = {
      title: this.title,
      buttons: this._getButtons()
    }
    if (this.width) {
      options.width = this.width
    }
    return options
  }

  render() {
    return (
      <div className={ 'deni-react-dialog-container ' + this._getClassName() } >
        <div className="deni-react-dialog-icon">
          {
            this._getIcon.call(this)
          }
        </div>
        <div className="deni-react-dialog-message" dangerouslySetInnerHTML={{__html: this.message }} />
      </div>
    )
  }

  _getIcon() {
    switch (this.messageType) {
      case Constant.MESSAGE_TYPE.INFO:
        return <FaInfoCircle />
      case Constant.MESSAGE_TYPE.WARNING:
        return <MdWarning />
      case Constant.MESSAGE_TYPE.CONFIRM:
        return <FaQuestionCircle />
      case Constant.MESSAGE_TYPE.ERROR:
        return <MdErrorOutline />        
      case Constant.MESSAGE_TYPE.SUCCESS:
        return <FaCheck />
      default:
        return null
    }
  }

  _getClassName() {
    switch (this.messageType) {
      case Constant.MESSAGE_TYPE.INFO:
        return 'info'
      case Constant.MESSAGE_TYPE.WARNING:
        return 'warning'
      case Constant.MESSAGE_TYPE.CONFIRM:
        return 'confirm'
      case Constant.MESSAGE_TYPE.ERROR:
        return 'error'
      case Constant.MESSAGE_TYPE.SUCCESS:  
        return 'success'
      default:
        return ''
    }
  }

  _getButtons() {
    switch (this.messageType) {
      case Constant.MESSAGE_TYPE.INFO:
        return [ Button.OK ]
      case Constant.MESSAGE_TYPE.WARNING:
        return [ Button.OK ]
      case Constant.MESSAGE_TYPE.CONFIRM:
        return [ Button.YES, Button.NO ]
      case Constant.MESSAGE_TYPE.ERROR:
        return [ Button.OK ]
      case Constant.MESSAGE_TYPE.SUCCESS:
        return [ Button.OK ]
      default:
        return [ Button.CLOSE ]
    }
  }  

  _getContentFromUrl(url) {
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
  

}

export default Dialog