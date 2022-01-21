import "./App.css";
import ReactPost from "./components/ReactPost";

export default function App() {
  let data = [
    {
      question: "Fråga: Vad är tre fördelar med att använda React?",
      answer: (
        <>
          {" "}
          Svar: React open source community är öppen, global, stor och helt
          gratis att använda. <br />
          React gör det möjligt för utvecklare att skapa webbapplikationer som
          kan ändra dina data utan att ladda om din sida.
          <br />
          React är skalbar, enkel och snabb!
        </>
      ),
    },
    {
      question:
        "Fråga: Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: (
        <>
          Svar: Single Page Application(SPA) är webbapplikationer som de flesta
          använder det varje dag på t.ex Gmail, Google Maps, Netflix,
          Pinterest... <br />
          Motsatsen till Single Page Application är Multiple Page
          Application(MPA) och är det vi känner som “vanlig” webbplats. <br />
          MPA laddar en helt ny sida varje gång när vi klicka på en länk däremot
          SPA behöver inte ladda om till en helt ny sida, <br />
          den uppdateras innehållet dynamiskt in på denna sida när det
          efeterfrågas.
        </>
      ),
    },
    {
      question: "Fråga: Nämn tre skillnader mellan React och Angular.",
      answer: (
        <>
          Svar: React är (1) en JavaScript bibliotek (2) för att bygga
          användargränssnitt (User Interface) (3) baserat på Virtual DOM som
          utvecklad av Facebook. <br />
          Angular är (1) ett JavaScript ramverk (2) används för utveckling av
          frontendwebbapplikationer (3) som baserat på MVC(Model View
          Controller), utvecklas av Google.
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <h1>Bulletin Board</h1>
      <ReactPost data={data} />
    </div>
  );
}
