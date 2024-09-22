import { ArrowIcon } from "../svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const ContactPage = () => {
  return (
    <main className="text-white h-full">
      <div className=" pb-52 px-4 xl:px-16 container mx-auto text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold text-center"
          >
            Contact <span className="text-green">me.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6">
              <input
                type="text"
                placeholder="name"
                className="input"
                required
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              required
            />
            <textarea
              placeholder="message"
              className="textarea"
              cols="30"
              rows="10"
              required
            ></textarea>
            <button className="btn  rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-green group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send Message
              </span>
              <ArrowIcon
                width={32}
                classEdit={
                  "-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute"
                }
              />
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
