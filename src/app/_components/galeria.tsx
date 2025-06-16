import Image from "next/image"
import bgphotos from "../../../public/bg-photos.png"
import play from "../../../public/play.svg"


export function Galeria() {
    return (
        <section id="galeria" className="relative flex items-center justify-center overflow-hidden py-8 px-4">
            <div className="relative w-full h-auto">
                <Image
                    src={bgphotos}
                    alt="Imagens dos voluntários e dos irmãos"
                    className="w-full h-auto object-cover mask-gradient"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <a href="https://www.flickr.com/photos/albumdogav/albums/">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Galeria de fotos  
                            <Image
                                src={play}
                                alt="Ícone de play"
                                width={28}
                                height={28}
                                className="inline-block mx-3"
                            />
                        </h2>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}