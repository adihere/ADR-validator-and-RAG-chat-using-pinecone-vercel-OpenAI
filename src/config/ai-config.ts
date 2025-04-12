export const AI_CONFIG = {
  models: {
    chat: "gpt-4o-mini", // Default chat model
    validation: "gpt-4o-mini", // Model for ADR validation
    creation: "gpt-4o-mini", // Model for ADR creation
    predict: "gpt-3.5-turbo", // Model for predictions
  },
  temperature: 0.7,
  maxTokens: 4000,
  // Add other OpenAI-related configurations here
};