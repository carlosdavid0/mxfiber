import { Play, Gamepad2, Music, Tv } from "lucide-react";
import { CarouselDestaquesOTT } from "./carrousell";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Netflix",
    image: "https://via.placeholder.com/300",
    description:
      "Watch TV shows and movies recommended just for you, including award-winning Netflix original series, movies, and documentaries.",
    color: "text-red-500",
  },
  {
    name: "Amazon Prime Video",
    image: "https://via.placeholder.com/300",
    description:
      "Watch movies and TV shows recommended for you, including Amazon Original series, movies, and documentaries.",
    color: "text-blue-500",
  },
  {
    name: "Disney+",
    image: "https://via.placeholder.com/400",
    description:
      "Watch Disney, Pixar, Marvel, Star Wars, and National Geographic movies, TV shows, and documentaries.",
    color: "text-yellow-500",
  },
  {
    name: "HBO Max",
    image: "https://via.placeholder.com/300",
    description:
      "Watch the best movies, TV shows, and documentaries from HBO, Warner Bros., DC, and more.",
    color: "text-purple-500",
  },
  {
    name: "Paramount+",
    image: "https://via.placeholder.com/300",
    description:
      "Watch the best movies, TV shows, and documentaries from Paramount Pictures, CBS, and more.",
    color: "text-blue-500",
  },
  {
    name: "Apple TV+",
    image: "https://via.placeholder.com/300",
    description:
      "Watch movies and TV shows recommended for you, including Apple Original series, movies, and documentaries.",
    color: "text-blue-500",
  },
  {
    name: "Hulu",
    image: "https://via.placeholder.com/300",
    description:
      "Watch movies and TV shows recommended for you, including Hulu Original series, movies, and documentaries.",
    color: "text-green-500",
  },
];

export default function Component() {
  return (
    <section
      className={cn(
        "max-w-screen-xl mx-auto grid",
        "grid-cols-1 lg:grid-cols-3",
        "lg:py-4"
      )}
    >
      <div className="space-y-6 px-4 lg:max-w-sm py-5 lg:py-0">
        <div className="flex space-x-4">
          {[Play, Gamepad2, Music, Tv].map((Icon, index) => (
            <div key={index} className="rounded-full bg-gray-100 p-3">
              <Icon className="h-6 w-6 text-gray-600" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-blue-600 md:text-4xl lg:text-4xl">
          + Entretenimento junto com sua Fibra Internet.
        </h2>
        <p className="text-lg text-gray-600">
          Aqui na MX Fibra, você pode personalizar seu plano: escolha sua
          velocidade e adicione os melhores apps de streaming!
        </p>
      </div>

      <div className="px-4 col-span-2">
        <CarouselDestaquesOTT data={services} />
      </div>
    </section>
  );
}
