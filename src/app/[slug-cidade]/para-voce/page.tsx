import { EmblaCarousel } from "@/components/ui/CarroselHome";
import { Navbar } from "@/components/ui/Navbar";


export default function ParaVoce(){
    return(
        <>
        <Navbar />
        <EmblaCarousel slides={['https://mxfibra.com/wp-content/uploads/2023/11/plano-gamers.png','https://mxfibra.com/wp-content/uploads/2023/11/plano-kids.png']} />
        </>
    )
}