import Link from "next/link";
import { ContactIcon, HomeIcon, PersonIcon, WorkIcon } from "../svg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export const Header = () => {
  //start useHook zone _________________________________________________________

  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);

  const [activeIcon, setActiveIcon] = useState();
  const [index, setIndex] = useState(0);

  //end useHook zone _________________________________________________________
  //start HandleClick zone _________________________________________________________

  const handleClickIcon = (event) => {
    setActiveIcon(event);
  };

  //end HandleClick zone _________________________________________________________
  //start HeaderData zone _________________________________________________________

  const HeaderData = [
    {
      name: "Home",
      path: "/",
      icon: (
        <HomeIcon
        // classEdit={
        //   activeIcon == pathname ? `fill-[#328561]` : `fill-[#E8EAED]`
        // }
        />
      ),
    },
    {
      name: "About me",
      path: "/about",
      icon: <PersonIcon />,
    },
    {
      name: "Work",
      path: "/work",
      icon: (
        <WorkIcon
        // classEdit={
        //   activeIcon == pathname ? `fill-[#FF0000]` : `fill-[#E8EAED]`
        // }
        />
      ),
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <ContactIcon />,
    },
  ];

  //end HeaderData zone _________________________________________________________
  //render _________________________________________________________

  return (
    <nav className=" flex flex-col items-center fixed xl:justify-center gap-y-4 h-max bottom-0 mt-auto  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 py-8 h-[80px] xl:h-max bg-white/10 backdrop-blur-sm text-3xl xl:text-xl  xl:rounded-full ">
        {HeaderData.map((link, linkIndex) => {
          return (
            <Link
              href={link.path}
              key={linkIndex}
              classEdit={
                index == linkIndex ? `fill-[#328561]` : `fill-[#E8EAED]`
              }
            >
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
