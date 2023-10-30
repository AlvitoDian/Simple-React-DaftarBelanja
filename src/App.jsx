import { useState } from "react";
import "./App.css";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Klepon",
    quantity: 10,
    checked: true,
  },
  {
    id: 2,
    name: "Kopi Rujak",
    quantity: 10,
    checked: false,
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <GroceryList />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

function Form() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  const quantityNum = [...Array(10)].map((_, i) => (
    <option value="i + 1" key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>{quantityNum}</select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}

function GroceryList() {
  return (
    <>
      {" "}
      <div className="list">
        <ul k>
          {groceryItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Item({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} />
      <span
        style={item.checked === true ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  );
}

function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}
