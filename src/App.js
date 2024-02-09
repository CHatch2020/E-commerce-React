import "./App.css";

function App() {
  return (
    <div className="App grid gap-y-10">
      <header className="flex justify-between items-center border-b-2 bg-main h-14">
        <h1>Title</h1>
        <container className="flex justify-center gap-6">
          <h3>Products(button)</h3>
          <h3>Monthly Deals(button)</h3>
          <h3>Search Bar</h3>
        </container>
        <h3>Cart(Icon)(button)</h3>
      </header>

      <div className="grid gap-y-10">
        <p className="text-4xl">Welcome message</p>
        <div>
          <p>Item Recommendations</p>
          <p>Item Recommendations</p>
          <p>Item Recommendations</p>
          <p>Item Recommendations</p>
        </div>
      </div>
    </div>
  );
}

export default App;
