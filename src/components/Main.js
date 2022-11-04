import ProfilePic from "./ProfilePic";
import TextBox from "./TextBox";
import LinkButton from "./LinkButton";
import Button from "./Button";
import Channels from "./Channels";

const Main = () => {
  return (
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
  );
};

export default Main;
