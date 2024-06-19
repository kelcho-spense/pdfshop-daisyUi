import heroImg from '../assets/hero.png';
export default function Hero() {
    return (
        <div className="hero h-fit bg-base-200 mb-20">
            <div className="hero-content grid md:grid-cols-2 sm:gap-5">
                <div>
                    <h1 className="text-5xl font-bold">Wonna read some PDFs!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in.
                        Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline btn-info">Join Eazy Read</button>
                </div>
                <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    )
}

