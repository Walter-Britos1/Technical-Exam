import { Search } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <div>
      <h1>Mi Tienda</h1>
      <input type="search" />
      <Search size={24} />
      <p>Mi cuenta</p>
      <CircleUserRound size={24} />
      <ShoppingCart size={24} />
    </div>
  )
}
