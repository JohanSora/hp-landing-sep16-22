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
          "Content-Type": "application/json; charset=UTF-8",
          "Strict-Transport-Security": "max-age=31536000; includeSubdomains;",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "SAMEORIGIN",
          "X-XSS-Protection": "1; mode=block",
          "X-Cache": "CONFIG_NOCACHE",
          "X-Azure-Ref":
            "0fXZAYwAAAACrYijuMXIOSZKylWtiQD0LQk4xQUEyMDUxMDIxMDI5ADllZWFiNjdiLThhMTUtNDhiMy1iN2Q2LTI0ZDQzNzBkNzJlNA==",
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
