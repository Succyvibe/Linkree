import { Routes, Route } from "react-router-dom";
import ProfilePic from "./components/ProfilePic";
import TextBox from "./components/TextBox";
import Main from "./components/Main.js"
import LinkButton from "./components/LinkButton";
import Button from "./components/Button";
import Channels from "./components/Channels";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App  bg-white]">
      <div className="container  py-5 px-10 mx-auto h-full">
        <main className=" ">
          <div className="flex justify-end">
            <Button />
          </div>
          <div className="flex justify-center mb-10">
            <div className="flex justify-center flex-col items-center">
              <ProfilePic />
              <TextBox
                twitterUserName="successIbekwe1"
                slackUserName="SuccyCode"
              />
            </div>
          </div>
          <section className="mb-10">
            <div className="md:w-[80%] mx-auto">
              <LinkButton />
            </div>
            <Channels />
          </section>
        </main>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
