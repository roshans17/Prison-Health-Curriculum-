import { v4 as uuidv4 } from "uuid";
import data from "./Images/vaccine-hesitancy-blog_pr.jpg";
import article from "./Images/Ethics- 2.pdf";
import Survey from "./components/Survey";
function Module2() {
  return [
    {
      title: "Clinical Case",
      content: (
        <div className="Clinical-Case">
          <h2>
            Clinical Case:
            <br></br>
            <br></br>
            <br></br>{" "}
          </h2>
          <p>
            Mr. Reading is a 45-year-old inmate serving a life sentence for
            double homicide. A former alcoholic and drug addict, Mr. Reading
            suffers from hepatitis C and symptoms of end-stage liver disease.
            Dr. Reardon was asked by the prison staff to evaluate Mr. Reading's
            eligibility for a liver transplant. Once Dr. Reardon makes
            arrangements to add Mr. Reading's name to the United Network for
            Organ Sharing (UNOS) list of those awaiting transplants, UNOS will
            consider only his medical need and no other factors. Before giving
            his "OK," Dr. Reardon wants to consider the likelihood that Mr.
            Reading will comply with follow-up treatment and how likely is it
            that he will remain drug- and alcohol-free for the rest of his life.
            Dr. Reardon knows that if Mr. Reading is eventually granted a
            transplant, his medications will be regulated by the prison staff
            until he dies and that all illegal drugs and alcohol are banned
            behind bars. In this sense, Mr. Reading seems like an excellent
            candidate.
            <br></br>
            <br></br>
          </p>
          <p>
            In his work outside of the prison, Dr. Reardon treats several
            patients who will soon need to be added to the UNOS list; all of
            them have families and strong support networks despite low family
            incomes. Knowing that his assessment will have a significant impact
            on who receives available organs, Dr. Reardon is torn about whom to
            recommend for placement on the UNOS transplant list.
          </p>
          <h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            From the AMA Journal of Ethics Virtual Mentor. 2008;10(2):88-91.
            doi: 10.1001/virtualmentor.2008.10.2.ccas2-0802.
          </h5>
        </div>
      ),
      id: uuidv4(),
      active: true,
    },
    {
      title: "Clinical Case Questions",
      content: (
        <div className="Clinical-Questions">
          <h3>
            {" "}
            Clinical Questions:
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <ul>
            <li>
              If you were Dr. Reardon, what would you do about this predicament
              you find yourself in? Would you add the Mr. Reading to the
              transplant list? Yes or no? (Please answer honestly! There is no
              right or wrong answer.)
            </li>
            <Survey question="Question 1.1"></Survey>
            <li>What factors went into your decision?</li>
            <Survey question="Question 1.2"></Survey>
            <li>
              Irrespective of this clinical case, what ethical factors are most
              important to you when considerng who should get priority for a
              transplant or not?
            </li>
            <Survey question="Question 1.3"></Survey>
          </ul>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Clinical Case (AMA's Analysis) ",
      content: (
        <div className="Clinical-Analysis">
          <h3>
            AMA's Analysis:
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <p>
            In 1984 Congress passed the National Organ Transplant Act (NOTA)
            which assigned the task of equitable organ distribution throughout
            the United States to the private, nonprofit organization known as
            UNOS (the United Network for Organ Sharing) [1]. Over the years, via
            vigorous public discourse and careful analysis of outcomes, UNOS has
            developed an individual policy for each organ that reflects the
            unique medical considerations for that particular type of
            transplant. Since dialysis can prolong the life of those with renal
            failure, candidates for a kidney transplant can afford to wait; thus
            one's place on the wait list is predicated on the length of time one
            has been on the list. This system is fairness-based, in that each
            candidate is treated equally. For liver transplantation, the
            decision was made to prioritize patients based on their medical
            status and, hence, urgency of their need. This justice-based system
            stands in contrast to the kidney allocation procedures, which are
            based on waiting time and a strict notion of fairness.
            <br></br>
            <br></br>
          </p>
          <p>
            To identify the neediest patients for prioritization in liver
            transplantation, UNOS adopted the MELD (Model for End-stage Liver
            Disease) algorithm in 2002. The MELD formula assigns a score from 6
            to 40 that represents the patient's medical status based on three
            laboratory values: total bilirubin, INR (international normalized
            ratio), and serum creatinine. Researchers at the Mayo Clinic
            developed this score to more accurately predict 3-month mortality
            rates for a heterogeneous group of liver failure patients [2]. The
            MELD score is objective, reproducible, and based solely on
            laboratory data. It reliably predicts who will die without a liver
            transplant and is currently the dominant measure used nationally to
            distribute liver grafts.
            <br></br>
            <br></br>
          </p>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Clinical Case (AMA's Analysis)",
      content: (
        <div className="Clinical-Analysis">
          <p>
            There is no specific UNOS requirement that consideration be given to
            a candidate's ability to participate in posttransplant care, how one
            came to have end-stage liver disease, or to a candidate's societal
            worth and contributions (or conversely societal debt and crimes).
            Thus Dr. Reardon should disregard the etiology of Mr. Reading's
            liver failure (hepatitis C is currently the most common indication
            for liver transplant, alcohol is second, both together rank third)
            and calculate his MELD score. Mr. Reading's ability to comply with
            medical care after transplant might be deemed a potential positive
            outcome predictor, and his incarceration should not be a factor.
            <span> It's strictly sickest first.</span> If Mr. Reading were
            predicted to die before other patients who are also waiting for a
            liver donation, he would be given preference over the doctor's other
            patients. Asking Dr. Reardon to balance the competing nonmedical
            interests of Mr. Reading and other patients is inappropriate; UNOS
            is charged with such determinations.{" "}
            <span>
              The doctor should aggressively advocate for adding Mr. Reading to
              the UNOS list with the guiding mantra being "sickest first."
            </span>
          </p>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Real Life Scenario",
      content: (
        <div className="Real-Example">
          <h2>Has this scenario actually played out in real life?</h2>
          <p>
            Yes: "A case with circumstances similar to those described for Mr.
            Reading occurred in California in 2002. A 31-year-old prison inmate
            with congestive heart failure was admitted to the Stanford
            University Medical Center in need of a heart transplant. He had been
            twice convicted of armed robbery and was incarcerated at the time,
            serving a lengthy sentence. This man became the first prisoner to
            receive a heart transplant, and a storm of protest arose following
            the procedure [3]. The intuitive response of most was that felons
            have violated the rules of society and ought to be punished, not
            rewarded with society's most precious assets. There was a sense of
            outrage over the inherent injustice of awarding high-quality, costly
            care to a criminal at public expense when millions of law-abiding
            citizens remained uninsured and unable to afford similar care."
            <br></br>
            <br></br>
          </p>
          <p>It has even happened right here in Rhode Island.</p>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },

    {
      title: "Real Life Scenario",
      content: (
        <div className="Real-Example">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dDxQGiAWbcA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <ul>
            <li>
              As you watched in the video, there was social outrage over the
              fact that not only was a prisoner getting a transplant but over
              the fact that the state was helping fund the respective
              transplant. Why do you think that is?
            </li>
            <Survey question="Question 2.1"></Survey>
          </ul>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Organ Donation",
      content: (
        <div className="Real-Example">
          <h2>
            {" "}
            What about prisoners donating organs?
            <br></br>
            <br></br>
          </h2>
          <p>
            Prisons do not usually allow inmates to donate organs (with the
            exception of immediate family members). Why is this the case? There
            is no legal prohibition against prisoners from organ donation, but
            there are many reasons as to why the transplant community has looked
            down upon the practice. A couple of reasons include concerns over
            prisons’ high-risk environment for infectious disease and an
            inability to be able to consent in a free and non-coercive
            environment. Death row inmates face similar challenges with donating
            organs such as the general inmate population. However, they face a
            complicated problem as of “2013 all requests by death row inmates to
            donate their organs after execution have been denied by states”. To
            learn more about the issues facing death row inmates and organ
            donation please read the following paper on the next page.
            <br></br>
            <br></br>
          </p>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Organ Donation",
      content: (
        <div className="Organ-Donation">
          <embed
            src={article}
            type="application/pdf"
            width="700px"
            height="450px"
          />
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title: "Discussion Questions",
      content: (
        <div className="Clinical-Questions">
          <h3>
            {" "}
            Discussion Questions:
            <br></br>
            <br></br>
            <br></br>{" "}
          </h3>
          <ul>
            <li>
              Do you believe that it is ethically correct to allow prisoners to
              donate organs (to more than just their immediate family members)?
              Why or why not? What ethical factors went into your consideration?
            </li>
            <Survey question="Question 3.1"></Survey>
            <li>
              Do you believe that it is ethically correct to allow death row
              inmates to donate their organs after their execution? Why or why
              not? What ethical factors went into your consideration?
            </li>
            <Survey question="Question 3.2"></Survey>
            <li>
              What potential problems do you foresee if organ donations are
              encouraged amongst both general inmates and death row inmates?
            </li>
            <Survey question="Question 3.3"></Survey>
          </ul>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
    {
      title:
        "Has China really stopped obtaining organs from executed prisoners?",
      content: (
        <div className="Clinical-Questions">
          <h3>
            Why is it important to have these discussions as biotechnologists?
            Because if we don't, prisoners' health and fundamental human rights
            become compromised.
            <br></br>
            <br></br>
          </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/khpmkNfx0Rk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ),
      id: uuidv4(),
      active: false,
    },
  ];
}

export default Module2;
