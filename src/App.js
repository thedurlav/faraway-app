const App = () => {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
};

export default App;

const Logo = () => {
  return <h1> 🌴 Far Away 🥥</h1>;
};
const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your 🎃 trip?</h3>
    </div>
  );
};

const PackagingList = () => {
  return <div className="List">LIST</div>;
};

const Stats = () => {
  return (
    <footer>
      <em>
        {" "}
        🪭 You have X items on your list, and you are already packed X (X%)
      </em>
    </footer>
  );
};
