export function MagicLinkEmail(props: { url: string }) {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", color: "#0B0B0C" }}>
      <h1>Sign in to Zyvia Herbals</h1>
      <p>Click the secure link below to finish signing in:</p>
      <p><a href={props.url}>{props.url}</a></p>
      <p style={{ color: "#777" }}>If you didn’t request this, you can safely ignore this email.</p>
    </div>
  );
}
