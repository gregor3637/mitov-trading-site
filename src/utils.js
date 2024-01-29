import { redirect } from "react-router-dom";
import { loginUser } from "./api";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  // // code is connected with `Login.loader`
  // const isLoggedIn = localStorage.getItem("loggedin");
  // if(!isLoggedIn) {
  //   throw redirect("/login?message=Is This Working")
  // }

  let credentials = { email: "foo@foo.fo", password: "bar" };
  // credentials.email = "fail";

  try {
    let res = await loginUser(credentials);
    console.log("🚀 ~ requireAuth ~ res:", res);
    return { token: res.token };
  } catch (error) {
    // return redirect("/login");

    // @@@@ !!!! @@@@
    // above solution (i.e. return redirect("/login")) doesnt work
    // because we are utilizing the `miragejs` package
    // https://www.reddit.com/r/react/comments/13mdy3a/why_redirect_from_react_router_is_not_working/
    // const response = redirect("/login?message=You must log in first");
    const response = redirect(`/login?message=Is This Working&redirectTo=${pathname}`);
    response.body = true; // It's silly, but it works
    return response;
  }
}
