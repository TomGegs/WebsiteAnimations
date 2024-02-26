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
        </section>
    );
};

export default HeroSplash;
