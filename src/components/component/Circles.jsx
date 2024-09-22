export const Circles = () => {
  return <div>Circles</div>;
};

// // data
// const serviceData = [
//   {
//     title: "Branding",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     title: "Design",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     title: "Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     title: "Copywriting",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     title: "SEO",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

// export const Sliders = () => {
//   return (
//     <Swiper
//       breakpoints={{
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 15,
//         },
//         640: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//       }}
//       FreeMode={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[FreeMode, Pagination]}
//       className="h-[240px] sm:h-[340px]"
//     >
//       {serviceData.map((item, index) => {
//         return (
//           <SwiperSlide key={index}>
//             <div className="bg-blurGreen h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#43b28226] transition-all duration-300">
//               <div className="">
//                 <div className="">{item.title}</div>
//                 <p>{item.description}</p>
//               </div>
//               <div className="">
//                 <ArrowTopIcon
//                   classEdit={
//                     "group-hover:rotate-45 group-hover:fill-green transition-all duration-300"
//                   }
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };
