import LinkButton from "./components/LinkButton";
import ProfilePic from "./components/ProfilePic";

function App() {
  return (
    <div className="App w-screen h-screen bg-[#f4f5f7]">
      <main className="w-[1440px] bg-white h-full border p-10 mx-auto">
        <div className="flex justify-center mb-10">
          <ProfilePic />
        </div>
        <section className="">
          <div className="w-[80%] mx-auto">
            <LinkButton
              name="Zuri Training"
              link="https://training.zuri.team/"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
