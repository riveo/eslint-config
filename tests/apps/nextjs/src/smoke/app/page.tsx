import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function AppSmokePage() {
  return (
    <main>
      <h1>Next.js smoke</h1>
      <Image src="/next.svg" alt="Next.js logo" width={100} height={20} />
      <nav aria-label="Primary">
        <Link href="/about">About</Link>
      </nav>
      <Script id="app-smoke-jsonld" type="application/ld+json">
        {JSON.stringify({ name: 'Next.js smoke' })}
      </Script>
    </main>
  );
}
