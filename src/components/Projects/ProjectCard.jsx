import React from 'react';
import './Projects.scss';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gm from '../../assets/gm.jpg';
import resources from '../../assets/resources.jpg';
import robots from '../../assets/robots.jpg';
import courses from '../../assets/courses.png';
import portfolio from '../../assets/portfolio.png';
import sysinfo from '../../assets/sysinfo.png';

function ProjectCard({
  projectName, projectDescription, languages, gitHubURL,
}) {
  // const [open, setOpen] = useState(false);

  const image = () => {
    if (projectName === 'IOM') {
      return gm;
    }

    if (projectName === 'Resource Management') {
      return resources;
    }

    if (projectName === 'Junior Soccer Robots') {
      return robots;
    }

    if (projectName === 'Course Management') {
      return courses;
    }

    if (projectName === 'Portfolio Website') {
      return portfolio;
    }

    if (projectName === 'System Info') {
      return sysinfo;
    }

    return '';
  };

  return (
      <Card className="regular-card" bg="dark">
          <div className="img-div">
              <Card.Img src={image()} />
          </div>
          <Card.Body className="regular-card-body">
              <div>
                  {gitHubURL !== ''
                      && (
                      <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                          <h4 className="font-weight-bolder d-inline">
                              {projectName}
                          </h4>
                      </a>
                      )}
                  {gitHubURL === ''
                      && (
                      <h4 className="font-weight-bolder d-inline">
                          {projectName}
                      </h4>
                      )}
                  {projectDescription.split('\n').map((line) => (<h5>{line}</h5>))}
              </div>
              {/* <div className="project-name-container icon" onClick={() => setOpen(!open)}> */}
              {/*    {open && <FontAwesomeIcon icon={faChevronUp} color={"#99cfe0"}/>} */}
              {/*    {!open && <FontAwesomeIcon icon={faChevronDown} color={"#99cfe0"}/>} */}
              {/* </div> */}
              {/* <Collapse in={open}> */}
              {/*    <div></div> */}
              {/* </Collapse> */}
          </Card.Body>

          <div className="regular-card-footer">
              <div className="regular-card-langs">
                  {languages.map((type) => (
                      <h6 className="lang">
                          {type}
                      </h6>
                  ))}
              </div>
              {gitHubURL !== ''
                  && (
                  <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="icon" icon={faGithub} color="#97a0ba" />
                  </a>
                  )}

          </div>
      </Card>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  gitHubURL: PropTypes.string,
};

ProjectCard.defaultProps = {
  projectName: '',
  projectDescription: '',
  gitHubURL: '',
};

export default ProjectCard;
