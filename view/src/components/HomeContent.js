import React, { Component } from 'react';
import "../css/home-content.css"
class HomeContent extends Component {
    render() {
        return (
            <div>
                <div className="container background h-500px">
                    <div className="text-center">
                        <section className="home-content">
                            <div className="Slogan">
                                <h1 className="text-light">Learn Frencais For The Future</h1>
                                <p className="text-light">Web For French's Learner </p>
                            </div>
                            <div className="content">
                                Khong biet viet gi
                            </div>
                            <button className="btn-primary">Get Started</button>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent;