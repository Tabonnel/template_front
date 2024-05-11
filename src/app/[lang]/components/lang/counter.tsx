"use client";

// TODO SUPPRIMER CE COMPOSANT QUI EST UN EXEMPLE DE COMPOSANT UTILISANT LA TRADUCTION COTE CLIENT

import { useState } from "react";
import { type getDictionary } from "../../../../get-dictionary";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["component"]["counter"];
}) {
  const [count, setCount] = useState(0);
  return (
    <p>
      This component is rendered on client:
      <button onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </button>
      {count}
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  );
}
