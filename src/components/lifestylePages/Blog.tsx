import { useState } from "react";
import { useSearchParams } from "react-router";

import MenuBar from "../MenuBar";
import StandardBlogPage from "../blog/StandardBlogPage";
import { BLOG_PAGE_DATA } from "../../data/BlogPageData";
import { Tag } from "../../types/BlogPostTypes";
import BlogHome from "./BlogHome";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isTagsDropdownOpen, setIsTagsDropdownOpen] = useState(false);
  const id = searchParams.get('id');
  const allTagsHidden = selectedTags.length === 0;
  const filteredBlogPages = allTagsHidden ? Object.values(BLOG_PAGE_DATA).filter((page) => !page.hidden) : Object.values(BLOG_PAGE_DATA).filter((page) => page.tags.some((tag) => selectedTags.includes(tag) && !page.hidden));


  const getCurrentPage = () => {
    if (id) {
      return <StandardBlogPage id={id} />
    } else {
      return (
        <BlogHome
          isTagsDropdownOpen={isTagsDropdownOpen}
          setIsTagsDropdownOpen={setIsTagsDropdownOpen}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          filteredBlogPages={filteredBlogPages}
          setSearchParams={setSearchParams}
        />
      );
    }
  }

  return <div>
    <MenuBar />
    <div className="App-body">
      {getCurrentPage()}
    </div>
  </div>;
};

export default Blog;