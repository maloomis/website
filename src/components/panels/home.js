import React from 'react';
import '../../css/home.css';

class Home extends React.Component {
  render() {
    const Javascript = {
      width: '80%'
    };

    const Java = {
      width: '75%'
    };

    const CSharp = {
      width: '50%'
    };

    const Python = {
      width: '30%'
    };

    const HTML = {
      width: '90%'
    };

    const CSS = {
      width: '90%'
    };

    const JSON = {
      width: '90%'
    };

    const Scripting = {
      width: '50%'
    };

    return  <div>
              <div className="row">
                <section className="about-me line col-md-12 padding_30 padbot_45">
                  <div className="section-title">
                    <span></span>
                    <h2>About Me </h2>
                  </div>
                  <p className="top_30">
                    I peaked an interest in computer science my senior year of high school when I took a basic web development class. Since then my love for the field grew, and I went on to pursue a Bachelor's Degree in Information Science at Northeastern University. During my time there, I had several internships including a project management role at Boston Private Bank, a web development role at Collette, and finally as an application developer at Workday, where I decided to continue full time. Through all my experiences, one fact has held true. I love technology and the power it gives you to solve real world problems. I feel fulfilled knowing that in the technical industry, there is always something new to learn and someone to help.
                  </p>
                  <p className="top_30">
                    Outside of work, I like to travel to new places, spend time outdoors (either hiking or skiing), and
                    try different exercise classes. I love exploring new parts of the Bay Area since I spent majority
                    of my life in New England. Additionally, I really enjoy traveling abroad. I spent a month
                    in Bali after graudtion where I was teaching English to local students.
                  </p>
                  <p className="top_30">
                    One of my passions is working with young girls and encouraging them to pursue STEM careers. I've
                    helped organize a Girls Who Code summit day where we hosted the Monterey Girls Who Code chapter for the day. We
                    had several women in tech talk to the girls about why they chose to work in tech and what they like about it.
                    Additionally, we had them participate in a robotics workshop. I like serving as a mentor for young girls because
                    it was female mentors who inspired me to stay in the field when I faced different challenges and doubted my abilities.
                  </p>
                </section>
              </div>

              <div className="row">
                <section className="code-skills col-md-6">
                  <div className="section-title bottom_45">
                    <span></span>
                    <h2>Code Skills</h2>
                  </div>
                  <ul className="skill-list">
                    <li>
                      <h3>Javascript (React, Angular, Node)</h3>
                      <div className="progress">
                        <div className="percentage" style={Javascript}></div>
                      </div>
                    </li>
                    <li>
                      <h3>Java</h3>
                      <div className="progress">
                        <div className="percentage" style={Java}></div>
                      </div>
                    </li>
                    <li>
                      <h3>C#</h3>
                      <div className="progress">
                        <div className="percentage" style={CSharp}></div>
                      </div>
                    </li>
                    <li>
                      <h3>Python</h3>
                      <div className="progress">
                        <div className="percentage" style={Python}></div>
                      </div>
                    </li>
                    <li>
                      <h3>HTML</h3>
                      <div className="progress">
                        <div className="percentage" style={HTML}></div>
                      </div>
                    </li>
                    <li>
                      <h3>CSS</h3>
                      <div className="progress">
                        <div className="percentage" style={CSS}></div>
                      </div>
                    </li>
                    <li>
                      <h3>JSON</h3>
                      <div className="progress">
                        <div className="percentage" style={JSON}></div>
                      </div>
                    </li>
                    <li>
                      <h3>Scripting (Bash, PowerShell, PHP)</h3>
                      <div className="progress">
                        <div className="percentage" style={Scripting}></div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>;
  }
}

export default Home;
