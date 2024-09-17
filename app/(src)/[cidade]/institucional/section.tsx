"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Heart, ThumbsUp, Zap } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function SectionInstitucional() {
  const strongAnimation = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Controle de animações
  const headerAnimation = useAnimation();
  const historyAnimation = useAnimation();
  const missionVisionAnimation = useAnimation();
  const valoresAnimation = useAnimation();
  const diferenciaisAnimation = useAnimation();
  const contatoAnimation = useAnimation();

  // Hooks de InView para cada seção
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [historyRef, historyInView] = useInView({ threshold: 0.1 });
  const [missionVisionRef, missionVisionInView] = useInView({ threshold: 0.1 });
  const [valoresRef, valoresInView] = useInView({ threshold: 0.1 });
  const [diferenciaisRef, diferenciaisInView] = useInView({ threshold: 0.1 });
  const [contatoRef, contatoInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (headerInView) headerAnimation.start("visible");
    else headerAnimation.start("hidden");

    if (historyInView) historyAnimation.start("visible");
    else historyAnimation.start("hidden");

    if (missionVisionInView) missionVisionAnimation.start("visible");
    else missionVisionAnimation.start("hidden");

    if (valoresInView) valoresAnimation.start("visible");
    else valoresAnimation.start("hidden");

    if (diferenciaisInView) diferenciaisAnimation.start("visible");
    else diferenciaisAnimation.start("hidden");

    if (contatoInView) contatoAnimation.start("visible");
    else contatoAnimation.start("hidden");
  }, [
    headerInView,
    historyInView,
    missionVisionInView,
    valoresInView,
    diferenciaisInView,
    contatoInView,
    headerAnimation,
    historyAnimation,
    missionVisionAnimation,
    valoresAnimation,
    diferenciaisAnimation,
    contatoAnimation,
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.header
        ref={headerRef}
        className="bg-blue-600 text-primary-foreground py-10 sm:py-20 text-center"
        initial="hidden"
        animate={headerAnimation}
        variants={strongAnimation}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Quem Somos</h1>
          <p className="text-base sm:text-xl max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quia, eaque, voluptatem nemo quod atque quos repudiandae
            quae autem doloremque. Consequuntur, voluptatem doloribus.
          </p>
        </div>
      </motion.header>

      <main className="flex-grow">
        {/* Nossa História */}
        <motion.section
          ref={historyRef}
          className="py-8 sm:py-16 container mx-auto flex flex-col-reverse lg:flex-row lg:items-center"
          initial="hidden"
          animate={historyAnimation}
          variants={strongAnimation}
        >
          <motion.img
            src="https://diginetelecom.com/wp-content/uploads/2024/06/modern-warehouse-building-storage-cargo-goods-industrial-supply-chain.jpg"
            alt="Nossa Empresa"
            className="w-full h-64 sm:h-96 lg:w-1/3 object-cover object-center rounded-lg mb-8 lg:mb-0"
            whileHover={{ scale: 1.05 }}
          />
          <div className="lg:ml-12 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
              Nossa História
            </h2>
            <p className="text-black sm:text-lg max-w-3xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quia, eaque, voluptatem nemo quod atque quos
              repudiandae quae autem doloremque. Consequuntur, voluptatem
              doloribus.
            </p>
          </div>
        </motion.section>

        {/* Missão e Visão */}
        <motion.section
          ref={missionVisionRef}
          className="py-12 sm:py-16 bg-blue-600"
          initial="hidden"
          animate={missionVisionAnimation}
          variants={strongAnimation}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div className="bg-transparent text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-primary-foreground" />
                    Nossa Missão
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore eveniet
                  </p>
                </CardContent>
              </motion.div>
              <motion.div className="bg-transparent text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-primary-foreground" />
                    Nossa Visão
                  </h3>
                  <p>
                    Ser reconhecida globalmente como a parceira preferencial em
                    transformação digital, definindo o padrão de excelência em
                    inovação tecnológica.
                  </p>
                </CardContent>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Nossos Valores */}
        <motion.section
          ref={valoresRef}
          className="py-12 sm:py-16"
          initial="hidden"
          animate={valoresAnimation}
          variants={strongAnimation}
        >
          <div className="container mx-auto px-4 text-black">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Excelência",
                  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eveniet `,
                },
                {
                  icon: Heart,
                  title: "Paixão",
                  description:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, officia? Magni quis quidem reprehenderit odit rem, non deleniti nostrum aperiam voluptatum excepturi eligendi.",
                },
                {
                  icon: ThumbsUp,
                  title: "Integridade",
                  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eveniet`,
                },
              ].map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Nossos Diferenciais */}
        <motion.section
          ref={diferenciaisRef}
          className="py-12 sm:py-16 text-white bg-blue-600"
          initial="hidden"
          animate={diferenciaisAnimation}
          variants={strongAnimation}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Nossos Diferenciais
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                `Lorem ipsum, dolor sit amet consectetur`,
                `Lorem ipsum, dolor sit amet consectetur`,
                `Lorem ipsum, dolor sit amet consectetur`,
                `Lorem ipsum, dolor sit amet consectetur`,
                `Lorem ipsum, dolor sit amet consectetur`,
                `Lorem ipsum, dolor sit amet consectetur`,
              ].map((diferencial) => (
                <li
                  key={diferencial}
                  className="flex items-center gap-2 justify-center"
                >
                  <Zap className="w-4 h-4" />
                  <p>{diferencial}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Contato */}
        <motion.section
          ref={contatoRef}
          className="py-12 sm:py-16"
          initial="hidden"
          animate={contatoAnimation}
          variants={strongAnimation}
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Fale Conosco
              </h2>
              <Button>Entre em Contato</Button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
