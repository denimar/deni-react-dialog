export default {
  example01: {
    text: 'Box with urlTemplate',
    code: `
      DeniDlg.box({
        width: '680px',
        height: '252px',      
        urlTemplate: 'examples/components/box/box-template.htm'
      })    
    `
  },
  example02: {
    text: 'Box with htmlTemplate',
    code: `
      DeniDlg.box({
        width: '250px',
        height: '100px',      
        htmlTemplate: '<b>Lorem ipsum dolor sit amet</b>, <span style="color:#FE4DFF;">consectetuer adipiscing elit. Aenean commodo</span> ligula eget dolor...'
      });    
    `
  },
  example03: {
    text: 'Ghost - simplest way',
    code: `
      DeniDlg.ghost('<b>Lorem</b> ipsum dolor sit amet, consectetuer...')
    `
  },
  example04: {
    text: 'Ghost - complete way',
    code: `
      let timeOut = 3000
      DeniDlg.ghost('<b>Lorem</b> ipsum dolor sit amet, consectetuer...', DeniDlg.Constant.MESSAGE_TYPE.SUCCESS, timeOut, 'Ghost Title Here');
    `
  },
  example05: {
    text: 'Dialog - info',
    code: `
      DeniDlg.info('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>');
    `
  },
  example06: {
    text: 'Dialog - confirm',
    code: `
      DeniDlg.info('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>');
    `
  },
  example07: {
    text: 'Dialog - warming',
    code: `
      DeniDlg.info('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>');
    `
  },
  example08: {
    text: 'Dialog - error',
    code: `
      DeniDlg.info('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>');
    `
  },
  example09: {
    text: 'Dialog - success',
    code: `
      DeniDlg.info('<b>Lorem</b> ipsum dolor sit amet, <span style="color:#FE4DFF;">consectetuer...</span>');
    `
  }



}