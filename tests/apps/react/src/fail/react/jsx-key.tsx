const docs = ['React', 'Vite'];

export function MissingKeyFailure() {
  return (
    <ul>
      {docs.map((doc) => (
        <li>{doc}</li>
      ))}
    </ul>
  );
}
