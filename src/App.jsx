import { Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";
import { Flex, Box, Image } from "@chakra-ui/react";
import font from "../src/assets/font.png";
import "./styles/loading.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Flex id="loader">
          <Box id="wrapperload">
            <Box className="elem">
              <Image src={font} w={"40%"} />
            </Box>
            <Box className="elem">FullStack Web Developer</Box>
            <Box className="elem">let's get started!</Box>
          </Box>
        </Flex>
      ) : (
        <Routes>{routes.map((val) => val)}</Routes>
      )}
    </>
  );
}

export default App;
