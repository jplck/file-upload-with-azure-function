import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null
    }
    this.uploadFile = this.uploadFile.bind(this)
    this.selectFileToUploadHandler = this.selectFileToUploadHandler.bind(this)
  }

  selectFileToUploadHandler(event) {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  uploadFile() {
    if (!this.state.selectedFile) {
      alert("Select file first.")
      return
    }

    var data = new FormData()
    data.append("file", this.state.selectedFile)

    axios.post("http://localhost:7071/api/UploadFunc", data, {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    }).then( res =>  {
      console.log(res.statusText)
    })
  }
  
  render() {
    return (
      <div className="App">
        <div><input type="file" name="file" onChange={this.selectFileToUploadHandler}/></div>
        <div><input type="button" name="upload" value="upload" onClick={this.uploadFile}/></div>
      </div>
    )
  }
}

export default App;
