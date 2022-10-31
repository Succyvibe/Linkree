import ProfilePic from "./components/ProfilePic";
import TextBox from "./components/TextBox";
import LinkButton from "./components/LinkButton";
import Button from "./components/Button";
import Channels from "./components/Channels";

function App() {
  return (
    <div className="App  bg-[#f4f5f7]">
      <main className="w-[1440px] bg-white h-full border py-5 px-10 mx-auto">
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
    </div>
  );
}

export default App;
