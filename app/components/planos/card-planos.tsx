/* eslint-disable react/display-name */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Empresa } from "@/types/empresa";
import { Plano } from "@/types/planos";
import { cva, VariantProps } from "class-variance-authority";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";
import ModalAplicativos from "./modalAplicativos";

import { Icon } from "@iconify/react";

const cardVariants = cva(
  "w-full select-none grid gap-2 transition-all duration-500",
  {
    variants: {
      variant: {
        primary: "bg-blue-700",
        secondary: "bg-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface CardPlanosProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  data: Plano;
  empresa: Empresa;
  isLoading?: boolean;
}
const CardPlanos = forwardRef<HTMLDivElement, CardPlanosProps>(
  ({ className, variant, data, empresa, isLoading, ...props }, ref) => {
    return (
      <div className={cn("w-full ")}>
        {isLoading ? (
          <Card className={cn(cardVariants({ variant, className }))} {...props}>
            <div className="p-4 space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="pb-5">
              <div className="grid gap-4 p-3 mx-2 rounded-lg bg-blue-800">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-8 w-44" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col p-2 gap-3">
              <Skeleton className="h-16 w-full rounded-full" />
              <Skeleton className="h-16 w-full rounded-full bg-lime-600" />
            </div>

            <div
              className={cn(
                "flex items-center p-3 gap-2 justify-center w-full"
              )}
            >
              <PlusIcon size={32} className={"text-lime-400"} />
              <span
                className={cn(
                  "text-md font-medium",
                  variant === "primary" ? "text-white" : "text-blue-500"
                )}
              >
                <Skeleton className="h-4 w-full" />
              </span>
            </div>
          </Card>
        ) : (
          <Card
            className={cn(
              cardVariants({ variant, className }),
              "transition-all duration-300 ease-in-out"
            )}
            ref={ref}
            {...props}
          >
            <div className="p-4 space-y-2">
              <h2
                className={cn(
                  "text-md font-medium",
                  variant === "primary" ? "text-white" : "text-blue-500"
                )}
              >
                Internet fibra {data?.svas?.length > 0 && `+ Aplicativos`}
              </h2>
              <p
                className={cn(
                  "text-3xl space-x-1",
                  variant === "primary" ? "text-lime-500" : "text-blue-500"
                )}
              >
                {data?.nome.toUpperCase()}
              </p>
            </div>
            <div
              className={cn(
                "grid gap-4 p-3 mx-2 rounded-lg",
                variant === "primary"
                  ? "bg-blue-800 text-white"
                  : " text-blue-500"
              )}
            >
              {data.servicos.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-md">
                    <div
                      className={cn(
                        variant === "primary"
                          ? "text-lime-500"
                          : "text-blue-500"
                      )}
                    >
                      <Icon
                        icon={item.servicos_id.icone}
                        style={{
                          width: 30,
                          height: 30,
                        }}
                      />
                    </div>
                    <span>{item.servicos_id.nome}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col p-2 gap-3">
              <Link
                href={`${empresa?.whatsapp}?text=Gostaria de assinar o plano ${data?.nome}`}
              >
                <Button
                  variant={variant !== "primary" ? "default" : "outline"}
                  size="lg"
                  className={cn(
                    "rounded-full h-16 text-md w-full ",
                    variant === "primary" && "bg-white"
                  )}
                >
                  Assinar Agora
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="primaryGreen"
                    size="lg"
                    className="rounded-full h-16 text-md"
                  >
                    + Aplicativos
                  </Button>
                </DialogTrigger>

                <ModalAplicativos data={data} />
              </Dialog>

              <div
                className={cn(
                  "flex items-center p-3 gap-2 justify-center w-full"
                )}
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
        )}
      </div>
    );
  }
);

export default CardPlanos;
