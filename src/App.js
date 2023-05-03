import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./comparments/Home";
import Login from "./comparments/Login";
import Signup from "./comparments/Signup";
import MainIndex from "./MainIndex.js";
// src\MainIndex.js
//import MainApp from "./MainApp";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/mainIndex" element={<MainIndex/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row >
    </Container >
  );
}

export default App;
