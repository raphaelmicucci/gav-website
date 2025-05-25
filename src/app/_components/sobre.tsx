import foto1 from "../../../public/foto1.jpg"
import iconSolidariedade from "../../../public/solidariedade.png"
import Image from "next/image"

export function Sobre() {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto py-8 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-x-50 gap-y-10" >
                    <div className="space-y-6 mx-auto" >
                        <p className="lg:text-lg">Somos uma instituição sem fins lucrativos, sem vínculos religiosos ou políticos, e sem patrocinadores. Nosso objetivo é aliviar o sofrimento dos moradores de rua, oferecendo alimentos, bebidas, roupas e cobertores através do trabalho voluntário, com foco na solidariedade e no apoio humanitário.</p>
                        <div>
                            <Image
                            src={iconSolidariedade}
                            alt="Ícone representando solidariedade"
                            className="mx-auto px-4"
                            />
                        </div>
                    </div>
                    <div className="h-1/2">
                        <Image
                        src={foto1}
                        alt="Voluntários fantasiados de super-heróis tiram fotos com moradores"
                        className="object-contain"
                        />
                    </div>

                </article>
            </div>
        </section>
    )
}