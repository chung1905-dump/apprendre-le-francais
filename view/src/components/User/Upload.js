import React, { Component } from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "Choose file",
      file: ""
    };
  }

  onChange = (e) => {
    let fileName = e.target.value;
    const file = e.target.files[0];
    console.log(file)
    this.setState({ 
      fileName,
      file 
    });
  };

  uploadFile = (e) => {
    e.preventDefault();
    // const file = e.target.files[0];
    let formData = new FormData();
    formData.append('customFile', this.state.file, 'customFile');
    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then(res => console.log(res));
  }

  render() {
    const { fileName } = this.state;

    return (
      <div className="container">
        <div>
          <h2>Upload an audio</h2>
        </div>
        <div className="row justify-content-md-center">
          <form onSubmit={this.uploadFile}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Title:</label>
              <input type="text" className="form-control" name="title" placeholder="Title" />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Level</label>
              <input type="text" className="form-control" name="level" placeholder="Level" />
            </div>
            <label>Your audio (mp3 only):</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" onChange={this.onChange} id="customFile" />
              <label className="custom-file-label">{fileName}</label>
            </div>
            <label>Script:</label>
            <div className="form-group">
              <textarea className="form-control" id="Script" rows="3" placeholder="text here..." />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
