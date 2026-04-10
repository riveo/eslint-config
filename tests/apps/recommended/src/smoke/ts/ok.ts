import { createLabel, type Person } from '../../support/ts/shared.js';

export function describePerson(person: Person) {
  return createLabel(person.name);
}
