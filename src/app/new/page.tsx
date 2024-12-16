import Image from "next/image";
import './new.css'; // Make sure to import the custom CSS file

export default function New() {
  return (
    <div className="grid-container">
      <Image className="image" width={200} height={100} src="/product1.webp" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product2.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product3.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product5.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product6.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product7.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product8.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product9.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product10.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product11.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product12.jpg" alt="perfumes" />
      <Image className="image" width={200} height={100} src="/product4.jpg" alt="perfumes" />
    </div>
  );
}
