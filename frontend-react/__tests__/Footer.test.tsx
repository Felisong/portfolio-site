import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "@/app/components/footer/Footer";
import { ToastProvider } from "@/app/utils/context/toast/toastContext";
import ToastWrapper from "@/app/utils/context/toast/ToastWrapper";

// learned how to fake a fetch!
// learned some syntax for using Jest!
// Not as bad as I thought it'd be, the syntax is pretty easy to understand

// Mock fetch
global.fetch = jest.fn();

describe("Footer", () => {
  // before each test
  beforeEach(() => {
    // create a fetch response
    const jestMock = global.fetch as jest.Mock;
    jestMock.mockClear();
  });

  it("should display a success message after filling out and submitting the form", async () => {
    // resolve the value once when requested by my component
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ success: true, message: "Message submitted" }),
    });
    // i set up the simulated user
    const user = userEvent.setup();
    // i render the component I want to test, which is my footer contact form.
    // i guess this is my test environment!
    render(
      <ToastProvider>
        <ToastWrapper />
        <Footer />
      </ToastProvider>
    );

    // name the elements the user will interact with.
    const toast = await screen.findByRole("status");
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByLabelText(/subject/i);
    const messageInput = screen.getByLabelText(/message/i);
    const cellInput = screen.getByTestId("contact-number");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // now perform the test
    await user.type(nameInput, "Tyler");
    await user.type(emailInput, "email@gmail.com");
    await user.type(subjectInput, "a subject goes here");
    await user.type(messageInput, "oh my god meow meow hello!");

    await user.click(submitButton);

    expect(toast).toHaveTextContent("Message submitted");
  });
});
