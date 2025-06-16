import logobenfeitoria from "../../../public/logo_benfeitoria.png"
import Image from "next/image"
export function Assinatura() {
    return (
        <section className="container mx-auto py-8 px-4 relative items-center flex justify-center overflow-hidden">
            <div className="container mx-auto relative items-center flex justify-center overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 ">
                    <div className="h-1/2 mx-2 ">
                        <Image
                        src={logobenfeitoria}
                        alt="Logo do Benfeitoria"
                        className="object-contain"
                        />
                    </div>
                </div>
                <a 
                    href="https://benfeitoria.com/projeto/gav" 
                    className="bg-rose-600 px-5 py-2 my-5 rounded-md font-semibold items-center justify-center text-blue">
                    Assine aqui
                </a>
            </div>
        </section>
    )
}