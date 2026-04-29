import { useState } from 'react';

export function RulesOfHooksFailure({ enabled }: { enabled: boolean }) {
  if (enabled) {
    useState(0);
  }

  return <div>Hooks failure</div>;
}
