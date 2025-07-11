import { TAG_TO_BADGE_COLOR_MAP } from "../../data/BlogPageData";
import { Tag } from "../../types/BlogPostTypes";

const TagBadge = ({
  className = "",
  isHashtag,
  tagName,
  label,
  selectedTags,
  setSelectedTags,
  styles,
}: {
  className?: string;
  isHashtag?: boolean;
  tagName: string;
  label?: string;
  selectedTags?: Tag[];
  setSelectedTags?: (tags: Tag[]) => void;
  styles?: React.CSSProperties;
}) => {
  const color = (() => {
    const isSelected = !selectedTags || selectedTags?.includes(tagName);
    if (isSelected && !isHashtag) {
      return TAG_TO_BADGE_COLOR_MAP[tagName];
    }
    if (isSelected && isHashtag) {
      return "#555555";
    }
    return "#939393";
  })();

  const isFilter = selectedTags && setSelectedTags;

  if (!color) {
    return null;
  }

  const onClick = () => {
    if (isFilter) {
      if (selectedTags.includes(tagName)) {
        setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
      } else {
        setSelectedTags([...selectedTags, tagName]);
      }
    }
  };

  const maybeCursorPointer = isFilter ? { cursor: "pointer" } : {};
  const maybeHashtagStyles = isHashtag ? { margin: "0.4em" } : {};

  return (
    <div
      className={`tag-badge ${className}`}
      style={{
        backgroundColor: color,
        ...maybeCursorPointer,
        ...maybeHashtagStyles,
        ...styles,
      }}
      onClick={onClick}
    >
      {label || tagName}
    </div>
  );
};

export default TagBadge;
