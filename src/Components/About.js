import img from "./images/profile.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="90%"
              width="50%"
              alt="user"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Ambassador</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              As a Software Ambassador, I combine the technical knowledge of the domains automated driving, DevOps, and software tooling with profound
              project management skills to encourage and implement digital transformation and a pragmatic way of working.
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
              Always interested in challenging positions where I can acquire new skills and knowledge, work on state-of-the art topics and 
              create awesome products within a great team to delight our internal and external customers.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Ravensburg, Germany</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:braunagel.christian+githubpages@gmail.com">
                      braunagel.christian at gmail.com"
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
