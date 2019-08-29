import React from 'react';
import '../../css/profile.css';
import profile_img from '../../img/profile.jpg';

class Profile extends React.Component {
  render() {
    return  <div className="profile">
              <div className="profile-name">
                <span className="name">Mallory Loomis</span>
                <br/>
                <span className="job">Software Engineer</span>
              </div>
              <figure className="profile-image">
                <img src={profile_img} alt="profile" />
              </figure>
              <ul className="profile-information">
                <li></li>
                <li>
                  <p>
                    <span>Name: </span>
                     Mallory Loomis
                  </p>
                </li>
                <li>
                  <p>
                    <span>Job: </span>
                     App Developer @ Workday
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email: </span>
                     loomismallory95@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <span>Cell Number: </span>
                     603-247-7992
                  </p>
                </li>
              </ul>
            </div>;
  }
}

export default Profile;
