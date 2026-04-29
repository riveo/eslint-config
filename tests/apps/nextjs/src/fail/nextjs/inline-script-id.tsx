import Script from 'next/script';

export default function InlineScriptIdFailure() {
  return (
    <Script>
      {`console.log('missing id')`}
    </Script>
  );
}
