import React, { useState } from "react";

const SidebarFilterMarketplaceCategories = ({ className }) => {
  // State to control open/close for each category
  const [openSections, setOpenSections] = useState({
    categories: true,
    gradingCompanies: false,
    grades: false,
    set: false,
    variations: false,
    price: false,
  });

  // Toggle function for each section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={`w-full space-y-6 ${className}`}>
      {/* Categories Section */}
      <div
        className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
      >
        <div>
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("categories")}
          >
            <span>Categories</span>
            <img
              src="/assets/icons/icon-arrow-drop-down.svg"
              className={`${!openSections.categories ? "rotate-180" : ""}`}
            />
          </div>
          {openSections.categories && (
            <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                All Cards
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Pokemon
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Football
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Baseball
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grading Companies Section */}
      <div
        className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
      >
        <div>
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("gradingCompanies")}
          >
            <span>Grading Companies</span>
            <img
              src="/assets/icons/icon-arrow-drop-down.svg"
              className={`${!openSections.gradingCompanies ? "rotate-180" : ""}`}
            />
          </div>
          {openSections.gradingCompanies && (
            <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                All Grading Companies
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Grading Company 1
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Grading Company 2
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Grading Company 3
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grades Section */}
      <div
        className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
      >
        <div>
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("grades")}
          >
            <span>Grades</span>
            <img
              src="/assets/icons/icon-arrow-drop-down.svg"
              className={`${!openSections.grades ? "rotate-180" : ""}`}
            />
          </div>
          {openSections.grades && (
            <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                All Grades
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Grade 1
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Grade 2
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Grade 3
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Sets Section */}
      <div
        className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
      >
        <div>
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("sets")}
          >
            <span>Sets</span>
            <img
              src="/assets/icons/icon-arrow-drop-down.svg"
              className={`${!openSections.sets ? "rotate-180" : ""}`}
            />
          </div>
          {openSections.sets && (
            <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                All Sets
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Set 1
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Set 2
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Set 3
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Variations Section */}
      <div
        className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
      >
        <div>
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("variations")}
          >
            <span>Variations</span>
            <img
              src="/assets/icons/icon-arrow-drop-down.svg"
              className={`${!openSections.variations ? "rotate-180" : ""}`}
            />
          </div>
          {openSections.variations && (
            <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                All Variations
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Variation 1
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Variation 2
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Variation 3
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Variations Section */}
      <div
        className={`border-style-decoration bg-white/5 backdrop-blur-sm p-5 w-full`}
      >
        <div>
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <span>Price</span>
            <img
              src="/assets/icons/icon-arrow-drop-down.svg"
              className={`${!openSections.price ? "rotate-180" : ""}`}
            />
          </div>
          {openSections.price && (
            <div className="flex flex-col items-center gap-2 mt-5 lg:gap-4">
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                All Price
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Price 1
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Price 2
              </button>
              <button className="hover:border-primary w-full hover:text-white text-[11px] lg:text-base flex items-center p-3 px-4 lg:p-4 lg:px-6 text-white/40 border-style-decoration">
                Price 3
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilterMarketplaceCategories;
