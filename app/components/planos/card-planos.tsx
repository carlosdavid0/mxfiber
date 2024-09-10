/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ms8a9Y9EVfG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  CpuIcon,
  DatabaseIcon,
  MemoryStickIcon,
  NetworkIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "../ui/button";

const cardVariants = cva("w-full select-none grid gap-2", {
  variants: {
    variant: {
      primary: "bg-blue-700",
      secondary: "bg-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const apps = [
  {
    icon: CpuIcon,
    text: "2 vCPU",
  },
  {
    icon: MemoryStickIcon,
    text: "2 GB RAM",
  },
  {
    icon: DatabaseIcon,
    text: "50 GB SSD",
  },
  {
    icon: NetworkIcon,
    text: "1 TB Transfer",
  },
];

export interface CardPlanosProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export default function CardPlanos(
  { className, variant, ...props }: CardPlanosProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <Card className={cardVariants({ variant, className })} ref={ref} {...props}>
      <div className="p-4 space-y-2">
        <h2
          className={cn(
            "text-md font-medium",
            variant === "primary" ? "text-white" : "text-blue-500"
          )}
        >
          Internet fibra + aplicativos
        </h2>
        <p
          className={cn(
            "text-3xl space-x-1",
            variant === "primary" ? "text-lime-500" : "text-blue-500"
          )}
        >
          <strong>450</strong>
          <span>MEGA</span>
        </p>
      </div>
      <div
        className={cn(
          "grid gap-4 p-3 mx-2 rounded-lg",
          variant === "primary" ? "bg-blue-800 text-white" : " text-blue-500"
        )}
      >
        {apps.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-md">
              <div
                className={cn(
                  variant === "primary" ? "text-lime-500" : "text-blue-500"
                )}
              >
                <item.icon size={24} />
              </div>
              <span className="">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col p-2 gap-3">
        <Button
          variant={variant !== "primary" ? "default" : "outline"}
          size="lg"
          className={cn(
            "rounded-full h-16 text-md ",
            variant === "primary" && "bg-white"
          )}
        >
          Assinar Agora
        </Button>
        <Button
          variant="primaryGreen"
          size="lg"
          className=" rounded-full h-16 text-md"
        >
          + Aplicativos
        </Button>

        <div
          className={cn("flex items-center p-3 gap-2 justify-center w-full")}
        >
          <PlusIcon size={32} className={"text-lime-400"} />
          <span
            className={cn(
              "text-md font-medium",
              variant === "primary" ? "text-white" : "text-blue-500"
            )}
          >
            Monte seu plano com os nossos aplicativos
          </span>
        </div>
      </div>
    </Card>
  );
}
