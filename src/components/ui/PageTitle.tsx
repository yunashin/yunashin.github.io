import BackButton from "./BackButton";

const PageTitle = ({
  title,
  subtitle,
  titleStyles,
  onClick,
}: {
  title: string;
  subtitle?: string;
  titleStyles?: React.CSSProperties;
  onClick?: () => void;
}) => {
  if (!onClick) {
    return <h1 className="margin-top-lg">{title}</h1>;
  }

  return (
    <>
      <div className="page-title">
        <div className="back-button-container" style={{ width: "25%" }}>
          <BackButton onClick={onClick} />
        </div>
        <div style={{ width: "50%" }}>
          <h1 style={titleStyles}>{title}</h1>
        </div>
        <div style={{ width: "25%" }}></div>
      </div>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </>
  );
};

export default PageTitle;
