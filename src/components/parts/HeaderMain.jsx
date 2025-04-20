import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TiwitterIcon,
} from "../svg";

export const HeaderMain = () => {
  return (
    <main className="bg-blue w-full flex items-center lx:px-0 xl:h-[90px]">
      <div className="container m-auto lg:px-0 px-4 py-6 ">
        <div className="flex justify-between flex-col lg:flex-row gap-y-4">
          <div className="flex items-center justify-center">
            <div className="text-white flex items-center font-robotoMono text-3xl not-italic font-bold tracking-[-0.6px]">
              Gereltbaatar
            </div>
            <div className="flex text-[#43B282] items-center font-robotoMono text-2xl not-italic font-normal tracking-[-0.6px]">
              .
            </div>
            <div className="text-white/60 flex items-center font-robotoMono text-2xl not-italic font-normal tracking-[-0.6px]">
              Portfolio
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FacebookIcon />
            <GithubIcon />
            <TiwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
