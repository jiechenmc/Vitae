import type { SkillElement } from "../../data/skills";
import useIcon from "../../hooks/useIcon";

interface SkillCardProps extends SkillElement {
    color: string
}

const SkillCard = ({ name, description, color }: SkillCardProps) => {
    return (<div className={`card card-side bg-base-100 shadow-xl max-w-sm border-2 ${color}`} >
        <figure className="grid self-center py-4 pl-4">{useIcon(name)}</figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
        </div>
    </div >);
}

export default SkillCard;