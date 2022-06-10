import './App.css';
import React from 'react';

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.contactHandler = this.contactHandler.bind(this);
    this.projectsHandler = this.projectsHandler.bind(this);
    this.homeHandler = this.homeHandler.bind(this);


    this.state = {
      showOnlyProjects: false,
      showOnlyContact: false,
      showAll: true
    }
  }

  //Function for only showing the contact component
  contactHandler() {
    this.setState({
      showOnlyProjects: false,
      showOnlyContact: true,
      showAll: false
    })
  }

  projectsHandler() {
    this.setState({
      showOnlyProjects: true,
      showOnlyContact: false,
      showAll: false
    })
  }

  homeHandler() {
    this.setState({
      showOnlyProjects: false,
      showOnlyContact: false,
      showAll: true
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation
          projectsHandler={this.projectsHandler}
          contactHandler={this.contactHandler}
          homeHandler={this.homeHandler}
        />

        {this.state.showAll &&
          <div>
            <Main />
            <About />
            <Summary />
            <Projects />
            <Contact />
            <Footer />
          </div>
        }
        {this.state.showOnlyContact &&
          <div>
            <Contact />
            <Footer />
          </div>
        }
        {this.state.showOnlyProjects &&
          <div>
            <Projects />
            <Footer />
          </div>
        }
      </div>
    )
  }



} //End of App class

//Navbar
class Navigation extends React.Component {



  render() {
    return (
      <div class="navigation">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
              <div class="logo">
                <HomeAnchorIcon value="images/logo.svg" />
              </div>
            </div>

            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
              <div class="primary-nav">
                <ul>
                  <li><a onClick={this.props.homeHandler}>Home</a></li>
                  <li><a onClick={this.props.projectsHandler}>Portfolio</a></li>
                  <li><a onClick={this.props.contactHandler}>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

//Main Body Content
class Main extends React.Component {
  render() {
    return (
      <div class="main">
        <div class="container-fluid">
          <div class="row">
            <div class="entry-banner text-center">
              <h1 id="hello">Hello, I'm</h1>
              <h1 id="name">John</h1>
              <h1 id="person-description">UI Developer. UX Desinger. Problem Solver.</h1>
            </div>
          </div>

          <div class="row text-center">
            <div class="banner-buttons">
              <div class="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                <a class="btn btn-default btn-border" href="#about">Info</a>
              </div>

              <div class="col-sm-1 col-md-1">
                <a class="btn btn-default btn-border" href="#projects">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


class About extends React.Component {
  render() {
    return (
      <div class="about" id="about">
        <div class="container-fluid">
          <AboutHeader />
          <AboutHeaderQuote />
          <AboutGeneralDescription />
          <AboutStatisticDescription />
          <AboutOptionButtons />
        </div>
      </div>

    );
  }
}

class AboutHeader extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-12 col-md-12 text-center">
          <div class="about-header">
            <h1>About Me</h1>
          </div>
        </div>
      </div>
    );
  }
}

class AboutHeaderQuote extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-12 col-md-12 text-center">
          <div class="about-header-quote">
            <h3>Sharing a little bit of my story...</h3>
          </div>
        </div>
      </div>
    )
  }
}

class AboutGeneralDescription extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="about-general-description ">
          <div class="col-sm-8 col-md-8 ">
            <h2>General Overview</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
      </div>
    );
  }
}

class AboutStatisticDescription extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="statistic-row">
          <div class="about-statistic-description">
            <div class="col-sm-8 col-md-8">
              <h2>Statistics</h2>
              <h5><em>And for those that don't fancy reading:</em></h5>
              <br />

              <p>Male, 200 years old.</p>
              <p>Five feet 110 inches</p>
              <p>Favorite fonts:Roboto </p>
              <p>Loves to learn new things</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AboutOptionButtons extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="about-option-buttons">
          <div class="col-sm-2 col-md-2">
            <a href="#contact" class="btn btn-default btn-black-border">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}

class Summary extends React.Component {
  render() {
    return (
      <div class="summary">
        <div class="container-fluid">
          <div class="row">
            <DevelopmentSummary />
            <ResponsiveSummary />
          </div>
          <div class="row">
            <IdeasSummary />
            <PassionSummary />
          </div>
        </div>
      </div>

    );
  }
}

class DevelopmentSummary extends React.Component {
  render() {
    return (
      <div class="development-summary">
        <div class="col-sm-1 col-md-1">
          <div class="development-img">
            <img class="img-responsive" src="./images/developerdesign.svg" />
          </div>
        </div>

        <div class="col-sm-4 col-md-4">
          <div class="development-description">
            <h3>Development and Design</h3>
            <p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
          </div>
        </div>
      </div>
    );
  }
}

class ResponsiveSummary extends React.Component {
  render() {
    return (
      <div class="responsive-summary">
        <div class="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
          <div class="responsive-img">
            <img class="img-responsive" src="./images/responsivedesign.svg" />
          </div>
        </div>

        <div class="col-sm-4 col-md-4">
          <div class="responsive-description">
            <h3>Responsive Layouts</h3>
            <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
          </div>
        </div>
      </div>
    );
  }
}

class IdeasSummary extends React.Component {
  render() {
    return (
      <div class="ideas-summary">
        <div class="col-sm-1 col-md-1">
          <div class="idea-img">
            <img class="img-responsive" src="./images/innovativesolutions.svg" />
          </div>
        </div>

        <div class="col-sm-4 col-md-4">
          <div class="idea-description">
            <h3>Ideas and Solutions</h3>
            <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
          </div>
        </div>
      </div>
    );
  }
}

class PassionSummary extends React.Component {
  render() {
    return (
      <div class="passion-summary">
        <div class="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
          <img class="img-responsive" src="./images/passion.svg" />
        </div>

        <div class="col-sm-4 col-md-4">
          <div class="passion-description">
            <h3>Passion and Dedication</h3>
            <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
          </div>
        </div>
      </div>
    )
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div class="projects" id="projects">
        <div class="container-fluid">
          <ProjectsHeader />
          <ProjectsHeaderQuote />
          <ProjectCards />
          <SeeMoreButton />
        </div>
      </div>
    );
  }
}

class ProjectsHeader extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-12 col-md-12 text-center">
          <div class="projects-header">
            <h1>Projects and Portfolio</h1>
          </div>
        </div>
      </div>
    )
  }
}

class ProjectsHeaderQuote extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-12 col-md-12 text-center">
          <div class="projects-header-quote">
            <h3>Sharing my endeavors and passions...</h3>
          </div>
        </div>
      </div>
    );
  }
}

class ProjectCards extends React.Component {
  render() {
    return (
      <div class="row">

        <ProjectCard
          projectClassName="luvtalk-project"
          projectName="LUV TALK Website"
          projectDesc="Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
        />

        <ProjectCard
          projectClassName="personal-website-project"
          projectName="Personal Website"
          projectDesc="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
        />

        <ProjectCard
          projectClassName="strike-zone-project"
          projectName="Strike Zone Analysis"
          projectDesc="Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
        />

      </div>
    );
  }
}

class ProjectCard extends React.Component {
  render() {
    return (

      <div class="col-sm-4 col-md-4 text-center">
        <div class={this.props.projectClassName}>
          <h3>{this.props.projectName}</h3>
          <p>{this.props.projectDesc}</p>
          <div class="row">
            <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
              <div class="project-more-info">
                <HomeAnchorBtn value="More" />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

class SeeMoreButton extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
          <div class="see-more-button">
            <HomeAnchorBtn value="More Projects" />
          </div>
        </div>
      </div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div class="contact" id="contact">
        <div class="container-fluid">
          <div class="row">
            <ContactHeader />
          </div>
          <div class="row">
            <ContactHeaderQuote />
          </div>
          <div class="row">
            <ContactInstructions />
            <ContactFormBody />
          </div>
        </div>
      </div>
    );
  }
}

class ContactHeader extends React.Component {
  render() {
    return (
      <div class="col-sm-12 col-md-12 text-center">
        <div class="contact-header">
          <h1>Contact</h1>
        </div>
      </div>
    )
  }
}

class ContactHeaderQuote extends React.Component {
  render() {
    return (
      <div class="col-sm-12 col-md-12 text-center">
        <div class="contact-header-quote">
          <h4>"XXXXX"</h4>
          <h4>-XXX</h4>
        </div>
      </div>
    )
  }
}

class ContactInstructions extends React.Component {
  render() {
    return (
      <div class="col-sm-6 col-md-6">
        <div class="contact-instructions">
          <h2>Reaching out to me</h2>
          <p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.</p>
          <br />
          <br />
          <br />
          <h2>Contact Information</h2>
          <p>XXXX</p>
          <p>XXXX</p>
          <p>(XXXX)-445-7747</p>
          <p>XXXXXX@gmail.com</p>
        </div>
      </div>
    )
  }
}

class ContactFormBody extends React.Component {
  render() {
    return (
      <div class="col-sm-6 col-md-6">
        <div class="contact-form-body">
          <form>
            <div class="row">
              <div class="col-sm-6 col-md-6">
                <div class="firstname">
                  <h4>Full Name *</h4>
                  <input type="text" placeholder="First Name" />
                </div>
              </div>

              <div class="col-sm-6 col-md-6">
                <div class="lastname">
                  <h4>Full Name *</h4>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="email">
                  <h4>Email *</h4>
                  <input type="text" placeholder="Email" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="message">
                  <h4>Message *</h4>
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                <div class="submit-contact">
                  <HomeAnchorBtn value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <div class="container-fluid">
          <MediaLinks />
          <PhoneAndEmail />
          <div class="row">
            <CompanyInfo />
            <HomeFooter />
            <PortfolioFooter />
            <ResumeFooter />
            <ContactFooter />
          </div>
        </div>
      </div>
    )
  }
}

class MediaLinks extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="media-links">
          <div class="col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
            <div class="facebook">
              <HomeAnchorIcon value="./images/facebook.svg" />
            </div>
          </div>

          <div class="col-sm-1 col-md-1">
            <div class="linkedin">
              <HomeAnchorIcon value="./images/linkedin.svg" />

            </div>
          </div>

          <div class="col-sm-1 col-md-1">
            <div class="pinterest">
              <HomeAnchorIcon value="./images/pinterest.svg" />
            </div>
          </div>

          <div class="col-sm-1 col-md-1">
            <div class="email-icon">
              <HomeAnchorIcon value="./images/email.svg" />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

class PhoneAndEmail extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-6 col-md-6 text-right">
          <div class="personal-contact phone">
            <h4>Phone: XXXXXX</h4>
          </div>
        </div>

        <div class="col-sm-6 col-md-6 text-left">
          <div class="personal-contact email-personal-contact">
            <h4>Email: XXXXX@gmail.com</h4>
          </div>
        </div>
      </div>

    )
  }
}

class CompanyInfo extends React.Component {
  render() {
    return (
      <div class="col-sm-4 col-md-4 text-center">
        <div class="company-information">
          <h3>XXXX</h3>
          <h4>Copyright &copy; 2021</h4>
          <h4>NY</h4>
        </div>
      </div>
    );
  }
}

class HomeFooter extends React.Component {
  render() {
    return (
      <div class="col-sm-2 col-md-2 text-center">
        <div class="home-footer">
          <h4><HomeAnchorText value="Home" /></h4>
        </div>
      </div>
    );
  }
}

class PortfolioFooter extends React.Component {
  render() {
    return (
      <div class="col-sm-2 col-md-2 text-center">
        <div class="portfolio-footer">
          <h4><HomeAnchorText value="Portfolio" /></h4>
          <ul>
            <li><HomeAnchorText value="Project1" /></li>
            <li><HomeAnchorText value="Project2" /></li>
            <li><HomeAnchorText value="Project3" /></li>
            <li><HomeAnchorText value="See All" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

class ResumeFooter extends React.Component {
  render() {
    return (
      <div class="col-sm-2 col-md-2 text-center">
        <div class="resume-footer">
          <h4><HomeAnchorText value="Resume" /></h4>
          <ul>
            <li><HomeAnchorText value="Download" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

class ContactFooter extends React.Component {
  render() {
    return (
      <div class="col-sm-2 col-md-2 text-center">
        <div class="contact-footer">
          <h4><HomeAnchorText value="Contact" /></h4>
        </div>
      </div>
    );
  }
}

class HomeAnchorBtn extends React.Component {
  render() {
    return (
      <a class="btn btn-default btn-border" href="#">{this.props.value}</a>
    )
  }
}

class HomeAnchorIcon extends React.Component {
  render() {
    return (
      <a href="#"><img class="img-responsive" src={this.props.value} /></a>
    )
  }
}

class HomeAnchorText extends React.Component {
  render() {
    return (
      <a href="#">{this.props.value}</a>
    )
  }
}

//export default App;
