import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "January 2024 - Present",
      cardTitle: "Mercedes-Benz AG",
      cardSubtitle: "Product Owner | DevOps Engineer",
      cardDetailedText: [
        "Leading a CI/CD consultancy team as Product Owner in the SAFe framework.",
        "Consulting on and implementing solutions for internal customers to automate sw delivery from repo setup to unit testing.",
        "Promote company-wide standards and best practices for tools and way of working."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "June 2021 – December 2023",
      cardTitle: "Mercedes-Benz AG",
      cardSubtitle: "Product Owner | Software Engineer",
      cardDetailedText: [
        "Leading a developer team as Product Owner focussing on the development of an internal IDE.",
        "Design and implementation of frontend and backend features of the IDE and its subcomponents.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "January 2019 – May 2021",
      cardTitle: "Mercedes-Benz AG",
      cardSubtitle: "System Engineer",
      cardDetailedText: [
        "Cooperation project between Mercedes-Benz AG & BMW AG",
        "System design for driver assistance function of level 3 and 4.",
        "Lead engineer for validation group \"Environmental perception\".",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "February 2017 – December 2018",
      cardTitle: "Mercedes-Benz AG",
      cardSubtitle: "Customer Function Owner",
      cardDetailedText: [
        "Responsible for driver assistance package Generation 4 in all MB compact cars.",
        "Lead developer for map-based driver assistance functions.",
      ].map(function (text){
        return <li>{text}</li>;
      }),
    }
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
