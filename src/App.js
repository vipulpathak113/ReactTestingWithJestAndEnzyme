import "./App.css";
import Header from "./components/Header";
import Headline from "./components/Headline";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 23,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
