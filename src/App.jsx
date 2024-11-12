import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

const App = () => {
  const cards = data.map((card) => {
    return <Card
      key={card.id}
      card={card}
    />;
  });

  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <div>{cards}</div>
      </main>
    </>
  );
};

export default App;
