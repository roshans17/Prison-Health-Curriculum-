import { faBorderNone, faDove } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import data from "./Images/vaccine-hesitancy-blog_pr.jpg";
import article from "./Images/As States Expand Vaccine Eligibility, Many People in Prison Still Wait for Shots _ The Marshall Project.pdf";
import Survey from "./components/Survey";
function Module1() {
  return [
    {
      title: "The Looming Crisis of COVID-19 in America's Jails and Prisons",
      content: (
        <div className="Intro">
          <p>
            <span>Accessibility and trust in biotechnology is crucial. </span>
            <br></br> In this module, learn how the COVID-19 pandemic has
            exposed just how crucial these two factors are in terms of the
            prison population.
            <br></br>
            <br></br>
          </p>
          <iframe
            frameborder="0"
            scrolling="no"
            height="130"
            width="100%"
            src="https://www.wnyc.org/widgets/ondemand_player/wnycstudios/#file=/audio/json/1006859/&share=1"
          ></iframe>
        </div>
      ),
      id: uuidv4(),
      active: true,
    },

    {
      title:
        "As States Expand Vaccine Eligibility, Many People in Prison Still Wait for Shots",
      content: (
        <div className="Access">
          <h3>
            {" "}
            Accessibility of Biotechnology
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <p>
            At this point in the pandemic, we have learned that vaccinations are
            one of the best defenses against the virus. Unfortunately, data
            shows that vaccine uptake within prisons are lagging.
            <span>
              As of April 6th, The Marshall Project stated that fewer than 20%
              of state and federal prisoners had been vaccinated.
            </span>
            <br></br>
            <br></br>
            Reasonings as to why vaccination rates are low are multi-faceted. On
            the next page, please read and analyze an article from The Marshall
            Project explaining the issue of vaccine accessibility and how they
            have affected vaccination uptake within prisons.
          </p>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },

    {
      title:
        "As States Expand Vaccine Eligibility, Many People in Prison Still Wait for Shots",
      content: (
        <embed
          src={article}
          type="application/pdf"
          width="800px"
          height="450px"
        />
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Questions",
      content: (
        <div className="Questions-After-Article">
          <h3>
            {" "}
            Discussion Questions:
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <ul>
            <li>
              1. What surprises you most about the finding from The Marshall
              Project?
            </li>
            <Survey></Survey>
            <li>
              2. Given the disproportionate impact that the pandemic has had on
              inmates, why is it of grave concern that problems with vaccine
              accessibility exists within prisons? Why do you think that some
              states forgo prioritizing prisons during the vaccine rollout
              phase?
            </li>
            <Survey></Survey>
            <li>
              3. The article discusses a particular point about the distribution
              of educational materials pertaining to the COVID-19 vaccine within
              prisons and the importance of prison staff getting vaccinated as
              well. Why is it not enough to just make vaccines available to
              prisoners and why is it imperative that prison staff get
              vaccinated?
            </li>
            <Survey></Survey>
          </ul>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },

    {
      title:
        "As States Expand Vaccine Eligibility, Many People in Prison Still Wait for Shots",
      content: (
        <div className="Trust">
          <h3>
            {" "}
            Trust in Biotechnology
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <p>
            Trust is another component that biotechnologist must consider when
            developing new treatments. Even if your treatment is widely
            accessible, a lack of trust, will lead people to become hesitant to
            receive such treatments. The issue of hesitancy in regards to
            treatments is not new news in America. A mistrust of pharmaceutical
            companies, vaccines, and government interventions exist within the
            general population. However, as you read in the previous article,
            this distrust is amplified behind bars.<br></br>
            <br></br>
            On the next page, please analyze data supplied by the UCLA LAW COVID
            Behind Bars Data project listing out primary reasons for vaccine
            hesitancy among people who are incarcerated.
          </p>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Data | Questions",
      content: (
        <div className="Data-Questions">
          <img src={data} alt="" />
          <ul>
            <li>
              1. What surprises or doesn't surprise you about these reasons?
            </li>
            <Survey></Survey>
            <li>
              2. What major distinctions do you see between the "Maybe
              (Hesitancy)" group versus the "No (Refusal)" group? What could be
              some reasons for these distinctions?
            </li>
            <Survey></Survey>
            <li>
              3. In lecture you learned reasons behind vaccine hesitancy amongst
              the general population, are there any similarities you see?
            </li>
            <Survey></Survey>
          </ul>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },

    {
      title: "Battling COVID Vaccine Hesitancy in Jails",
      content: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1b_ylUkzORc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Question",
      content: (
        <div className="Final-Question">
          <h3>
            {" "}
            Discussion Question:
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <ul>
            <li>
              1. Imagine you are the Middlesex Sheriff in the video. Given what
              you have learned in this module, what would you seek out to employ
              within your prison to help boost your vaccination rates in your
              prison?
              <Survey></Survey>
            </li>
            <li>
              2. Given what you have learned in this module, why do
              biotechnologists need to be cognizant about accessbility and trust
              when it comes to biotechnological advancement?
            </li>
            <Survey></Survey>
          </ul>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
  ];
}

export default Module1;
