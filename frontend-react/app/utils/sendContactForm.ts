import { FormModel } from "@/types";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;
export async function sendContactForm(formData: FormModel) {
  try {
    // double checks all required fields, except contact_number is usually empty
    const keys = ["name", "email", "subject", "message"] as const;
    let formNotValid = keys.some(
      (key) => formData[key] === undefined || formData[key].trim().length === 0
    );
    if (formNotValid) throw new Error("Please fill out all form inputs.");

    // submit contact form as usual without logging the IP address
    const res = await fetch(baseURL + "/submit-contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error("Failed to connect to API, please try again later.");
    }
    return { success: true, message: "Message submitted" };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message:
        err instanceof Error
          ? err.message
          : "Message failed to submit, please refresh and try again",
    };
  }
}
