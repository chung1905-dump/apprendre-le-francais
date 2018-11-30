import React, { Component } from 'react';

class Upload extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Upload an audio</h2>
        </div>
        <div className="row justify-content-md-center">
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Title:</label>
              <input type="text" class="form-control" name="title" placeholder="Title" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Level</label>
              <input type="text" className="form-control" name="level" placeholder="Level" />
            </div>
            <label>Your audio (mp3 only) :</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label">Choose file</label>
            </div>
            <label>Script :</label>
            <div className="form-group">
              <textarea className="form-control" id="Script" rows="3" placeholder="text here..."></textarea>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
