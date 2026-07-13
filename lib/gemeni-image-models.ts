export const openAiImageModels = ["black-forest-labs/FLUX.1-Kontext-dev"];

export type OpenAiImageModel = (typeof openAiImageModels)[number];

export const openAiImageModelLabels: Record<OpenAiImageModel, string> = {
  "black-forest-labs/FLUX.1-Kontext-dev": "FLUX Kontext",
};
