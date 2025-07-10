import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import { Editor as TinyMCEEditor } from 'tinymce';
import { Editor } from '@tinymce/tinymce-react';

import MenuBar from "../MenuBar";
import { BLOG_PAGE_DATA } from '../../data/BlogPageData';
import Button from '../ui/Button';

const BlogPostGenerator = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const editingBlogId = searchParams.get('editingBlogId');
  const defaultContentFromScratch = 'Select a template to edit or start from scratch.';
  const defaultContent = editingBlogId ? BLOG_PAGE_DATA[editingBlogId].html || defaultContentFromScratch : defaultContentFromScratch;

  return (
    <div>
      <MenuBar />
      <div className="App-body">
        <h1>Blog Post Generator</h1>
        <div className="centered-container">
          <Button className="margin-bottom margin-right" onClick={() => setContent(editorRef.current?.getContent() || '')}>Update HTML</Button>
          <Button className="margin-bottom" onClick={() => {
            setContent(editorRef.current?.getContent() || '');
            navigator.clipboard.writeText(content || '');
          }} usePrimary>Copy HTML to Clipboard</Button>
        </div>
        <div className="flex-box-horizontal">
          <Editor
            tinymceScriptSrc='/tinymce/tinymce.min.js'
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue={defaultContent}
            init={{
              width: '40vw',
              height: '800px',
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              powerpaste_allow_local_images: true,
              content_style: 'body { font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; font-size:12pt }',
              formats: {
                alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', styles: { textAlign: 'left' } },
                aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', styles: { textAlign: 'center' } },
                alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table', styles: { textAlign: 'right' } }
              }
            }}
          />
          <div className="code-box">
            {content || 'No content to display.'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostGenerator;