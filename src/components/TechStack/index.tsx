import { useState } from "react";
import { Web, DevOps, MISC, SkillElement } from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {

  const [isShowAll, setIsShowAll] = useState(true)
  const [isShowWeb, setIsShowWeb] = useState(false)
  const [isShowDevOps, setIsShowDevOps] = useState(false)
  const [isShowMISC, setIsShowMisc] = useState(false)

  const showAll = () => {
    setIsShowAll(true)
    setIsShowWeb(false)
    setIsShowDevOps(false)
    setIsShowMisc(false)
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

      <div className="ml-auto mr-auto max-w-2xl">
        {isShowAll || isShowWeb ? <div className={`grid gap-2 mt-4 grid-cols-2 ${isShowWeb ? 'grid-rows-5' : ''}`}>{Web.map((e: SkillElement) => <SkillCard {...e} key={crypto.randomUUID()} color='border-success' />)}</div> : <></>}
        {isShowAll || isShowDevOps ? <div className={`grid gap-2 mt-4 grid-cols-2 ${isShowDevOps ? 'grid-rows-5' : ''}`}>{DevOps.map((e: SkillElement) => <SkillCard {...e} key={crypto.randomUUID()} color='border-warning' />)} </div> : <></>}
        {isShowAll || isShowMISC ? <div className={`grid gap-2 mt-4 grid-cols-2 ${isShowMISC ? 'grid-rows-5' : ''}`}>{MISC.map((e: SkillElement) => <SkillCard {...e} key={crypto.randomUUID()} color='border-info' />)}</div> : <></>}
      </div>


      <div className="grid lg:flex justify-center gap-4">
      </div>
    </div>
  );
};

export default Skills;
