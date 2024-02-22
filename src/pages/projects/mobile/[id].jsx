import React, { useState, useEffect } from "react";
import NavbarFullMenu from "../../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesGrid from "./components/ShowCasesGrid";
import DarkTheme from "../../../layouts/Dark";
import { useRouter } from 'next/router';
import mobileData from '../../../data/projects/mobile.json';

const Page = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id)
      return;
    const proj = mobileData.find(item => item.id == id);
    console.log(proj);
    setProject(proj);
  }, [id])



  return (
    <DarkTheme>
      <NavbarFullMenu />
      {project && <ShowcasesGrid images={project.images} />}
    </DarkTheme>
  );
};

export default Page;
