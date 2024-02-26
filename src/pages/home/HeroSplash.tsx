import { HeroParallax } from '../../components/ui/hero-parallax';

const HeroSplash = () => {
    const heroImages = [
        {
            title: 'mother and daughter',
            link: '/',
            thumbnail:
                'src/assets/heartwarming_image_of_mother_and_daughter_3.webp',
        },
        {
            title: 'Education',
            link: '/products/education',
            thumbnail: 'src/assets/image_of_a_local_business_owner_2.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/heartwarming_image_of_mother_and_daughter_4.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail: 'src/assets/image_of_a_local_business_owner_3.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/image_of_a_moment_of_pure_joy_receiving_fresh_water_2.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail: 'src/assets/joyful_teenager_holding_favourite_toy.webp',
        },

        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/photo_poignantly_capturing_a_woman_receiving_aid_after_disaster_2.webp',
        },

        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation_3.webp',
        },

        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/heartwarming_image_of_mother_and_daughter_4.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail: 'src/assets/image_of_a_local_business_owner_3.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/image_of_a_moment_of_pure_joy_receiving_fresh_water_2.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail: 'src/assets/joyful_teenager_holding_favourite_toy.webp',
        },

        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/photo_poignantly_capturing_a_woman_receiving_aid_after_disaster_2.webp',
        },

        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation_3.webp',
        },

        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
        {
            title: 'Health',
            link: '/products/health',
            thumbnail:
                'src/assets/warming_photo_captures_boy_receiving_clothing_donation.webp',
        },
    ];

    return (
        <section className="h-lvh w-full bg-primary">
            <header>
                <h1 className="heroText"></h1>
                <p className=""></p>
            </header>

            <HeroParallax products={heroImages} />
            <div className="bg-black h-20 w-full text-white">Hello</div>
        </section>
    );
};

export default HeroSplash;
