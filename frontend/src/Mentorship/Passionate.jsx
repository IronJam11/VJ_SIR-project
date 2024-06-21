import "./passionate.css";
import CardsCollection from "./CardsCollection";
import Go from "../assets/images/Go.png";
export default function Passionate() {
  return (
    <>
      <section id="Passionate">
        <div className=" passionate-heading">
          <h1>
            Passionate <span>Mentors</span>
          </h1>
          <h2>Dedicated To Help You</h2>

          <div className="passionate-pera">
            <div className="passionate-line"></div>
            <p>
              “A mentor is like a sturdy trellis, guiding and supporting a young
              vine as it reaches towards the sun, helping it climb higher and
              blossom into its full potential.”
            </p>
          </div>
        </div>

        <div className="mentorship-footer">
          <div>
            <h1>
              Connect <br /> and <br />
              Grow.
            </h1>

            <div className="mentorship-footerimg">
              <img src={Go} alt="" />
            </div>
          </div>

          <CardsCollection />
        </div>
      </section>
    </>
  );
}
