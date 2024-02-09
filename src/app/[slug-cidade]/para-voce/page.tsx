import { EmblaCarousel } from "@/components/ui/CarroselHome";
import { Navbar } from "@/components/ui/Navbar";


export default function ParaVoce() {
    return (
        <>
            <Navbar />
            <EmblaCarousel slides={['https://res.cloudinary.com/dsolucoes/image/upload/v1707504548/md9rrpbvsbdvpzvyl73f.png', 'https://res.cloudinary.com/dsolucoes/image/upload/v1707504547/elz4iit22czrh36j7jdt.png', 'https://res.cloudinary.com/dsolucoes/image/upload/v1707504547/sygpxil9uyjijsirxfpf.png']} />
        </>
    )
}