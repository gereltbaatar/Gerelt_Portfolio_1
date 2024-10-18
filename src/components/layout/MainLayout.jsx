import { HeaderMain, Header } from "../parts";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full md:h-full h-[950px] overflow-clip bg-blue">
      <HeaderMain />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
