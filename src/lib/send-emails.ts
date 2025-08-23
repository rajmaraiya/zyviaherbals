import { resend, FROM_EMAIL } from "./email";
import { OrderConfirmationEmail } from "@/emails/OrderConfirmation";
import { MagicLinkEmail } from "@/emails/MagicLink";

export async function sendOrderEmail(args: {
  to: string;
  orderId: string;
  items: { title: string; qty: number; price: string }[];
  total: string;
}) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: args.to,
    subject: `Your Zyvia order #${args.orderId}`,
    react: OrderConfirmationEmail({ orderId: args.orderId, items: args.items, total: args.total }) as React.ReactElement,
  });
}

export async function sendMagicLinkEmail(args: { to: string; url: string }) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: args.to,
    subject: "Your secure sign-in link",
    react: MagicLinkEmail({ url: args.url }) as React.ReactElement,
  });
}
