import comments from "@/app/data/comments";

// GET REQUEST
export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (query) {
    const queryComment = comments.filter((comment) =>
      comment.text.toLocaleLowerCase().includes(query)
    );
    return Response.json(queryComment);
  }

  return Response.json(comments);
};

// POST REQUEST
export const POST = async (request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
