import { cookies, headers } from "next/headers";

export const GET = async (request) => {
  // get reuest headerList from client side
  // step-1
  // const headerList = new Headers(request.headers);
  // step-2
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  // get cookies from client side (row way)
  // step-1
  console.log(request.cookies.get("theme"));

  // set cookies from client side
  // step-2
  cookies().set("page", "5");

  // get cookies from client side
  // step-2
  console.log(cookies().get("page"));

  return new Response(
    "Profile API",
    // set cookie (row way)
    // step-1
    {
      headers: {
        "Set-Cookie": "theme=dark",
      },
    }
  );
};
