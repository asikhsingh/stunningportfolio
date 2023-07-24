import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

  <LiIcon reference={ref}/>

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
        target="_blank"
        className="text-primary dark:text-primaryDark capitalize">
        @{company}</a></h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {address}
      </span>
      <p className="font-medium w-full md:text-sm">
        {work}
      </p>
    </motion.div>
  </li>

}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          " />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="UX Lead" 
            company="Stocate"
            companyLink="https://stocate.com/"
            time="2023-Present"
            address=" Montreal, Quebec"
            work="- Lead and oversee UX activities such as strategy workshops, user/design research, beacon research, and identification of opportunities to differentiate.
            - Create and effectively present UX artifacts (journeys, sketches, wireframes, journey maps, low and mid-fidelity renderings, clickable prototypes, storyboards, etc.) to stakeholders, clients, and teams.
            - Test and validate deliverables with users through usability testing and participating in design reviews.
            - Collaborate with the development team to build & productionize for market while maintaining UX best practices.
            - Working in an Agile team and completing committed backlog items within the agreed upon timeframe
            "
          />

          <Details
            position="UX/UI Designer" 
            company="Stocate"
            companyLink="https://stocate.com/"
            time="2021-2022"
            address=" Montreal, Quebec"
            work="-Conducted user research and gathered insights to inform design decisions, resulting in improved user experiences.
            -Designed intuitive and engaging interaction interfaces through wireframes and prototypes, ensuring seamless navigation and functionality.
            -Structured information architecture and implemented effective content hierarchies, enhancing user accessibility and comprehension.
            -Evaluated usability through heuristic evaluations and user testing, identifying areas for improvement and driving iterative design enhancements."
          />

<Details
            position="Ecommerce Web Developer" 
            company="Mosiac North America"
            companyLink="https://digitalmainstreet.ca/"
            time="2021-Present"
            address=" Toronto, ON"
            work="-Conducted user research and gathered insights to inform design decisions, resulting in improved user experiences.
            -Designed intuitive and engaging interaction interfaces through wireframes and prototypes, ensuring seamless navigation and functionality.
            -Structured information architecture and implemented effective content hierarchies, enhancing user accessibility and comprehension.
            -Evaluated usability through heuristic evaluations and user testing, identifying areas for improvement and driving iterative design enhancements."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience;