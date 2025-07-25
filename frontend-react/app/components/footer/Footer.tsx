"use client";

import React, { useEffect, useState } from "react";
import AbsoluteFooterBg from "./AbsoluteFooterBg";
import { sendContactForm } from "@/app/utils/sendContactForm";
import { useToast } from "@/app/utils/context/toast/toastContext";
import { contactFormVerification } from "@/app/utils/contactFormVerification";
import Link from "next/link";
import FormErrorMsg from "../general/FormErrorMsg";
import { FormModel } from "@/types";
export default function Footer() {
  const { triggerToast } = useToast();
  const currentYear = new Date().getFullYear();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [formInputs, setFormInputs] = useState<FormModel>({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact_number: "",
  });
  const [formErrors, setFormErrors] = useState<FormModel>({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact_number: "",
  });
  // gives value to the form input on change of each input
  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // getting the most up to date form input
    const updatedFormInputs = {
      ...formInputs,
      [e.target.id]: e.target.value,
    };
    setFormInputs(updatedFormInputs);
    setFormErrors(contactFormVerification(updatedFormInputs));
  };
  // handles submitting the form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { ...formInputs };
    try {
      setSubmitMessage("Submitting message...");
      const result = await sendContactForm(formData);
      if (result.success) {
        const successMsg = result.message;
        setSubmitMessage(successMsg);
        setFormInputs({
          name: "",
          email: "",
          subject: "",
          message: "",
          contact_number: "",
        });
        triggerToast({ message: successMsg, isError: false, show: true });
      } else {
        const failureMsg = result.message;
        setSubmitMessage(failureMsg);
        triggerToast({ message: failureMsg, isError: true, show: true });
      }
    } catch (err) {
      console.error(err);
      const failureMessage = "Failed to send message, please try again!";
      setSubmitMessage(failureMessage);
      triggerToast({ message: failureMessage, isError: true, show: true });
    }
  };

  // use effect to track form validation
  useEffect(() => {
    const hasErrors = Object.entries(formErrors).find(
      (input) => input[1] !== ""
    );
    setIsFormValid(!hasErrors);
  }, [formErrors]);

  return (
    <footer>
      <div className="w-full h-[135vh] md:h-[80vh] lg:h-[60vh] relative mt-32">
        <div className="absolute inset-0 z-10 p-10 mt-16 md:mt-7 flex flex-col justify-end md:items-end">
          <section className="w-full h-full md:w-2/3">
            <h1 className="text-end text-6xl md:text-center lg:text-end">
              Contact Me
            </h1>
            <form
              className="flex flex-col items-start md:items-end w-full"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label className="self-start" htmlFor="name">
                Name
              </label>
              <input
                onChange={(e) => {
                  handleValueChange(e);
                }}
                id="name"
                type="name"
                placeholder="John / Jane"
                required
              />
              {formErrors.name && <FormErrorMsg str={formErrors.name} />}
              <label className="self-start" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => {
                  handleValueChange(e);
                }}
                id="email"
                type="email"
                placeholder="yourEmail@gmail.com"
                required
              />
              {formErrors.email && <FormErrorMsg str={formErrors.email} />}
              <label className="self-start" htmlFor="subject">
                Subject
              </label>
              <input
                onChange={(e) => {
                  handleValueChange(e);
                }}
                id="subject"
                type="text"
                placeholder="Purpose of Contact"
                required
              />
              {formErrors.subject && <FormErrorMsg str={formErrors.subject} />}
              <label className="self-start" htmlFor="message">
                Message
              </label>
              <textarea
                onChange={(e) => {
                  handleValueChange(e);
                }}
                id="message"
                placeholder="Your message..."
                required
              />
              {formErrors.message && <FormErrorMsg str={formErrors.message} />}
              {/* anti-spam */}
              <label className="self-start" htmlFor="contact-number"></label>
              <input
                id="contact-number"
                type="hidden"
                data-testid="contact-number"
              />
              <button
                disabled={!isFormValid}
                type="submit"
                name="submit"
                className="text-2xl hover:cursor-pointer disabled:cursor-not-allowed disabled:text-supplement-white "
              >
                {submitMessage === "Submitting message..."
                  ? "Submitting message..."
                  : "Submit"}
              </button>
            </form>
          </section>
        </div>
        <AbsoluteFooterBg />
      </div>
      <div className="bg-vibrant-red w-full h-fit pt-5 text-center">
        <p className="text-primary-white text-[0.9em]">{`© ${currentYear} Carolina Henriquez Silva. All rights reserved.`}</p>
        <Link target="_blank" href="https://icons8.com">
          some Skill icons by Icons8
        </Link>
      </div>
    </footer>
  );
}
