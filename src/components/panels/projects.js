import React from 'react';

class Projects extends React.Component {
  render() {
    /*Projects Data */
    const projects = [{
                    link: 'https://github.com/maloomis/budgetapp',
                    title: "Javascript Practice - Budget App"
                  },
                  {
                    link: 'https://github.com/maloomis/recipeapp',
                    title: "Javascript Practice - Recipe App"
                  }
                  ]
    return  <div className="col-md-12 bottom_30">
              <div className="col-md-12 content-header">
                <div className="section-title top_30 bottom_15">
                  <span></span>
                  <h2>Projects</h2>
                </div>
                <div>
                {projects.map((value) => {
                    return  <p><a key={value} href={value.link} className="blog-box">
                              <div className="blog-info">
                                <h2 className="title">{value.title}</h2>
                              </div>
                            </a></p> 
                })}
                </ div>
                </div>
            </div>;
  }
}

export default Projects;
