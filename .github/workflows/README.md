Note: JavaScript fetch call fails in CI workflow. Check that tests pass locally with `npm run testFinal`. Generate coverage report with `npm run coverage`.

```
    Puzzler View › Trigger Fetch Trivia

    Timed out in waitFor.

      42 |   test('Trigger Fetch Trivia', async () => {
      43 |     const { getByTestId, getAllByTestId } = render(<View />)
    > 44 |     await waitFor(() => fireEvent.press(getByTestId('Question')))
```

Sources:   
-[Expo Workflow from GitHub Marketplace](https://github.com/marketplace/actions/expo-github-action)   
