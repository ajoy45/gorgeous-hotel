import { Route, Routes } from "react-router-dom";
import Home from"./pagess/Home/Home";
import SingleRoom from"./pagess/Single Room/SingleRoom";
import DoubleRoom from"./pagess/Double Room/DoubleRoom";
import ConferenceRoom from"./pagess/ConferenceRoom/ConferenceRoom";
import Login from"./pagess/Login/Login";
import Header from "./Header/Header";
import SingUp from "./pagess/SingUp/SingUp";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
           <Route path="/"element={<Home></Home>}></Route>
           <Route path="/single-room"element={<SingleRoom></SingleRoom>}></Route>
           <Route path="/double-room"element={<DoubleRoom></DoubleRoom>}></Route>
           <Route path="/conference-room"element={<ConferenceRoom></ConferenceRoom>}></Route>
           <Route path="/login"element={<Login></Login>}></Route>
           <Route path="/sing-up"element={<SingUp></SingUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
