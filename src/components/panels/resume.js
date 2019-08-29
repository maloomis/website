import React from 'react';
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../css/resume.css';
import resume from '../../doc/Resume.pdf'

class Resume extends React.Component {
  render() {
    return  <div>
              <div className="row">
                <section className="education">
                  <div className="section-title top_30">
                    <span></span>
                    <h2>Resume </h2>
                  </div>
                  <div className="working-history col-md-6 padding_15 padbot_30">
                    <ul className="timeline col-md-12 top_30">
                      <li>
                        <FontAwesomeIcon className="fa fa-suitcase" icon={faSuitcase} />
                        <h2 className="timeline-title">Working History</h2>
                      </li>
                      <li>
                        <h3 className="line-title">Application Developer - Workday</h3>
                        <span>August 2018 - Present</span>
                        <p className="little-text">
                          Worked closely with other developers, quality assurance engineers, product managers, and automators to complete several projects on the Time Tracking Application using Agile methodology;
                          Served as Web Services advocate for the team; Triaged customer blockers
                        </p>
                      </li>
                      <li>
                        <h3 className="line-title">Application Developer Intern - Workday</h3>
                        <span>May - August 2017</span>
                        <p className="little-text">
                          Learned proprietary language (Xpresso); Completed several projects in the Time Tracking Application
                        </p>
                      </li>
                      <li>
                        <h3 className="line-title">Web Development Intern - Collette</h3>
                        <span>January - August 2016</span>
                        <p className="little-text">
                          Wrote and implemented script to delete GitHub branches older than 6 months;
                          Debugged and modified website using C#, Javascrip, jQuerym and HTML; Collaborated
                          with clients (marketing team) to establish problem specifications with our CMS, Sitecore
                        </p>
                      </li>
                      <li>
                        <h3 className="line-title">Business Analyst - Boston Private Bank & Trust</h3>
                        <span>January - June 2015</span>
                        <p className="little-text">
                          Drafted deliverables for various projects such as test cases and status reports;
                          Coordinated User Acceptance Testing for the implementation of various systems across the
                          bank's different business areas
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="education-history col-md-6 padding_15 padbot_30">
                    <ul className="timeline col-md-12 top_30">
                      <li>
                        <FontAwesomeIcon className="fa" icon={faGraduationCap} />
                        <h2 className="timeline-title">Education History</h2>
                      </li>
                      <li>
                        <h3 className="line-title">Northeastern University</h3>
                        <span>2013-2018</span>
                        <p className="little-text">
                          Bachelor's in Information Science<br />
                          Boston, MA
                        </p>
                      </li>
                      <li>
                        <h3 className="line-title">Central Catholic High School</h3>
                        <span>2009-2013</span>
                        <p className="little-text">
                          Lawrence, MA
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="top_15 bottom_30">
                <a className="site-btn btn" href={resume}>
                  Download Resume
                </a>
              </div>
            </div>
;
  }
}

export default Resume;
