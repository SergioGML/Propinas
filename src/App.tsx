import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const { addItem } = useOrder();
  return (
    <>
      <header className="bg-purple-800 py-6 border-b-10 border-violet-500">
        <h1 className="text-center text-3xl text-amber-50 font-black">
          Calculadora de Propinas
        </h1>
      </header>

      <main className="max-w-8xl mx-auto px-4 py-15 grid  md:grid-cols-2 gap-8 bg-amber-50">
        <div className="bg-purple-100 rounded-lg p-5">
          <h3 className="text-4xl text-center font-extrabold text-amber-500">Menú</h3>

          <div className="space-y-3 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="bg-amber-100 rounded-lg p-5">
          <h2 className="text-4xl text-center font-extrabold text-violet-500">Pedidos </h2>
        </div>
      </main>
    </>
  );
}

export default App;
