import { HeaderMain, Header } from "../parts";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <HeaderMain />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
