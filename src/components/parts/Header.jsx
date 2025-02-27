import Link from "next/link";
import { ContactIcon, HomeIcon, PersonIcon, WorkIcon } from "../svg";
import { useRouter } from "next/router";

export const Header = () => {
  //start useHook zone _________________________________________________________

  const router = useRouter();
  const pathname = router.pathname;

  //start HeaderData zone _________________________________________________________

  const HeaderData = [
    {
      name: "Home",
      path: "/",
      icon: (
        <HomeIcon
          classEdit={"/" == pathname ? `fill-green` : `fill-[#E8EAED]`}
        />
      ),
    },
    {
      name: "About me",
      path: "/about",
      icon: (
        <PersonIcon
          classEdit={"/about" == pathname ? `fill-green` : `fill-[#E8EAED]`}
        />
      ),
    },
    {
      name: "Work",
      path: "/work",
      icon: (
        <WorkIcon
          classEdit={"/work" == pathname ? `fill-green` : `fill-[#E8EAED]`}
        />
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: (
        <ContactIcon
          classEdit={"/contact" == pathname ? `fill-green` : `fill-[#E8EAED]`}
        />
      ),
    },
  ];

  //end HeaderData zone _________________________________________________________
  //render _________________________________________________________

  return (
    <nav className=" flex flex-col items-center fixed lg:justify-center gap-y-4 h-max bottom-0 mt-auto  lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 py-8 h-[80px] lg:h-max bg-white/10 backdrop-blur-sm text-3xl xl:text-xl  lg:rounded-full ">
        {HeaderData.map((link, linkIndex) => {
          return (
            <Link href={link.path} key={linkIndex}>
              <div className="cursor-pointer">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
