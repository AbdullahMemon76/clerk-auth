import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          My App
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <li>
            <UserButton/>
          </li>
        </div>
      </div>
    </nav>
  );
}