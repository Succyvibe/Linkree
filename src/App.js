import ProfilePic from "./components/ProfilePic";
import TextBox from "./components/TextBox";
import LinkButton from "./components/LinkButton";

function App() {
  return (
    <div className="App w-screen h-screen bg-[#f4f5f7]">
      <main className="w-[1440px] bg-white h-full border p-10 mx-auto">
        <div className="flex justify-center mb-10">
          <div className="flex justify-center flex-col items-center">
            <ProfilePic />
            <TextBox
              twitterUserName="successIbekwe1"
              slackUserName="SuccyCode"
            />
          </div>
        </div>
        <section className="">
          <div className="w-[80%] mx-auto">
            <LinkButton />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
