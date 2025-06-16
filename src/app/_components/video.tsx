export function Video() {
    return (
        <section className="w-full py-8 px-4 flex justify-center items-center bg-white">
            <div className="w-full max-w-4xl aspect-video relative">
                <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/357611560?h=da87280ca1"
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}