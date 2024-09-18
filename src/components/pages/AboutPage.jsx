import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import {
  CssIcon,
  FigmaIcon,
  GithubIcon,
  HtmlIcon,
  JavaScrictIcon,
  NextJSIcon,
  ReactIcon,
  TailwindIcon,
  VScodeIcon,
} from "../svgAbout";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Frontend",
        icons: [
          <HtmlIcon />,
          <CssIcon />,
          <JavaScrictIcon />,
          <ReactIcon />,
          <NextJSIcon />,
          <TailwindIcon />,
        ],
      },
      {
        title: "Others",
        icons: [<GithubIcon />, <VScodeIcon />, <FigmaIcon />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title:
          "High School Education - The 1st school of general education of the Zavkhan province",
        stage: "2012-2024",
      },
      {
        title: "Full Stack Developer - Pinecone Academy",
        stage: "2024-2025",
      },
    ],
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <main className="text-white">
      <MainLayout>
        <main className="px-4 xl:px-16  py-0 md:py-44 text-center xl:text-left">
          <div>
            <div className="container lg:px-20 px-0 mx-auto h-full flex flex-col items-start justify-between xl:flex-row gap-x-6">
              <div className="flex flex-col gap-5 justify-start max-w-[600px]">
                <motion.h2
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold;"
                >
                  Here are some of my skills on which I have been working on for
                  the <span className="text-green">past 1 years.</span>
                </motion.h2>

                <motion.p
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-white/60"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta distinctio recusandae doloribus earum sapiente cum
                  aperiam a impedit magni cumque nostrum, pariatur iste dolores.
                  Necessitatibus ea et tempora sunt dolor?
                </motion.p>
                {/* countUpp */}
                <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                >
                  <div className="flex flex-1 xl:gap-x-6">
                    <div className=" relative flex-1 flex flex-col after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-green md-2">
                        <CountUp start={0} end={10} duration={5} /> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        count of proreject
                      </div>
                    </div>
                    {/* clients */}
                    <div className=" relative flex-1 flex flex-col after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-green md-2">
                        <CountUp start={0} end={250} duration={5} /> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Satisfied clients
                      </div>
                    </div>
                    {/* projects */}
                    <div className=" relative flex-1 flex flex-col after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-green md-2">
                        <CountUp start={0} end={650} duration={5} /> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Finished projects
                      </div>
                    </div>
                    {/* awards */}
                    <div className=" relative flex-1 ">
                      <div className="text-2xl xl:text-4xl font-extrabold text-green md-2">
                        <CountUp start={0} end={8} duration={5} /> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Winning awards
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col w-full  xl:max-w-[52%] h-[100px] mt-5"
              >
                <div className="flex gap-x-4 xl:gap-x-8 mx-auto md:mx-0 mb-4">
                  {aboutData.map((item, itemIndex) => {
                    return (
                      <div
                        key={itemIndex}
                        className={`${
                          index === itemIndex &&
                          `text-green after:w-[100%] after:bg-green after:transition-all after:duration-300`
                        }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-[#E8EAED] after:absolute after:-bottom-1 after:left-0`}
                        onClick={() => setIndex(itemIndex)}
                      >
                        {item.title}
                      </div>
                    );
                  })}
                </div>
                <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                  {aboutData[index].info.map((item, itemIndex) => {
                    return (
                      <div
                        key={itemIndex}
                        className=" flex flex-col md:flex-row max-w-max gap-x-2 items-center "
                      >
                        <div className="text-white/60 font-light mb-2 md:mb-0">
                          {item.title}
                        </div>
                        <div className="hidden md:flex"></div>
                        <div>{item.stage}</div>
                        <div className="flex gap-x-4">
                          {item.icons?.map((icon, itemIndex) => {
                            return <div key={itemIndex}>{icon}</div>;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </MainLayout>
    </main>
  );
};

export default AboutPage;
