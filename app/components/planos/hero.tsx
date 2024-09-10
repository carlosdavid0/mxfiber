import { CarouselPlanos } from "./carrousell-planos";

export function HeroPlanos() {
  return (
    <section>
      <div>
        <h1 className="text-3xl text-center  text-blue-800 space-x-1">
          <span>Mais</span>
          <strong>Velocidade</strong>
          <span>de</span>
          <strong>conexão</strong>
          <span>por toda sua casa</span>
        </h1>

        <nav>
          <ul className="flex items-center justify-center gap-4 py-5 transition-all duration-300">
            <li className=" text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              Internet
            </li>
            <li className=" text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              TV
            </li>
            <li className=" text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              Combos
            </li>
          </ul>
        </nav>
        <CarouselPlanos />
      </div>
    </section>
  );
}
