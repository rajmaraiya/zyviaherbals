export function OrderConfirmationEmail(props: { orderId: string; items: { title: string; qty: number; price: string }[]; total: string }) {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: "#0B0B0C" }}>
      <h1>Thank you for your order</h1>
      <p>Order #{props.orderId}</p>
      <table cellPadding={8} style={{ borderCollapse: "collapse" }}>
        <thead><tr><th align="left">Item</th><th>Qty</th><th align="right">Price</th></tr></thead>
        <tbody>
          {props.items.map((i, idx) => (
            <tr key={idx}>
              <td>{i.title}</td>
              <td align="center">{i.qty}</td>
              <td align="right">{i.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr><td></td><td align="right"><strong>Total</strong></td><td align="right"><strong>{props.total}</strong></td></tr>
        </tfoot>
      </table>
      <p style={{ color: "#777" }}>You’ll receive another email when your order ships.</p>
    </div>
  );
}
