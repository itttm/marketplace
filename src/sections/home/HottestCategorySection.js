import React from "react";
import CategoryCard from "../../components/cards/CardCategory";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HottestCategorySection = () => {
  return (
    <div className="container mx-auto px-5 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[50%] after:translate-y-[50%] after:blur-[300px] after:bg-primary after:rounded-full after:absolute after:z-[-1]">
      <div className="flex items-end justify-between">
        <h2 className="uppercase font-aero  text-[32px]  lg:text-[42px]  leading-[1.4] text-white">
          Hottest <br /> categories
        </h2>

        {/* <ul className="flex items-center space-x-2 mb-2">
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white"></li>
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white/30 backdrop-blur-sm"></li>
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white/30 backdrop-blur-sm"></li>
        </ul> */}
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
          hideOnClick: true,
        }}
        slidesPerView={4}
        spaceBetween={16}
        modules={[Pagination, Navigation]}
        className="hottest-category-swiper mt-8 mr-[calc(-20vw-2.5rem)]  sm:mr-[calc(-20vw-640px)] md:mr-[calc(-20vw-768px)] lg:mr-[calc(-20vw-1024px)] 2xl:mr-[calc(-20vw-1536px)]"
      >
        <SwiperSlide>
          <CategoryCard
            title="Pokemon"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_pokemon.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#FEDE00_0%,#ED4024_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Football"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_football.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#292D75_0%,#009FFD_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Dragon Ball Z"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_dragonball.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#F89513_0%,#D46317_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Zelda"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_zelda.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#20A200_0%,#006C7F_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Pokemon"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_pokemon.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#FEDE00_0%,#ED4024_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Football"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_football.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#292D75_0%,#009FFD_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Dragon Ball Z"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_dragonball.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#F89513_0%,#D46317_100%)]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            title="Zelda"
            description="Highly sought after by both fans and collectors, with some rare cards holding significant value."
            imageSrc="/assets/decorations/category_zelda.png"
            iconSrc="/assets/icons/icon-arrow-up-right.svg"
            cardClassName="bg-[linear-gradient(to_top,#20A200_0%,#006C7F_100%)]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HottestCategorySection;
