import { heroImages } from './assets/hero-images/images';
import { NewParallax } from './components/paralax-scroll';

function App() {
    return (
        <section className="h-[150dvh] w-full bg-primary lg:h-[200dvh]">
            <NewParallax products={heroImages} />
        </section>
    );
}

export default App;
