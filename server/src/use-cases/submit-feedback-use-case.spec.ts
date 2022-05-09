import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";
const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
);
describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();
  });

  it("Should be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUB",
        comment: "example comment",
        screenshot: "data:image/png;base64",
      })
    ).resolves.toThrow();
  });

  it("Should be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUB",
        comment: "example comment",
        screenshot: "data:image/png;base64",
      })
    ).resolves.toThrow();
  });
});
