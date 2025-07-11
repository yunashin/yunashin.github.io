import BackButton from "./BackButton";

const PageTitle = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  if (!onClick) {
    return <h1 className="margin-top-lg">{title}</h1>;
  }

  return (
    <div className="page-title">
      <div className="back-button-container" style={{ width: "25%" }}>
        <BackButton onClick={onClick} />
      </div>
      <div style={{ width: "50%" }}>
        <h1>{title}</h1>
      </div>
      <div style={{ width: "25%" }}></div>
    </div>
  );
};

export default PageTitle;
