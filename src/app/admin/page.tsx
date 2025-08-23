import Link from "next/link";

export default function AdminHome() {
  return (
    <div className="container py-16">
      <h1 className="font-display text-3xl">Admin</h1>
      <ul className="mt-6 list-disc pl-6">
        <li><Link href="/admin/products">Products</Link></li>
        <li><Link href="/admin/orders">Orders</Link></li>
        <li><Link href="/admin/customers">Customers</Link></li>
      </ul>
    </div>
  );
}
