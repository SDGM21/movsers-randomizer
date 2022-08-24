import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="motion-safe:animate-bounce">
        HolaGuapa, Aqui ya tienes todo, solo usa tu imaginacion y recuerda leer
        la documentacion de Tailwindcss
      </p>
      <div className="w-1/4 animate-bounce">
        <h1 className="font-sans">LEE LA DOCUMENTACION</h1>
      </div>
    </div>
  );
}

export default App;
