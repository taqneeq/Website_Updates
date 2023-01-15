import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

function CarouselFadeExample() {
  return (
    <Carousel fade autoplay>
      <Carousel.Item>
        <section className="d-flex justify-content-center pf-card-list">
          <div className="pf-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1669842504837-ac6c1bad2bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              height={256}
              style={{ width: "full" }}
            ></img>
            <div className="pf-card-header">
              <h2>Datathon</h2>
              <p>
                In these event,participants will be given a business problem and
                data related to it.They have to solve the problem using ML
                models.
              </p>
              </div>
            </div>
          
          <div className="pf-card">
            <div className="pf-card-header">
              <img
                src="https://techfest.org/static/resources/competitions/pics/meshmerize.jpg"
                style={{ width: "full" }}
              ></img>
              <h2>Meshmerize</h2>
               <p>
                Teams must build a line follower bot that can keep track of
                directions while going through a maze. It must analyze the path
                in the Dry Run and use this information in the Actual Run to
                traverse the maze to reach the ending point in the minimum
                possible time
              </p>
              </div>

             
            </div>
        
          <div className="pf-card">
            <div className="pf-card-header">
              <img
                height={256}
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                style={{"width":"90%"}}
              ></img>
              <h2>Find The Bug</h2>
               <p>
                In these event,participants will be given a buggy webiste and
                they have to find a bug and report it.
              </p>
              </div>
            </div>
     
        </section>
      </Carousel.Item>

      <Carousel.Item>
        <section className="d-flex justify-content-center pf-card-list">
          <div className="pf-card">
            <img
              src="https://techfest.org/static/resources/competitions/pics/codecode.jpg"
              height={256}
              style={{ width: "100%" }}
            ></img>
            <div className="pf-card-header">
              <h2>CoDecode</h2>
               <p>
                Teams are required to unravel real-life issues through coding.
                Participants should tackle the most significant conceivable
                questions in indicated time interim in the most proficient way.
                The programming aptitudes of members would be tested in this
                competition.
              </p>
            </div>
            </div>
    
          <div className="pf-card">
            <div className="pf-card-header">
              <img
                src="https://techfest.org/static/resources/competitions/pics/boeing.jpg"
                style={{ width: "100%" }}
              ></img>
              <h2>Boeing AeroModelling</h2>
              <p>
                The competition requires the participants to design and
                fabricate a RC plane (ready made Planes are not allowed) and
                perform a set of maneuvers.
              </p>
            </div>
          </div>
          <div className="pf-card">
            <div className="pf-card-header">
              <img
                src="https://techfest.org/static/resources/competitions/pics/goc.jpeg"
                style={{ width: "100%" }}
              ></img>
              <h2>Game of Codes</h2>
              <p>
                Build a Discord bot or a game related to this year's techfest
                theme, “A Submerged Sojourn”! This competition is open-ended to
                simulate your creativity, and encourage you to come up with some
                imaginative ideas.
              </p>
            </div>
          </div>
        </section>
      </Carousel.Item>
      <CarouselItem>
        <section className="d-flex justify-content-center pf-card-list">
          <div className="pf-card">
            <img
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              style={{ width: "100%", height: "256px" }}
            ></img>
            <div className="pf-card-header">
              <h2>Datathon</h2>
              <p>
                In these event,participants will be given a business problem and
                data related to it.They have to solve the problem using ML
                models.
              </p>
            </div>
          </div>
          <div className="pf-card">
            <div className="pf-card-header">
              <img
                src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style={{ width: "100%" }}
              ></img>
              <h2>Meshmerize</h2>
              <p>
                Teams must build a line follower bot that can keep track of
                directions while going through a maze. It must analyze the path
                in the Dry Run and use this information in the Actual Run to
                traverse the maze to reach the ending point in the minimum
                possible time
              </p>
            </div>
          </div>
          <div className="pf-card">
            <div className="pf-card-header">
              <img
                src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style={{ width: "100%" }}
              ></img>
              <h2>Find The Bug</h2>
              <p>
                In these event,participants will be given a buggy webiste and
                they have to find a bug and report it.
              </p>
            </div>
          </div>
        </section>
      </CarouselItem>
    </Carousel>
  );
}

export default CarouselFadeExample;
