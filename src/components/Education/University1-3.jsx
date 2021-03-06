import React from 'react';
import './Education.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import data from '../../assets/content/university1-3.json';
import ProjectSkills from '../ProjectsSkills/ProjectSkills';

function University13() {
  return (
      <Container className="education">
          <Row>
              <Container>
                  <Row>
                      <a href="https://www.uwo.ca" rel="noopener noreferrer" target="_blank">
                          <h4 className="title-link font-weight-bolder">
                              University of Western Ontario, London,
                              Canada
                          </h4>
                      </a>
                  </Row>
                  <Row>
                      <h5>
                          Honours Specialization in Computer Science
                      </h5>
                  </Row>
                  <Row>
                      <h5>
                          Minor in Software Engineering
                      </h5>
                  </Row>
                  <Row>
                      <h5>
                          GPA: 3.9
                      </h5>
                  </Row>
                  <ProjectSkills data={data} />
              </Container>
          </Row>
          <Row>
              <Link to="/courses">
                  <button type="button" className="learn-more">
                      <span className="circle">
                          <span className="icon arrow" />
                      </span>
                      <h6 className="button-text">See courses and grades</h6>
                  </button>
              </Link>
          </Row>
      </Container>
  );
}

export default University13;
