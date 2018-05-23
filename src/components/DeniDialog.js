import React from 'react'
import Box from './Box'
import Constant from './Constant'
import Ghost from './Ghost'
import Dialog from './Dialog'

let _box = new Box();
let _ghost = new Ghost();
let _dialog = new Dialog();

export const DeniDlg = { 
  box: _box.show.bind(_box),
  Constant: Constant,

  ghost: _ghost.show.bind(_ghost),
  dialog: _dialog.dialog.bind(_dialog),    
  setTheme: _dialog.setTheme.bind(_dialog),
  info: _dialog.info.bind(_dialog),
  success: _dialog.success.bind(_dialog),  
  error: _dialog.error.bind(_dialog),  
  warning: _dialog.warning.bind(_dialog),  
  confirm: _dialog.confirm.bind(_dialog)
}

const DeniDialog = DeniDlg;
Object.assign({}, DeniDialog, DeniDlg);
export default DeniDialog;
