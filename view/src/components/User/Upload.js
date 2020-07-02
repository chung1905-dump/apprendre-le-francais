import React, {Component} from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonData: {},
      fileName: "Choose file",
      file: ""
    };
  }

  onAudioChange = (e) => {
    let fileName = e.target.value;
    const file = e.target.files[0];
    this.setState({
      fileName,
      file
    });
  };

  onInputChange = (e) => {
    this.setState({
      lessonData: Object.assign(this.state.lessonData, {
        [e.target.name]: e.target.value
      })
    });
    console.log(this.state.lessonData);
  };

  uploadFile = (e) => {
    e.preventDefault();
    // const file = e.target.files[0];
    let formData = new FormData();
    for (let name in this.state.lessonData) {
      if (!this.state.lessonData.hasOwnProperty(name)) {
        continue
      }
      formData.append(name, this.state.lessonData[name]);
    }
    formData.append('customFile', this.state.file, 'customFile');
    formData.append('token', localStorage.getItem('alf_user_token'));
    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then(res => {
      res.json().then((data) => {
        window.alert(data.message);
        if (data.status) {
          this.props.history.push('/');
        }
      });
    });
  };

  render() {
    const {fileName} = this.state;

    return (
      <div className="container">
        <div>
          <h2>Upload an audio</h2>
        </div>
        <div className="row justify-content-md-center">
          <form onSubmit={this.uploadFile}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Title:</label>
              <input type="text" className="form-control" name="title" onChange={this.onInputChange}
                     placeholder="Title"/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Level</label>
              <select className="form-control" name="level" onChange={this.onInputChange}>
                <option>--Select Level--</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
            </div>
            <label>Your audio (mp3 only):</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" onChange={this.onAudioChange} id="customFile"/>
              <label className="custom-file-label">{fileName}</label>
            </div>
            <label>Script:</label>
            <div className="form-group">
              <textarea className="form-control" id="Script" rows="3" onChange={this.onInputChange}
                        name="script" placeholder="text here..."/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
