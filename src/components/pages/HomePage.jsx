import { RoundedText } from "../component";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Gereltbaatar", "Software engineer"],
    loop: 0,
  });
  return (
    <main className="px-4 xl:px-16 h-full xl:pt-16 pt-0">
      <div className="text-[#e8eaed]">
        <div className="container py-6 mx-auto border border-red-500 flex gap-4">
          <div className="w-full h-full border border-greent">
            <div className="text-center flex flex-col justify-center xl:pt-24 xl:text-left h-full container mx-auto">
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-8 font-semibold"
              >
                I'm
                <span className="text-green "> {text}</span>{" "}
                <Cursor cursorColor="#43b282" />
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-ms xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/60  "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium atque non voluptas quo quas quia qui tempora
                obcaecati quasi mollitia, odit animi possimus debitis magni
                earum! Perspiciatis quasi assumenda impedit error fugiat amet
                nam laboriosam, neque illo! Iure, fugiat tempore?
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mx-auto xl:mx-0 xl:flex hidden"
              >
                <RoundedText />
              </motion.div>
            </div>
          </div>
          <div className="mx-auto xl:mx-0  flex justify-center  xl:hidden relative">
            <RoundedText />
          </div>
          <div className="w-full">ewfwe</div>
          {/* <img src="./pinebaatarR2.png" alt="" /> */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
