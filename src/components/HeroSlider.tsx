"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = { className?: string };

type Slide = {
  id: string;
  prefix: string;
  title: string[];
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
    altText: string;
  };
  cta: {
    text: string;
    href: string;
  };
};

type SlideProps = Slide & {
  className?: string;
};

const slides: Slide[] = [
  {
    id: "1",
    prefix: "New Arrivals",
    title: ["A collection", "made for you"],
    description:
      "Immerse yourself in the latest looks that are redefining style and setting new standards for elegance and flair.",
    image: {
      url: "/landing/hero.png",
      altText: "",
      width: 600,
      height: 788,
    },
    cta: {
      href: "",
      text: "Get Stylish",
    },
  },
  {
    id: "2",
    prefix: "Casual Comfort",
    title: ["Comfy Vibes", "for all moods"],
    description:
      "Embrace relaxed sophistication with our range of casual wear, offering unmatched comfort without compromising on style.",
    image: {
      url: "/landing/hero-casual.png",
      altText: "",
      width: 600,
      height: 1000,
    },
    cta: {
      href: "",
      text: "Exlpore now",
    },
  },
  {
    id: "3",
    prefix: "Timeless Classics",
    title: ["Right choice", "everyday."],
    description:
      "Experience the grace of timeless classics in our collection, offering enduring style that stands the test of time.",
    image: {
      url: "/landing/hero.png",
      altText: "",
      width: 600,
      height: 1000,
    },
    cta: {
      href: "",
      text: "Discover Classics",
    },
  },
];

const animationVariants = {
  /* related to text, cta .. */
  container: {
    hidden: {},
    show: {
      transition: {
        duration: 0,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        duration: 0,
      },
    },
  },
  prefix: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 80,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeIn",
      },
    },
  },
  button: {
    hidden: {
      opacity: 0,
      x: 40,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      x: 40,
      transition: {
        // delay: 0.2,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
  containerChildren: {
    hidden: {
      x: "120%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
        ease: "circIn",
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        ease: "circOut",
      },
    },
  },

  /* related to image */
  image: {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        delay: 0.3,
        duration: 0.6,
      },
    },
    exitFade: {
      opacity: 0,
      transition: {
        delay: 0.1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exitTranslate: {
      y: 250,
      transition: {
        ease: "circIn",
        delay: 0.3,
        duration: 0.5,
      },
    },
  },
  imageBg: {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 40,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        delay: 0.1,
        duration: 0.5,
      },
    },
  },
};

export default function HeroSlider({ className }: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const maxSlideIndex = slides.length - 1;

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev > 0 ? --prev : maxSlideIndex));
  };

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev < maxSlideIndex ? ++prev : 0));
  };

  return (
    <div className={cn("relative w-full", className)}>
      <Button
        variant="outline"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 max-sm:bg-transparent max-sm:border-none max-sm:shadow-none"
        onClick={() => prevSlide()}
      >
        <span className="sr-only">Last slide</span>
        <ArrowLeftIcon className="h-5 w-5 sm:hidden" aria-hidden/>
        <ArrowLongLeftIcon className="w-7 h-7 max-sm:hidden" aria-hidden/>
      </Button>
      <Button
        variant="outline"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50  max-sm:bg-transparent max-sm:border-none max-sm:shadow-none"
        onClick={() => nextSlide()}
      >
        <span className="sr-only">Next slide</span>
        <ArrowRightIcon className="h-5 w-5 sm:hidden" aria-hidden/>
        <ArrowLongRightIcon className="w-7 h-7 max-sm:hidden" aria-hidden/>
      </Button>
      <AnimatePresence>
        <Slide
          className="px-8 sm:px-20"
          key={slides[activeSlideIndex].id}
          {...slides[activeSlideIndex]}
        />
      </AnimatePresence>
    </div>
  );
}

const Slide = ({
  id,
  prefix,
  title,
  description,
  image,
  cta,
  className,
}: SlideProps) => {
  const MotionImage = useMemo(() => {
    return motion(Image);
  }, []);

  const MotionLink = useMemo(() => {
    return motion(Link);
  }, []);

  return (
    <section
      className={cn(
        "absolute max-sm:flex max-sm:flex-col max-sm:relative w-full h-full",
        className
      )}
      key={id}
    >
      <motion.div
        variants={animationVariants.container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="container mx-auto sm:h-full z-50 pt-20 sm:py-28"
      >
        <div className="max-w-sm lg:max-w-xl flex flex-col h-full lg:justify-center overflow-hidden">
          <motion.p
            key={prefix}
            variants={animationVariants.prefix}
            className="w-full text-sm tracking-widest uppercase inline-flex overflow-hidden"
          >
            {prefix}
          </motion.p>
          <h1
            key="h2"
            className="mb-2 sm:mb-4 text-3xl sm:text-6xl  font-semibold lg:text-8xl"
          >
            {title.map((titleLine, index) => (
              <motion.span
                key={`slide-${id}-title-${index}`}
                className="flex fit-content"
                variants={animationVariants.containerChildren}
              >
                {titleLine}
              </motion.span>
            ))}
          </h1>
          <motion.p
            key="p2"
            variants={animationVariants.containerChildren}
            className="text-lg font-light lg:text-2xl max-w-[520px]"
          >
            {description}
          </motion.p>
          <MotionLink
            variants={animationVariants.button}
            href="/collections"
            className={cn(
              buttonVariants({ size: "lg" }),
              "text-md mr-auto mt-2 sm:mt-6 px-8 group flex-shrink-0"
            )}
          >
            {cta.text}
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
          </MotionLink>
        </div>
      </motion.div>
      <div className="max-sm:flex-1 sm:absolute w-full sm:h-full sm:top-0 sm:left-0 pointer-events-none">
        <div className="sm:ml-[50%] h-full max-sm:pt-4 relative flex max-sm:items-start justify-center items-end">
          <motion.div
            variants={animationVariants.imageBg}
            initial="hidden"
            animate="show"
            exit={"exit"}
            className="absolute -z-10 ml-[5%] sm:h-[100vh] min-h-[600px] min-w-[600px] sm:w-[100vh] rounded-[100%] bg-[#c5d3dd] sm:top-[25%] max-w-[1000px] max-h-[1000px]"
          ></motion.div>
          <MotionImage
            className="max-sm:max-h-[600px] max-sm:mt-4 max-sm:ml-8 object-contain sm:object-bottom max-h-[90%] sm:!top-auto sm:bottom"
            variants={animationVariants.image}
            initial="hidden"
            animate="show"
            exit={["exitFade", "exitTranslate"]}
            priority={id === "1"}
            src={image.url}
            sizes="(min-width: 640px) 50vw, calc(100vw - 64px)"
            fill
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};
