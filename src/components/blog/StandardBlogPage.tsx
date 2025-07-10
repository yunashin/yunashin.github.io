import { useNavigate } from "react-router";

import { devModeOn } from "../../constants/testingConstants";
import { BLOG_PAGE_DATA } from "../../data/BlogPageData";
import { formatDate } from "../../utils/formatDate";
import TagBadge from "./TagBadge";
import Button from "../ui/Button";

const StandardBlogPage = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const page = BLOG_PAGE_DATA[id];

  if (!page || page.hidden) {
    return <div>Oops! This page doesn't exist. Try going back to the <a href="/lifestyle/blog">blog</a> page.</div>;
  }

  const { title, tags, date, html } = page;

  return (
    <div>
      <div className="left-aligned-container">
        <button className="back-button margin-right" onClick={() => navigate('/lifestyle/blog')}>← Back to Blog</button>
        {devModeOn && <Button onClick={() => navigate(`/blog-post-generator?editingBlogId=${id}`)} usePrimary>Edit</Button>}
      </div>
      <div className="centered-container">
        <div className="blog-content">
          <h1>{title}</h1>
          <div className="left-aligned-container flex-box-horizontal">
            {tags.map((tag) => <TagBadge key={`${id}-${tag}`} tagName={tag} />)}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <p className="blog-date">Last updated on {formatDate(new Date(date))}</p>
        </div>
      </div>
    </div>
  );
};

export default StandardBlogPage;