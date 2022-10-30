import LinkButton from "./components/LinkButton";

function App() {
  return (
    <div className="App w-screen h-screen bg-[#f4f5f7]">
      <main className="w-[1440px] bg-white h-full border mx-auto">
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
