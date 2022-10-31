import ProfilePic from "./components/ProfilePic";
import TextBox from "./components/TextBox";
import LinkButton from "./components/LinkButton";
import Button from "./components/Button";
import Channels from "./components/Channels";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App  bg-white]">
      <div className="w-[1440px]  py-5 px-10 mx-auto h-full">
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
            <div className="w-[80%] mx-auto">
              <LinkButton />
            </div>
            <Channels />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
