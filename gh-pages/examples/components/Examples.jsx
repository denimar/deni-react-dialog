import React from 'react'
import './Examples.scss'
import DeniDlg from '../../../src/components/DeniDialog'
import ExampleItem from './ExampleItem'
import examplesInfo from '../examplesInfo'

class Examples extends React.Component {

  _showBoxWithUrlTemplate() {
    DeniDlg.box({
      width: '705px',
      height: '265px',      
      urlTemplate: 'box-template.htm',
      modal: false
    });    
  }

  _showBoxWithHtmlTemplate() {
    DeniDlg.box({
      width: '250px',
      height: '100px',      
      htmlTemplate: '<b>Lorem ipsum dolor sit amet</b>, <span style="color:#FE4DFF;">consectetuer adipiscing elit. Aenean commodo</span> ligula eget dolor...'
    });    
  }

  _showGhostSimplesWay() {
    DeniDlg.ghost('<b>Lorem</b> ipsum dolor sit amet, consectetuer...')    
  }

  _showGhostCompleteWay() {
    let timeOut = 3000
    DeniDlg.ghost('<b>Lorem</b> ipsum dolor sit amet, consectetuer...', DeniDlg.Constant.MESSAGE_TYPE.SUCCESS, timeOut, 'Ghost Title Here')
  }

  _showInfo() {
    DeniDlg.info('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>')
  }

  _showConfirm() {
    let dialogPromise = DeniDlg.confirm('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>')
    dialogPromise.then((responseData) => {
      if (responseData.button === 'yes') {
        DeniDlg.ghost('Clicket "yes" button')
      }
    })
  }

  _showWarning() {
    DeniDlg.warning('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>')
  }  

  _showError() {
    DeniDlg.error('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>')
  }  

  _showSuccess() {
    DeniDlg.success('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>')
  }    

  handleChangeSelector(event) {
    DeniDlg.setTheme(event.target.value)
  }
  
  render() {
    return (
      <div className="examples-container">
        <div class="examples-item-title">Box</div>
        <ExampleItem codeExample={ examplesInfo.example01.code } textButton={ examplesInfo.example01.text } clickHandler={ this._showBoxWithUrlTemplate } />
        <ExampleItem codeExample={ examplesInfo.example02.code } textButton={ examplesInfo.example02.text } clickHandler={ this._showBoxWithHtmlTemplate } />        

        <div class="examples-item-title">Ghost</div>
        <ExampleItem codeExample={ examplesInfo.example03.code } textButton={ examplesInfo.example03.text } clickHandler={ this._showGhostSimplesWay } />                
        <ExampleItem codeExample={ examplesInfo.example04.code } textButton={ examplesInfo.example04.text } clickHandler={ this._showGhostCompleteWay } />

        <div class="examples-item-title">
          <div>Dialog</div>
          <div class="dialog-theme">
            <label>Theme</label>
            <select onChange={ this.handleChangeSelector.bind(this) }>
              {
                themes.map(theme => {
                  return (
                    <option key={ theme } value={ theme } >{ theme }</option>
                  )
                })
              }
            </select>
            <span>ex.: DeniDlg.setTheme('red')</span>
          </div>
        </div>        
        <ExampleItem codeExample={ examplesInfo.example05.code } textButton={ examplesInfo.example05.text } clickHandler={ this._showInfo } />
        <ExampleItem codeExample={ examplesInfo.example06.code } textButton={ examplesInfo.example06.text } clickHandler={ this._showConfirm } />
        <ExampleItem codeExample={ examplesInfo.example07.code } textButton={ examplesInfo.example07.text } clickHandler={ this._showWarning } />
        <ExampleItem codeExample={ examplesInfo.example08.code } textButton={ examplesInfo.example08.text } clickHandler={ this._showError } />
        <ExampleItem codeExample={ examplesInfo.example09.code } textButton={ examplesInfo.example09.text } clickHandler={ this._showSuccess } />                                

      </div>
    )
  }

}

export default Examples

let themes = ['', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];