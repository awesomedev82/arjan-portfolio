import React, { useState, useEffect } from "react";
import NavbarFullMenu from "../../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreen from "./components/ShowCasesFull";
import DarkTheme from "../../../layouts/Dark";
import { useRouter } from 'next/router';
import webData from '../../../data/projects/web.json';

const ShowcaseDark = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id)
      return;
    const proj = webData.find(item => item.id == id);
    setProject(proj);
  }, [id])

  return (
    <DarkTheme>
      {/* <NavbarFullMenu /> */}
      {project && <ShowcasesFullScreen slides={project.slides} />}
    </DarkTheme>
  );
};

export default ShowcaseDark;

