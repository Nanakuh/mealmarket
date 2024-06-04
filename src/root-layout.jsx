/* eslint-disable react/prop-types */
import CustomFooter from "./components/footer/footer";
import CustomNavbar from "./components/navbar/navbar";

function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <CustomNavbar />
      <div className="flex flex-col items-center justify-center">{children}</div>

      <CustomFooter />
    </div>
  );
}

export default RootLayout;
