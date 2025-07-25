import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Message submitted" }),
    text: () => Promise.resolve("Message submitted"),
    ok: true,
  } as Response)
) as jest.Mock;
