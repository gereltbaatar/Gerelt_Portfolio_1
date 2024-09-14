import Link from "next/link";
import { ArrowIcon } from "../svg";


export const RoundedText = () => {
  return (
    <div className="">
      <Link
        href={"/work"}
        className=" relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <img
          src={`/rounded-text.png`}
          width={141}
          height={148}
          className=" animate-spin-slow duration-100 w-full h-full max-w-[141px] max-h-[148px]  "
        />
        <ArrowIcon
          classEdit={
            "absolute group-hover:translate-x-2 transition-all duration-300"
          }
        />
      </Link>
    </div>
  );
};
