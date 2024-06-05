"use client";

import { useEmpresa } from "@/context/Empresa";
import { Plano } from "@/types/planos";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ModalBeneficios } from "./ModalBeneficios";

export function PriceSession({ planos }: { planos: Plano[] }) {
  const [planoSelecionado, setPlanoSelecionado] = useState<Plano | null>(null);

  const { empresa } = useEmpresa();

  if (planos.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
          <h2 className="text-4xl tracking-tight font-normal text-blue-700">
            Mais alta velocidade de{" "}
            <span className="font-semibold">conexão por toda sua casa</span>
          </h2>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,

              partialVisibilityGutter: 20,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          shouldResetAutoplay
          showDots={false}
          className="gd-carousel"
          slidesToSlide={1}
          ssr={true}
          swipeable
        >
          {planos.map((item, index) => (
            <div key={item.id} className="mx-2 ">
              {item.recomendado ? (
                <div
                  id={item.id}
                  key={index}
                  className=" flex flex-col max-w-sm text-gray-900 rounded-xl select-none  border px-4 py-4 bg-mx-blue-800 "
                >
                  <header className="space-y-2 text-white">
                    <p className="text-2xl flex flex-col -space-y-2">
                      <span>Internet Fibra</span>
                      <span className="text-[1.67rem]">+ aplicativos</span>
                    </p>
                    <h2 className="text-4xl space-x-1 text-mx-green-400">
                      <span className="font-bold">
                        {item.nome.split(" ")[0]}
                      </span>
                      <span className="font-bold">
                        {item.nome.split(" ")[1].toUpperCase()}
                      </span>
                    </h2>
                  </header>

                  <section>
                    <ul
                      className="space-y-4 my-6 bg-mx-blue-900 rounded-lg px-4 py-5"
                      id="servicos"
                    >
                      {item.servicos.map((servico, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: servico.servicos_id.icone_personalizado,
                            }}
                          />

                          <span className="text-white font-semibold">
                            {servico.servicos_id.nome}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <section className="space-y-2 mt-6">
                      <Link href={`${empresa?.assine_ja}&text=Gostaria de assinar o plano ${item.nome}` || ""}>
                        <button className="flex items-center justify-center w-full  text-mx-blue-600 font-semibold bg-white hover:text-mx-blue-700 rounded-full h-14 hover:bg-gray-50">
                          <span className="ml-2">Assinar Agora</span>
                        </button>
                      </Link>
                      {item.svas.length >= 1 && (
                        <button
                          onClick={() => {
                            setPlanoSelecionado(item);
                          }}
                          className="flex items-center justify-center w-full  text-mx-blue-600 font-semibold bg-mx-green-400 hover:bg-mx-green-300 rounded-full h-14"
                        >
                          <span className="ml-2">+ Aplicativos</span>
                        </button>
                      )}
                      <button className="mx-5 pt-2 text-md flex items-center text-start leading-4 text-mx-blue-800 gap-2">
                        <PlusIcon className="w-14 text-mx-green-400" />
                        <p className="text-white">
                          Monte seu plano com os nossos aplicativos
                        </p>
                      </button>
                    </section>
                  </section>
                </div>
              ) : (
                <div
                  key={index}
                  className=" flex flex-col  max-w-sm text-gray-900 $ rounded-xl select-none border-mx-blue-800 border px-4 py-8"
                >
                  <header className="space-y-1 text-mx-blue-800">
                    <p className="text-lg">
                      Internet Fibra +{" "}
                      <span className="font-semibold">aplicativos</span>
                    </p>
                    <h2 className="text-4xl space-x-1">
                      <span className="font-semibold">
                        {item.nome.split(" ")[0]}
                      </span>
                      <span className="font-semibold">
                        {item.nome.split(" ")[1].toUpperCase()}
                      </span>
                    </h2>
                  </header>

                  <section>
                    <ul className="space-y-2 my-6" id="servicos-no-default">
                      {item.servicos.map((servico, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: servico.servicos_id.icone_personalizado,
                            }}
                          />
                          <span className="text-mx-blue-800 font-semibold">
                            {servico.servicos_id.nome}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <section className="space-y-2 mt-6">
                      <Link href={`${empresa?.assine_ja}&text=Gostaria de assinar o plano ${item.nome}` || ""}>
                        <button className="flex items-center justify-center w-full  text-white bg-mx-blue-900 hover:bg-mx-blue-800 rounded-full h-14">
                          <span className="ml-2">Assinar Agora</span>
                        </button>
                      </Link>
                      {item.svas.length >= 1 && (
                        <button
                          onClick={() => {
                            setPlanoSelecionado(item);
                          }}
                          className="flex items-center justify-center w-full  text-mx-blue-600 font-semibold bg-mx-green-400 hover:bg-mx-green-300  rounded-full h-14"
                        >
                          <span className="ml-2">+ Aplicativos</span>
                        </button>
                      )}
                      <Link href={`${empresa?.assine_ja}&text=Gostaria de assinar o plano ${item.nome}` || ""}>
                        <button className="mx-5 pt-2 text-md flex items-center text-start leading-4 text-mx-blue-800 gap-2">
                          <PlusIcon className="w-14 text-mx-green-400" />
                          <p>Monte seu plano com os nossos aplicativos</p>
                        </button>
                      </Link>
                    </section>
                  </section>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>

      <ModalBeneficios
        plano={planoSelecionado}
        onClose={() => {
          setPlanoSelecionado(null);
        }}
      />
    </section>
  );
}
