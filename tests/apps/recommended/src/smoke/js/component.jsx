import { createLabel } from '../../js/support.js';

export function Greeting({ name }) {
  return <p>Hello, {name}, here's your label: {createLabel(name)}</p>;
}
