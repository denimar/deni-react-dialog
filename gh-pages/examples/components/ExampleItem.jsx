import React from 'react'
import './ExampleItem.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

class ExampleItem extends React.Component {

  render() {
    return (
      <div className="examples-item-container">
        <button onClick={ this.props.clickHandler }>{ this.props.textButton }</button>
        <SyntaxHighlighter language='javascript' style={ docco }>
          { this.props.codeExample }
        </SyntaxHighlighter>                  
      </div>  
    )
  }

}

export default ExampleItem