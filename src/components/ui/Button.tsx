import { PRIMARY_BUTTON_COLOR, BUTTON_BORDER_COLOR, TEXT_COLOR, BUTTON_COLOR } from '../../constants/styleConstants';

const Button = ({ children, onClick, className = '', styles = {}, usePrimary = false }: { children: React.ReactNode, onClick: () => void, className?: string, styles?: React.CSSProperties, usePrimary?: boolean }) => {
  return <button
    className={`button ${className}`}
    onClick={onClick}
    style={{ backgroundColor: usePrimary ? PRIMARY_BUTTON_COLOR : BUTTON_COLOR, border: `1px solid ${usePrimary ? PRIMARY_BUTTON_COLOR : BUTTON_BORDER_COLOR}`, color: TEXT_COLOR, ...styles }}
  >
    {children}
  </button>
}

export default Button;
