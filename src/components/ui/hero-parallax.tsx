'use client';
import React from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from 'framer-motion';

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [10, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.5], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="relative flex h-fit flex-col  bg-primary  self-auto overflow-hidden py-40 pb-[500px] antialiased [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="mb-20 flex flex-row space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 font-poppins text-white md:py-40">
            <h1 className="text-2xl font-bold md:text-7xl dark:text-white">
                Recovere, the home <br />
                of effective charity
            </h1>
            <p className="mt-8 max-w-2xl font-medium text-white md:text-2xl">
                Together we can bring{' '}
                <span className="text-secondary">sustainable recovery</span> to those in need.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -5,
                transition: {
                    duration: 0.3,
                },
                scale: 1.01,
            }}
            key={product.title}
            className="group/product relative h-96  w-[30rem] flex-shrink-0"
        >
            <img
                src={product.thumbnail}
                height="600"
                width="600"
                className="absolute inset-0 h-full w-full rounded-xl object-cover object-left-top shadow-md"
                alt={product.title}
            />
            <div className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-lightSecondary/55 opacity-0 group-hover/product:opacity-80"></div>
            <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
                {product.title}
            </h2>
        </motion.div>
    );
};
