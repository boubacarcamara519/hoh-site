import UnsubscribeConfirmation from "@/components/newsletter/UnsubscribeConfirmation";
import { verifyUnsubscribeToken } from "@/lib/newsletter-unsubscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

type UnsubscribePageProps = {
  searchParams: Promise<{ id?: string; token?: string }>;
};

export default async function UnsubscribePage({
  searchParams
}: UnsubscribePageProps) {
  const { id = "", token = "" } = await searchParams;
  const valid =
    Boolean(process.env.NEXTAUTH_SECRET) &&
    verifyUnsubscribeToken(id, token);

  return (
    <section className="mx-auto max-w-xl px-6 py-20">
      <UnsubscribeConfirmation id={id} token={token} valid={valid} />
    </section>
  );
}
