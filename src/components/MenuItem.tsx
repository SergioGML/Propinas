import type { MenuItem } from "../types";

//Crear un type que reciba un objeto MenuItem y una función addItem
type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

//NO OLVIDARSE DE: Extraer los elementos de la interfaz MenuItemProps

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-purple-800 p-4 w-full rounded-lg bg-purple-200 hover:bg-purple-300 cursor-pointer"
      onClick={() => addItem(item)}
    >
      <p className="font-light py-1.5">{item.name}</p>
      <p className="font-black text-amber-600">${item.price}</p>
    </button>
  );
}
