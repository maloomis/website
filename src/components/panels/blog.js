import React from 'react';
import '../../css/blog.css';
import girlswhocode_img from '../../img/girlswhocode.jpg';

class Blog extends React.Component {
  render() {
    /*blog posts data*/
    const posts = [{
                    link: '/post_girlswhocode',
                    img: girlswhocode_img,
                    title: "Girls Who Code - Monterey Chapter Summit"
                  }]

    return  <div className="blog col-md-12 bottom_30">
              <div className="col-md-12 content-header">
                <div className="section-title top_30 bottom_15">
                  <span></span>
                  <h2>Blog Posts</h2>
                </div>
                  {posts.map((value) => {
                      return  <a key={value} href={value.link} className="blog-box">
                                <div className="blog-img">
                                  <img src={value.img} alt="test" />
                                </div>
                                <div className="blog-info">
                                  <h2 className="title">{value.title}</h2>
                                  <p className="little-text">
                                    Hosted a Girls Who Code Summit for the Monterey Chapter.
                                  </p>
                                </div>
                              </a>
                  })}
              </div>
            </div>;
  }
}

export default Blog;
