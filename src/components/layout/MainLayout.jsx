import { HeaderMain, Header } from "../parts";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-screen">
      <HeaderMain />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
