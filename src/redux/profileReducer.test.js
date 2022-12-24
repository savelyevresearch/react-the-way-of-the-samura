import profileReducer, {
  addPostActionCreator,
  removePostActionCreator,
} from "./profileReducer";

const profileInitialState = {
  postState: [
    {
      message: "Hi, how are you? Today I'm learning JS",
      likeCount: 10,
      userAvatarUrl:
        "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
      userAvatarAlt: "some avatar",
      id: 1,
    },
    {
      message: "It's my first post",
      likeCount: 5,
      userAvatarUrl:
        "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
      userAvatarAlt: "some avatar",
      id: 2,
    },
  ],
};

it("The number of posts should be incremented", () => {
  // 1. Test input data
  const actionObject = addPostActionCreator("Some content...");

  // 2. Action
  let newState = profileReducer(profileInitialState, actionObject);

  // 3. Expectation
  expect(newState.postState.length).toBe(3);
});

it("Message of the new post should be correct", () => {
  // 1. Test input data
  const actionObject = addPostActionCreator(
    "React is the JavaScrit library for the UI building"
  );

  // 2. Action
  const newState = profileReducer(profileInitialState, actionObject);

  // 3. Expectation
  expect(newState.postState[newState.postState.length - 1]).toBe(
    "React is the JavaScrit library for the UI building"
  );
});

it("After the post removing the number of posts should be decremented", () => {
  // 1. Test input data
  const actionObject = removePostActionCreator(1);

  // 2. Action
  let newState = profileReducer(profileInitialState, actionObject);

  // 3. Expectation
  expect(newState.postState.length).toBe(3);
});

it("After the operation of deleting a post with an ID outside the range, the number of posts should remain unchanged", () => {
  // 1. Test input data
  const actionObject = removePostActionCreator(1000);

  // 2. Action
  let newState = profileReducer(profileInitialState, actionObject);

  // 3. Expectation
  expect(newState.postState.length).toBe(3);
});
