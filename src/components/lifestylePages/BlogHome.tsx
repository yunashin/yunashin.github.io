import { useNavigate } from "react-router";

import { TAGS } from "../../data/BlogPageData";
import { BlogPost, Tag } from "../../types/BlogPostTypes";
import TagBadge from "../blog/TagBadge";
import Dropdown from "../ui/Dropdown";
import PageTitle from "../ui/PageTitle";
import { formatDateToShort } from "../../utils/formatDate";

const BlogHome = ({
  filteredBlogPages,
  isTagsDropdownOpen,
  selectedTags,
  setIsTagsDropdownOpen,
  setSelectedTags,
  setSearchParams,
}: {
  filteredBlogPages: BlogPost[];
  isTagsDropdownOpen: boolean;
  selectedTags: Tag[];
  setIsTagsDropdownOpen: (isOpen: boolean) => void;
  setSelectedTags: (tags: Tag[]) => void;
  setSearchParams: (params: { id: string }) => void;
}) => {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle title="blog" onClick={() => navigate("/lifestyle")} />
      <div className="flex-box-vertical">
        <div className="flex-box-horizontal margin-bottom">
          <Dropdown
            isOpen={isTagsDropdownOpen}
            setIsOpen={setIsTagsDropdownOpen}
            options={TAGS}
            selectedOptions={selectedTags}
            setSelectedOptions={setSelectedTags}
            isMultiSelect={true}
            placeholder="Tags"
          />
        </div>
      </div>
      <div className="centered-container">
        <ul className="bulleted">
          {filteredBlogPages.map((page) => (
            <div className="blog-pages-container" key={page.id}>
              <li
                className="bullet"
                onClick={() => setSearchParams({ id: page.id })}
              >
                {page.title}
              </li>
              <div className="blog-details">
                <div className="blog-page-tags-container">
                  {page.tags.map((tag) => (
                    <TagBadge
                      key={`${page.id}-${tag}`}
                      tagName={tag}
                      styles={{ marginTop: "-10px" }}
                    />
                  ))}
                </div>
                <div className="blog-date-with-tags">
                  {formatDateToShort(new Date(page.date))}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogHome;
