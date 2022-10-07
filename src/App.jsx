import Header from "./components/Header";
import Main from "./components/MainHP";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  axios
    .get(
      "https://anypoint-test.mrcgo.com/sec/se/warehouses/test/api/v1.0/warehouses/locations/sellers",
      {
        headers: {
          "xh-client-id": "6672ff3aaef044ff9c11fc34651e6108",
          "xh-client-secret": "Ae63abFe0bC34bA7bF6e4A2Af8d61907",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
