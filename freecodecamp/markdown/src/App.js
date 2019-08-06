import React, { Component } from 'react';
import './App.css';

let marked = require('marked')

class App extends Component {
  state = {
    markdown: ''
  }

  updateMarkdown = function(markdown) {
    this.setState({ markdown })
  }
  render () {
    let { markdown } = this.state
    return (
        <>
        <div>
          <h1>Editor</h1>
          <textarea id="editor" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></textarea>
        </div>

        <h1>Previewer</h1>
        <div className="previewer"  dangerouslySetInnerHTML = {{__html: marked(markdown)}}></div>
        </>
    );
  }
}

export default App;
