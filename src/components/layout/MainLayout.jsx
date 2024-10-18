import { HeaderMain, Header } from "../parts";

const MainLayout = ({ children }) => {
  return (
    <main className="h-full">
      <HeaderMain />
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
