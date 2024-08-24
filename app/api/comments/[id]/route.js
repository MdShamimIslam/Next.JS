import comments from "@/app/data/comments";
import { redirect } from "next/navigation";

// Get Single Comment
export const GET = async (_request, { params }) => {
  const commentId = params.id;

if (commentId > comments.length) {
    redirect('/api/comments');
}

  const comment = comments.find((c) => c.id === parseInt(commentId));

  return Response.json(comment);
};

// Update Single Comment
export const PATCH = async (request, { params }) => {
  const comment = await request.json();
  const commentId = params.id;
  const commentIndex = comments.findIndex((c) => c.id === parseInt(commentId));

  comments[commentIndex].text = comment.text;

  return Response.json(comments[commentIndex]);
};

// Delete Single Comment
export const DELETE = async (_request, { params }) => {
  const commentId = params.id;
  const commentIndex = comments.findIndex((c) => c.id === parseInt(commentId));

  const commenToDelete = comments[commentIndex];

  comments.splice(commentIndex, 1);

  return Response.json(commenToDelete);
};
