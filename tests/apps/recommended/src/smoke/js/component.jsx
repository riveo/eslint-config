import { createLabel } from '../../support/js/shared.js';

export function Greeting({ name }) {
  return (
    <p>
      Hello, {name}, here's your label: {createLabel(name)}
    </p>
  );
}
