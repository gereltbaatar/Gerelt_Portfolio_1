import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { Circles, Sliders } from "../component";

const WorkPage = () => {
  return (
    <main className="text-white px-4 xl:px-16 xl:pt-16 pt-0">
      <div className="">
        <div className="container mx-auto lg:px-0 py-6 xl:pt-24 pt-10">
          <div className=" flex gap-x-4 md:flex-row flex-col pt-16">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold"
              >
                My work <span className="text-green">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/60"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                earum veritatis temporibus quas at fuga amet placeat odio, nam
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%] "
            >
              <Sliders />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
