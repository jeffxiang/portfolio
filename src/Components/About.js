import React, { Component } from 'react';
import Fade from 'react-reveal';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var country = this.props.data.address.country;
         var city = this.props.data.address.city;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <Fade duration={1000}>
            <section id="about">
               <div className="row">
                  <div className="three columns">
                     <img className="profile-pic" src={profilepic} alt="Daryl Lim Profile Picture" />
                  </div>
                  <div className="nine columns main-col">
                     <h2>About Me</h2>

                     <p>{bio}</p>
                     <div className="row">
                        <div className="columns contact-details">
                           <h2>Contact Details</h2>
                           <p className="address">
                              <span>{name}</span><br />
                              <span>{city}, {country}</span><br />
                              <span>{email}</span>
                           </p>
                        </div>
                        <div className="columns download">
                           <p>
                              <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Resume</a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </section>
         </Fade>
      );
   }
}

export default About;
