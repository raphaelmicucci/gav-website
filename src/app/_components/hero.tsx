import logo from "../../../public/logo.png"

export function Hero() {
    return (
        <section className="bg-[#F0FBFF] relative overflow-hidden">
            <div className="container mx-auto py-16 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 " >
                    <div className="space-y-6">

                        
                        <h1 className="text-3xl md:text-4xl lg:5xl leading-10 fontbold">Somos uma ONG que alimenta mais de 370 moradores de rua no centro de São Paulo.</h1>
                        <p className="lg:text-lg">Aprenda mais sobre quem somos</p>
                        <div>
                            <a 
                            href="" 
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center">
                                Contato via WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block h-full">
                        <h1>foto voluntários</h1>
                    </div>
                </article>
            </div>
        </section>
    )
}