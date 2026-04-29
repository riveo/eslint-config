const docs = [
  { href: 'https://react.dev/', label: 'React' },
  { href: 'https://vite.dev/', label: 'Vite' },
];

export function ComponentSmoke() {
  return (
    <section>
      <h1>React smoke</h1>
      <p>
        A safe example with nested <strong>children</strong>.
      </p>
      <ul>
        {docs.map((doc) => (
          <li key={doc.href}>
            <a href={doc.href} target="_blank" rel="noreferrer">
              {doc.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
