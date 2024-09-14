import { HeaderMain, Header } from "../parts";

const MainLayout = ({ children }) => {
  return (
    <main className="">
      <HeaderMain />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
