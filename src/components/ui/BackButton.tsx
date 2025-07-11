import BackButtonIcon from "../../assets/back-button.svg";

const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="link-button back-button" onClick={onClick}>
      <img src={BackButtonIcon} alt="back" className="back-button-icon" />
    </button>
  );
};

export default BackButton;
