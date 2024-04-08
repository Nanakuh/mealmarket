import CustomFooter from "./components/footer/footer";
import CustomNavbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <CustomNavbar/>
      <CustomFooter/>
    </div>
  );
}

export default App;
