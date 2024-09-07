/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ms8a9Y9EVfG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import {
  CpuIcon,
  DatabaseIcon,
  MemoryStickIcon,
  NetworkIcon,
} from "lucide-react";

export default function CardPlanos() {
  return (
    <Card className="w-full p-6 grid gap-6 bg-blue-700">
      <div className="">
        <h2 className="text-2xl font-bold">Pro Plan</h2>
        <p className="text-muted-foreground">Ideal para equipes pequenas</p>
      </div>
      <div className="grid gap-4 bg-blue-800 p-3 rounded-lg">
        {itemsCardPlanos({ title: "2 GB de RAM", icon: <MemoryStickIcon /> })}
        {itemsCardPlanos({ title: "2 CPUs", icon: <CpuIcon /> })}
        {itemsCardPlanos({
          title: "10 GB de armazenamento",
          icon: <DatabaseIcon />,
        })}
        {itemsCardPlanos({
          title: "1 Gbps de largura de banda",
          icon: <NetworkIcon />,
        })}
      </div>
    </Card>
  );
}

type ItemsCardPlanosProps = {
  title: string;
  icon: React.ReactNode;
};

function itemsCardPlanos({ title, icon }: ItemsCardPlanosProps) {
  return (
    <div className="flex items-center justify-between text-white">
      <div className="flex items-center gap-2 text-md">
        <div className="text-lime-400">{icon}</div>
        <span className="">{title}</span>
      </div>
    </div>
  );
}
