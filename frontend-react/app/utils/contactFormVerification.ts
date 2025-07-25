import { FormModel } from "../components/footer/Footer";

export function contactFormVerification(formInputs: FormModel): FormModel {
  const nameRegex = /^[A-Za-z]+([ -][A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidName = (input: string) => {
    if (!input) return "Please enter your name";
    const trimmed = input.trim().toLowerCase();
    if (!nameRegex.test(trimmed)) {
      return "Name input does not allow special characters";
    } else if (trimmed.length < 3) {
      return "Name needs to be greater than 2 characters";
    } else if (trimmed.length > 50) {
      return "Name seems a bit long";
    }
    return "";
  };
  const isValidEmail = (input: string) => {
    if (!input) return "Please enter your email";
    const trimmed = input.trim().toLowerCase();
    if (!emailRegex.test(trimmed)) {
      return "Accepted email needs an @ with a domain suffix ex: (.com)";
    }
    return "";
  };
  const moreThanTwoChar = (input: string, type: string) => {
    if (!input) return `Please enter your ${type}`;
    const trimmed = input.trim();
    if (trimmed.length < 5) {
      return `${type} must be longer than 5 characters`;
    } else if (/[^\w\s.,!?'-]/.test(trimmed)) {
      return `${type} does not allow $ or not common special characters.`;
    }
    return "";
  };

  return {
    name: isValidName(formInputs.name),
    email: isValidEmail(formInputs.email),
    subject: moreThanTwoChar(formInputs.subject, "subject"),
    message: moreThanTwoChar(formInputs.message, "message"),
    contact_number: "",
  };
}
