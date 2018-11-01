import React, { Component } from 'react';
import Lessons from "../data/lessons";

class LearnContent extends Component {
    render() {
        const name = this.props.match.params.name

        let result = Lessons.filter(obj => {
            return obj.url === name
        })

        let youtubeUrl = result[0].youtube_url 
        
        return (
            <div className="container">
                <div className="text-center">
                    <div>
                        <div className="embed-responsive embed-responsive-16by9 border border-dark rounded">
                            <iframe className="embed-responsive-item" src={youtubeUrl} />
                        </div>
                        <div className="mt-3">
                            <div className="form-group">
                                <label>Answer</label>
                                <textarea className="form-control" rows={5} id="answer" defaultValue={""} />
                            </div>
                        </div>
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default LearnContent;