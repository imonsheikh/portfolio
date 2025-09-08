"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-5 md:py-10 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Title>Services I Provide</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
            {servicesData?.map((item) => (
              <div
                key={item?._id}
                className="flex flex-col p-6 bg-lightSky/5 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 gap-2 hover:scale-103 hover:bg-lightSky/20 hoverEffect"
              >
                <div className="w-full flex items-center justify-between">
                  <p className="text-5xl font-extrabold text-outline group-hover:text-outline-hover hoverEffect text-transparent">
                    {item?._id}
                  </p>
                
                </div>
                <h2 className="font-semibold text-2xl">{item?.title}</h2>
                <p className="text-sm md:text-base text-white/80">
                  {item?.description}
                </p>

                <div className="border-b border-white/20 w-full mt-2" />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPage;