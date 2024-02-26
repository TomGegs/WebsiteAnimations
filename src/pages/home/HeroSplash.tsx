import { HeroParallax } from '../../components/ui/hero-parallax';
import { heroImages } from '../../assets/hero-images/images';
const HeroSplash = () => {
    return (
        <section className="h-lvh w-full bg-primary">
            <header>
                <h1 className="heroText"></h1>
                <p className=""></p>
            </header>

            <HeroParallax products={heroImages} />
            <div className="h-20 w-full bg-black text-white">Hello</div>
        </section>
    );
};

export default HeroSplash;
