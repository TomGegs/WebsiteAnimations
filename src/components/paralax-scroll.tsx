'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Earth,
    EarthLogoImage,
    BlueCircleImage,
} from '../assets/hero-images/images.ts';

export const NewParallax = ({
    products,
}: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products;
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 100, damping: 30, bounce: 100 };

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [1, 0]),
        springConfig
    );

    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0], [0, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.5], [200, -800]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="relative flex h-full flex-col self-auto overflow-hidden bg-primary py-20 pb-[500px] antialiased [perspective:1000px] [transform-style:preserve-3d]"
        >
            {/* Header */}
            <motion.div
                style={{
                    translateY: useSpring(
                        useTransform(scrollYProgress, [0, 1], [0.1, 100]),
                        springConfig
                    ),
                }}
                className="relative z-10 mx-5 flex flex-row lg:mx-20"
            >
                <Header />
            </motion.div>

            {/*Images */}
            <motion.div
                style={{
                    translateY: useSpring(
                        useTransform(scrollYProgress, [0, 1], [0.8, 1000]),
                        springConfig
                    ),
                    opacity: useSpring(
                        useTransform(scrollYProgress, [0, 0.2], [0.8, 0]),
                        springConfig
                    ),
                }}
                className="absolute right-0 top-0  flex w-full flex-row "
            >
                <div className=" m-5 grid w-full grid-cols-4 grid-rows-2 place-items-end gap-5 self-end lg:m-20 ">
                    {firstRow.map((product) => (
                        <ProductCard product={product} key={product.title} />
                    ))}
                </div>
            </motion.div>

            {/* Earth Image */}
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                }}
                className="relative z-30 flex"
            >
                <motion.div
                    style={{
                        opacity: useSpring(
                            useTransform(scrollYProgress, [0.1, 0.2], [1, 0]),
                            springConfig
                        ),
                    }}
                    className="absolute left-[50] top-0  flex w-full translate-x-0.5 "
                >
                    <img
                        src={EarthLogoImage}
                        alt="RecovereLogo"
                        className=" h-full w-full scale-110 overflow-hidden rounded-t-full bg-cover pb-32"
                    />
                </motion.div>

                <motion.div
                    style={{
                        opacity: useSpring(
                            useTransform(scrollYProgress, [0.1, 0.2], [0, 1]),
                            springConfig
                        ),
                    }}
                    className="absolute left-[50] top-0  flex w-full translate-x-0.5 "
                >
                    <img
                        src={Earth}
                        alt="Earth"
                        className=" h-full w-full scale-110 overflow-hidden rounded-t-full bg-cover"
                    />
                </motion.div>
                <motion.div
                    style={{
                        opacity: useSpring(
                            useTransform(scrollYProgress, [0.2, 0.3], [0, 1]),
                            springConfig
                        ),
                    }}
                    className="absolute left-[50] top-0 flex w-full translate-x-0.5 "
                >
                    <img
                        src={BlueCircleImage}
                        alt="Background"
                        className=" h-full w-full scale-110 overflow-hidden rounded-t-full bg-primary bg-cover"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="relative left-0 top-0  mx-auto flex w-full max-w-7xl flex-col gap-y-8 px-4 py-20 font-poppins text-white md:pt-80">
            <h1 className="relative  text-2xl font-bold md:text-7xl ">
                Recovere, the home <br />
                of effective charity
            </h1>
            <p className="max-w-2xl font-medium text-white md:text-2xl">
                Together we can bring{' '}
                <span className="text-secondary">sustainable recovery</span> to
                those in need.
            </p>
            <button className="relative  max-w-xs rounded-xl border-2 px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-primary active:scale-[0.99] lg:text-xl">
                Get involved
            </button>
        </div>
    );
};

export const ProductCard = ({
    product,
}: {
    product: {
        title: string;
        thumbnail: string;
    };
}) => {
    return (
        <motion.div
            key={product.title}
            className="group/product relative  h-44 w-full flex-shrink-0 lg:h-96"
        >
            <img
                src={product.thumbnail}
                height="600"
                width="600"
                className="absolute inset-0  h-full w-full rounded-xl object-cover object-center opacity-25 shadow-md"
                alt={product.title}
            />
        </motion.div>
    );
};
