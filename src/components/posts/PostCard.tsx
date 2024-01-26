"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Lato } from "next/font/google";
import { useRef } from "react";
import { type IPost } from "~/constants/interfaces";

const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
});

const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.01,
};

const PostCard = ({ item }: { item: IPost }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end end"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const imageYSpring = useSpring(imageY, springConfig);

  const textY = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const textYSpring = useSpring(textY, springConfig);


  return (
    <div
      ref={cardRef}
      className="flex min-h-screen w-full flex-col items-center space-y-10 lg:flex-row lg:-space-x-[10%]"
    >
      {/*  */}
      <div className="-z-10 w-full">
        <div className="overflow-hidden">
          <motion.img
            style={{ y: imageYSpring }}
            src={item.image}
            alt={item.title}
            width={700}
            height={700}
            className="aspect-square min-w-full object-cover lg:min-w-[700px]"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-8 lg:flex-col">

        <motion.div
          style={{ y: textYSpring }}
          className="space-y-6 bg-brown-50 p-16"
        >
          <h2
            className={`text-4xl font-bold text-brown-900 sm:text-5xl ${lato.className}`}
          >
            {item.title}
          </h2>
          <p className="text-base leading-relaxed sm:text-lg">{item.content}</p>
          <button
            type="button"
            className="bg-brown-900 px-4 py-2 text-brown-50 transition-all duration-300 hover:opacity-80"
          >
            Read more
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PostCard;
