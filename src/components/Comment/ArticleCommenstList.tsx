import { useState } from 'react';

import { ArticleComments } from '@/models/Article';

import Comment from './Comment';

const ArticleCommentsList = ({ comments }: { comments: ArticleComments[] }) => {
  const [data, setData] = useState<(ArticleComments & { isOpen: boolean })[]>(
    comments.map((c) => {
      return { ...c, isOpen: false };
    }),
  );
  console.log(data);

  return data.map((comment) => {
    return (
      <div key={comment._id}>
        <Comment comment={comment} setComments={setData} />
        {comment.replyes &&
          comment.isOpen &&
          comment.replyes.map((reply) => {
            return <Comment comment={reply} key={reply._id} setComments={setData} />;
          })}
      </div>
    );
  });
};

export default ArticleCommentsList;
