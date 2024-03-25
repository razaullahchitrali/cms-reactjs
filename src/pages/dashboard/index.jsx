import React from "react";
import SkillsGrid from "../../components/SkillsGrid";
import {
  faMagic,
  faRoute,
  faCogs,
  faPalette,
  faFolder,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Index = () => {
  const skillsData = [
    {
      icon: <FontAwesomeIcon icon={faMagic} />,
      title: "Formik",
      description:
        "Efficient form management with Formik. Simplify form handling and validation in React applications.",
    },
    {
      icon: <FontAwesomeIcon icon={faRoute} />,
      title: "React Router 6",
      description:
        "Dynamic routing and navigation with React Router 6. Easily manage application routes and page transitions.",
    },
    {
      icon: <FontAwesomeIcon icon={faCogs} />,
      title: "Redux Toolkit",
      description:
        "State management made easy with Redux Toolkit. Centralize and manage application state effortlessly.",
    },
    {
      icon: <FontAwesomeIcon icon={faPalette} />,
      title: "Tailwind CSS",
      description:
        "Modern styling with Tailwind CSS. Create beautiful and responsive designs with utility-first CSS framework.",
    },
    {
      icon: <FontAwesomeIcon icon={faFolder} />,
      title: "Project Structure",
      description:
        "Optimized project structure. Follow best practices for organizing React projects for scalability and maintainability.",
    },
    {
      icon: <FontAwesomeIcon icon={faTable} />,
      title: "React Data Table",
      description:
        "Efficient data display with React Data Table. Easily manage and visualize large datasets in React applications.",
    },
  ];
  return (
    <div style={{ height: "calc(100vh - 100px)", overflow: "auto" }}>
      {/* Adjust the height as per your layout */}
      <h1>Reactjs Advance</h1>
      <hr className=" w-72" />
      <div className=" col-12 flex justify-between  ">
        <h3>Covered the following concepts of advance topics</h3>
        <Link
          to="https://ai-riz.netlify.app"
          target="_blank"
          className="inline-flex font-medium items-center text-blue-600 hover:underline mr-4"
        >
          See my basic reactjs project
          <svg
            class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
      <hr />

      <SkillsGrid skills={skillsData} />
    </div>
  );
};

export default Index;
