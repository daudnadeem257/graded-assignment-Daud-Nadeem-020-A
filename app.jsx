import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note title="Example Note Title" content="This is the note content." />
      <Footer />
    </div>
  );
}

export default App;
