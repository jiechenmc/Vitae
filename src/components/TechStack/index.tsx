import { useState } from "react";
import { Web, DevOps, MISC, SkillElement } from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {

  const [isShowAll, setIsShowAll] = useState(true)
  const [isShowWeb, setIsShowWeb] = useState(true)
  const [isShowDevOps, setIsShowDevOps] = useState(true)
  const [isShowMISC, setIsShowMisc] = useState(true)

  const showAll = () => {
    setIsShowAll(true)
  }

  const showWeb = () => {
    setIsShowAll(false)
    setIsShowWeb(true)
    setIsShowDevOps(false)
    setIsShowMisc(false)
  }

  const showDevOps = () => {
    setIsShowAll(false)
    setIsShowWeb(false)
    setIsShowDevOps(true)
    setIsShowMisc(false)
  }

  const showMISC = () => {
    setIsShowAll(false)
    setIsShowWeb(false)
    setIsShowDevOps(false)
    setIsShowMisc(true)
  }

  return (
    <div id="techstack" className="mb-4">
      <h1 className="flex-col text-2xl text-base-content font-bold text-center my-4">
        Tech Stack
      </h1>

      <div className="grid sm:flex gap-2 justify-center mt-4">
        <button className="btn text-" onClick={showAll}>All</button>
        <button className="btn text-success" onClick={showWeb}>Web Development</button>
        <button className="btn text-warning" onClick={showDevOps}>DevOps</button>
        <button className="btn text-info" onClick={showMISC}>MISC</button>
      </div>

      <div className="ml-auto mr-auto max-w-2xl justify-center">
        {isShowAll || isShowWeb ? <div className="grid gap-2 mt-4 grid-cols-2">{Web.map((e: SkillElement) => <SkillCard {...e} color='border-success' />)}</div> : <></>}
        {isShowAll || isShowDevOps ? <div className="grid gap-2 mt-4 grid-cols-2">{DevOps.map((e: SkillElement) => <SkillCard {...e} color='border-warning' />)} </div> : <></>}
        {isShowAll || isShowMISC ? <div className="grid gap-2 mt-4 grid-cols-2">{MISC.map((e: SkillElement) => <SkillCard {...e} color='border-info' />)}</div> : <></>}
      </div>


      <div className="grid lg:flex justify-center gap-4">
      </div>
    </div>
  );
};

export default Skills;
