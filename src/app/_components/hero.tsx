import logo from "../../../public/logo.png"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative bg-[url('/bg-ajuda.jpg')] bg-cover bg-center">
            {/* Overlay azul escuro com transparência */}
            <div className="absolute inset-0 bg-blue-900/70"></div>

            <div className="relative container mx-auto py-8 px-4">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="h-full">
                        <Image
                            src={logo}
                            alt="Logo da Grupo Amigos Voluntários"
                            className="object-contain"
                        />
                    </div>
                    <div className="space-y-6 text-white">
                        <h1 className="text-3xl md:text-4xl lg:5xl leading-10 font-bold">
                            Somos uma ONG que alimenta mais de 370 moradores de rua no centro de São Paulo.
                        </h1>
                        <p className="lg:text-lg">Aprenda mais sobre quem somos</p>
                        <div className="space-y-2">
                            <a
                                href="https://wa.me/seu_numero_aqui"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center text-white"
                                target="_blank" rel="noopener noreferrer"
                            >
                                Contato via WhatsApp
                            </a>

                            <a
                                href="https://www.instagram.com/gav.moradoresderua?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="bg-pink-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center text-white"
                                target="_blank" rel="noopener noreferrer"
                            >
                                Ver no Instagram
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
