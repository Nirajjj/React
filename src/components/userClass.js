import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;

    return (
      <div className="about-card-container">
        <div className="about-card">
          <div>
            <h1 className="font-bold text-xl">Niraj Parab</h1>
            <p>
              🚀 Dynamic self-taught full-stack developer evolving from a
              successful background in management. Proficient in both front-end
              and back-end technologies, I bring a unique fusion of technical
              prowess and robust soft skills. Adept at creative problem-solving
              and collaborative efforts, I leverage strong communication and
              interpersonal skills to drive innovation in diverse team
              environments. Excited to seamlessly integrate technical and soft
              skills in a vibrant tech setting!
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl">Website Details</h1>
            <p>
              🚀Dine with dynamism! Book your next restaurant experience through
              a captivating single-page React application, fueled by the live
              power of the Swiggy Live API. This data-driven approach drives a
              conflict-driven, single-page application (SPA) experience, where
              real-time information seamlessly transforms the interface,
              captivating users with an ever-evolving journey. Dive into live
              availability updates, explore dynamic menus, and book your perfect
              table instantly - all within a single, captivating website.
            </p>
            <h3>
              <a
                className="font-bold text-xl underline"
                href="https://github.com/Nirajjj/React"
              >
                click here to see the code
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
