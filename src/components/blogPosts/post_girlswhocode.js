import React from 'react';
import '../../css/blog_post.css';
import Gallery from 'react-photo-gallery';
import girlswhocode_img from '../../img/girlswhocode.jpg';

import girlswhocode1_img from '../../img/girlswhocode_1.JPG';
import girlswhocode2_img from '../../img/girlswhocode_2.JPG';
import girlswhocode3_img from '../../img/girlswhocode_3.JPG';
import girlswhocode4_img from '../../img/girlswhocode_4.JPG';
import girlswhocode5_img from '../../img/girlswhocode_5.JPG';


class PostGirlsWhoCode extends React.Component {
  render() {
    /*Photos for gallery*/
    const photos = [
      {
        src: girlswhocode1_img,
        width: 4,
        height: 3
      },
      {
        src: girlswhocode2_img,
        width: 4,
        height: 3
      },
      {
        src: girlswhocode3_img,
        width: 3,
        height: 2
      },
      {
        src: girlswhocode4_img,
        width: 3,
        height: 2
      },
      {
        src: girlswhocode5_img,
        width: 3,
        height: 2
      }
    ]
    return  <div className="post">
              <div className="blog-image">
                <img src={girlswhocode_img} alt="test" />
              </div>
              <div className="post-content">
                <h1 className="blog-title bottom_30 top_30">
                  Girls Who Code Summit - Monterey
                </h1>
                <p>
                  Workday runs a program called Generation Workday, which allows post grad
                  entry level workers to become more acclimated to the working world.
                  One of the requirements of completing the "GW" program is a capstone project.
                  The project has loose qualifications, but ideally it should be something that is
                  impactful to the community.
                </p>
                <br/>
                <p>
                  One of my coworkers I met through the GW program, Meya Gorbea, previously helped run
                  the Girls Who Code chapter in Monterey, where she went to college. We both connected through
                  our passion to encourage young women to pursue careers in technology. We decided that for our capstone
                  project it would be meaningful to create an event for the Girls Who Code chapter she used to work with.
                </p>
                <br />
                <p>
                  We recruited four other girls who studied computer science to help us with the project. Together we created a "Summit Day"
                  that would include a brief introduction on what Workday and Girls Who Code are, ice breaker activities, a tech talk panel
                  with women working in the field, and a robotics workshop. We hosted the event at Monterey Peninsula College and had around 20
                  attendees.
                </p>
                <br />
                <p>
                  Overall, the event was a major success. The girls had a lot of fun. They really enjoyed building the robots
                  and playing with the code to make the robots move in different ways.
                  Having been in the tech scene for about 6 years now, it was refreshing to see so many young girls excited about
                  working with computers. Hopefully, this is an indication that the gender gap in software engineering will become smaller with
                  each new generation.
                </p>

                <Gallery photos={photos} />
                <div className="top_15 bottom_30">
                  <a className="site-btn btn" href="/blog">
                    Back to Blog
                  </a>
                </div>
              </div>
            </div>;
  }
}

export default PostGirlsWhoCode;
