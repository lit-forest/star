import React, { Component } from 'react';
import './solution.scss';

class Solutions extends Component {
    render() {
        return (
            <mian className="root">
                <div className="muck-up">
                    <div className="overlay"></div>
                    <div className="top">
                        <div className="nav">
                            <span className="ion-android-menu"></span>
                            <p>Timeline</p>
                            <span className="ion-ios-more-outline"></span>
                        </div>
                        <div className="user-profile">
                            <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/profile.jpg" />
                            <div className="user-details">
                                <h4>Arjun Amgain</h4>
                                <p>Web/Front-end Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="filter-btn">
                        <a id="one" href="#"><i className="ion-ios-checkmark-outline"></i></a>
                        <a id="two" href="#"><i className="ion-ios-alarm-outline"></i></a>
                        <a id="three" href="#"><i className="ion-ios-heart-outline"></i></a>
                        <a id="all" href="#"><i className="ion-ios-star-outline"></i></a>
                        <span className="toggle-btn ion-android-funnel"></span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="bottom">
                        <div className="title">
                            <h3>My Tasks</h3>
                            <small>February 8,2015</small>
                        </div>
                        <ul className="tasks">
                            <li className="one red">
                                <span className="task-title">Make New Icon</span>
                                <span className="task-time">5pm</span>
                                <span className="task-cat">Web App</span>

                            </li>
                            <li className="one red">
                                <span className="task-title">Catch up with Brian</span>
                                <span className="task-time">3pm</span>
                                <span className="task-cat">Mobile Project</span>

                            </li>
                            <li className="two green">
                                <span className="task-title">Design Explorations</span>
                                <span className="task-time">2pm</span>
                                <span className="task-cat">Company Web site</span>

                            </li>
                            <li className="tow green hang">
                                <span className="task-title">Team Meeting</span>
                                <span className="task-time">2pm</span>
                                <span className="task-cat">Hangouts</span>
                                <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/2.jpg" />
                                <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/3.jpg" />
                                <img src="https://raw.githubusercontent.com/arjunamgain/FilterMenu/master/images/profile.jpg" />
                            </li>
                            <li className="three yellow">
                                <span className="task-title">New Projects</span>
                                <span className="task-time">2pm</span>
                                <span className="task-cat">Starting</span>
                            </li>
                            <li className="three yellow">
                                <span className="task-title">Lunch with Mary</span>
                                <span className="task-time">2pm</span>
                                <span className="task-cat">Grill House</span>
                            </li>
                            <li className="three yellow">
                                <span className="task-title">Team Meeting</span>
                                <span className="task-time">2pm</span>
                                <span className="task-cat">Hangouts</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </mian >
        );
    }
}

export default Solutions;