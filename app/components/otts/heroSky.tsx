import Image from "next/image";
import { Button } from "../ui/button";

export function HeroSky() {
  return (
    <div className="w-full">
      <div className="relative h-[400px] max-h-full">
        <Image
          src="https://res.cloudinary.com/dsolucoes/image/upload/v1725892199/mxfibra/rpn49hcrdvgkodtdn0hu.png"
          alt="Background Image"
          className="lg:object-fill object-cover w-full h-full"
          fill
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center mx-auto max-w-screen-xl">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-xl space-y-4 text-primary-foreground">
              <h2 className="text-5xl font-bold">
                Paulistão é
                <br />
                na <span className="text-red-600">SKY+!</span>
              </h2>
              <p className="text-lg md:text-xl">
                Acompanhe o estadual mais disputado do Brasil nos canais
                exclusivos DSPORTS. São mais de 90 jogos!
              </p>
              <div className="flex gap-4">
                <Button
                  variant="destructive"
                  className="h-16 w-full lg:min-w-[70%] rounded-xl transition-all"
                >
                  Assine Já
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
