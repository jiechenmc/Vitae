interface SkillCircleProps {
  icons: JSX.Element[];
  color: string;
}

const SkillCircle = ({ icons, color }: SkillCircleProps) => {
  return (
    <div
      className={`flex-col gap-2 radial-progress ${color}`}
      style={
        {
          "--value": 100,
          "--size": "20rem",
          "--thickness": "1rem",
        } as any
      }
    >
      <div className="grid grid-cols-3 gap-2">{icons}</div>
    </div>
  );
};

export default SkillCircle;
