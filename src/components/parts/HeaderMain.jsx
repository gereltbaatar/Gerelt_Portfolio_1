import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TiwitterIcon,
} from "../svg";

export const HeaderMain = () => {
  return (
    <main className="bg-[#011222] w-full flex items-center px-16 lx:px-0 xl:h-[90px]">
      <div className="container m-auto px-20 py-6 ">
        <div className="flex justify-between flex-col lg:flex-row gap-y-4">
          <div className="flex items-center justify-center">
            <div className="text-white flex items-center font-robotoMono text-3xl not-italic font-bold tracking-[-0.6px]">
              My
            </div>
            <div className="flex text-[#43B282] items-center font-robotoMono text-2xl not-italic font-normal tracking-[-0.6px]">
              .
            </div>
            <div className="text-[#E8EAED] flex items-center font-robotoMono text-2xl not-italic font-normal tracking-[-0.6px]">
              Portfolio
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FacebookIcon />
            <InstagramIcon />
            <GithubIcon />
            <TiwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
