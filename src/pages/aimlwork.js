import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import HireMe from '@/components/HireMe'

import medicalaichatbot from "../../public/images/projects/medicalaichatbot.png";
import project11 from "../../public/images/projects/aisemanticsearch.png";
import project12 from "../../public/images/projects/multipdfchat.png";
import project4 from "../../public/images/projects/summarizationapp.png";
import openllama from "../../public/images/projects/openllama.png";
import marketingemail from "../../public/images/projects/marketingemail.png";
import Footer from "@/components/Footer";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 
    dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark rounded-br-3xl 
      dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg 
        lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, 
          (max-width:1200px) 50vw,
          50vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 
      lg:w-full lg:pl-0 lg:pt-6
      "
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark 
        xs:text-base
        "
        >
          {type}
        </span>
        
       
        <div className="w-full flex items-center justify-between">
          {/* <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-sm font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            VISIT
          </Link> */}
          <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl md:text-xl sm:text-xl
          "
          >
            {title}
          </h2>
          
        </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8
            md:w-6
            "
          >
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
        <p
          className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm sm:text-sm
        "
        >
          {summary}
        </p>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github,summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4 
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark rounded-br-3xl 
      dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
      <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base sm:text-sm
        "
        >
          {type}
        </span>

      <div className="w-full flex items-center justify-between">
          {/* <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-sm font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            VISIT
          </Link> */}
          <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl md:text-xl sm:text-xl
          "
          >
            {title}
          </h2>
          
        </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8
            md:w-6
            "
          >
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
        <p
          className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm sm:text-sm
        "
        >
          {summary}
        </p></div>
    </article>
  );
};

const CustomBlock = ({ title, type, img, link, github,summary }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4 
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark rounded-br-3xl 
      dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base sm:text-sm
        "
        >
          {type}
        </span>
        {/* <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl 
          "
          >
            {title}
          </h2>
          
        </Link> */}
       

        <div className="w-full flex items-center justify-between">
          {/* <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-sm font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            VISIT
          </Link> */}
          <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl md:text-xl sm:text-xl
          "
          >
            {title}
          </h2>
          
        </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8
            md:w-6
            "
          >
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
        <p
          className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm sm:text-sm
        "
        >
          {summary}
        </p>
      </div>
    </article>
  );
};


const Projects = () => {
  return (
    <>
      <Head>
        <title> Projects </title>
        <meta
          name="description"
          content="Amritpal Singh | UX Designer"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb- flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text="Enhance Human Capabilities With AI"
            className="mb-16 
           lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:gap-y-16
          "
          >

<div className="col-span-12">
              <CustomBlock
                title="CHAT & DIALOGUE SUMMARIZATION APP"
                img={project4}
                summary=""
                link="https://amritpalsingh.ca"
                github="https://github.com/asikhsingh/stunningportfolio"
                type="Generative AI"
              />
            </div>

           
            <div
              className="col-span-6 
            sm:col-span-12"
            >

              
              <Project
                title="INSTRUCT-TUNNING OPEN LLAMA"
                img={openllama}
                summary=""
                link="https://amritpalasingh.wixsite.com/home/perillas"
                github=""
                type="Generative AI"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >

              
              <Project
                title="MARKETING-MAIL AI ASSISTANT"
                img={marketingemail}
                summary=""
                link="https://amritpalasingh.wixsite.com/home/perillas"
                github=""
                type="Generative AI"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="MEDICAL AI CHATBOT"
                img={medicalaichatbot}
                summary=""
                link="https://amritpalasingh.wixsite.com/home/mall-map-app"
                github=""
                type="Generative AI"
              />
            </div>
            {/* <div className="col-span-12">
              <CustomBlock
                title="STUNNING PORTFOLIO"
                img={project4}
                summary="Immerse yourself in the world of creativity as you explore my portfolio, featuring stunningly designed masterpieces that inspire and leave a lasting impression."
                link="https://amritpalsingh.ca"
                github="https://github.com/asikhsingh/stunningportfolio"
                type="Web Design & Developement"
              />
            </div> */}




            <div
              className="col-span-6 
            sm:col-span-12"
            >

              
              <Project
                title="AI ENABLED SEMANTIC SEARCH"
                img={project11}
                summary=""
                link="https://amritpalasingh.wixsite.com/home/perillas"
                github=""
                type="Generative AI"
              />
            </div>
            <div
              className="col-span-6 
            sm:col-span-12"
            >

              
              <Project
                title="MULTI PDF-CHAT APP"
                img={project12}
                summary=""
                link="https://amritpalasingh.wixsite.com/home/perillas"
                github=""
                type="Generative AI"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects

                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              /> 
             </div> */}
          </div>
        </Layout>
        <HireMe />
        
      </main>
      <Footer/>
    </>
  );
};

export default Projects;
