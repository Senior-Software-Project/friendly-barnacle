
/*
// Reference: https://dev.to/il3ven/fix-warning-in-react-update-was-not-wrapped-in-act-bk6
// Source: https://github.com/il3ven/react-testing-devto/blob/fixed/src/App.test.js
import { renderer, screen, waitFor } from 'react-test-renderer' //"@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios");

test("renders learn react link", async () => {
  axios.get.mockImplementation(() => {
    return {
      data: {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
    };
  });

  renderer.create(<App />);

  expect(screen.getByText(/React App/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId("title").innerHTML).toBe(
      "Title: delectus aut autem"
    );
  });
});
*/

//import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

describe('<App />', () => {
  test('has many children', async () => {
    let tree = renderer.create('<App />').toJSON()
    // expect(tree).toBeNull()
    // expect(tree.children.length).toBe(5)
  })
})
