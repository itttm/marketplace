import React from "react";
import CategoryCard from "../../components/cards/CardCategory";

const HottestCategorySection = () => {
  return (
    <div className="container px-5 lg:px-20 mx-auto pb-24 lg:pb-48 relative after:content-[''] after:w-[360px] after:left-[100%] after:h-[360px] after:top-[100%] after:blur-[300px] after:bg-primary after:rounded-full after:absolute after:z-[-1]">
      <div className="flex items-end justify-between">
        <h2 className="uppercase font-aero  text-[32px]  lg:text-[42px]  leading-[1.4] text-white">
          Hottest categories
        </h2>

        {/* <ul className="flex items-center space-x-2 mb-2">
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white"></li>
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white/30 backdrop-blur-sm"></li>
          <li className="w-[8px] lg:w-[10px] h-[8px] lg:h-[10px] cursor-pointer bg-white/30 backdrop-blur-sm"></li>
        </ul> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 mt-8">
        <CategoryCard
          title="Zelda"
          description=""
          imageSrc="/assets/decorations/category_zelda.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#297572_0%,#00E4FD_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="Formula 1"
          description=""
          imageSrc="/assets/decorations/category_formula_one.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#D56418_0%,#F89414_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="Naruto"
          description=""
          imageSrc="/assets/decorations/category_naruto.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#756F29_0%,#FDB500_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="One Piece"
          description=""
          imageSrc="/assets/decorations/category_one_piece.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#20A200_0%,#006C7F_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="Football"
          description=""
          imageSrc="/assets/decorations/category_football.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#293475_0%,#4C00FD_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="AOT"
          description=""
          imageSrc="/assets/decorations/category_aot.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#752974_0%,#D700FD_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="Pokemon"
          description=""
          imageSrc="/assets/decorations/category_pokemon.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#FEDE00_0%,#ED4024_100%)]"
          titleClassName="lg:!-mb-4"
        />
        <CategoryCard
          title="Dragon Ball Z"
          description=""
          imageSrc="/assets/decorations/category_dragonball.png"
          iconSrc="/assets/icons/icon-arrow-up-right.svg"
          cardClassName="bg-[linear-gradient(to_top,#292D75_0%,#009FFD_100%)]"
          titleClassName="lg:!-mb-4"
        />
      </div>
    </div>
  );
};

export default HottestCategorySection;
