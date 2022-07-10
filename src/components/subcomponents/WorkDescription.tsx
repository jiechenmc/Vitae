interface WorkDescriptionProps {
  description: string;
}
const WorkDescription = ({ description }: WorkDescriptionProps) => {
  return (
    <pre data-prefix=">">
      <code>{description}</code>
    </pre>
  );
};

export default WorkDescription;
