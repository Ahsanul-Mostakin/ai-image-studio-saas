import { InferenceClient } from "@huggingface/inference";

const apiKey = process.env.HF_TOKEN;

export const hfClient = apiKey ? new InferenceClient(apiKey) : null;

export async function generateStyledImage(
  model: string,
  imageBuffer: Buffer,
  prompt: string,
): Promise<Buffer> {
  if (!hfClient) {
    throw new Error("Missing HF_TOKEN.");
  }

  const inputBlob = new Blob([new Uint8Array(imageBuffer)], {
    type: "image/png",
  });

  const resultBlob = await hfClient.imageToImage({
    model,
    inputs: inputBlob,
    parameters: { prompt },
  });

  const arrayBuffer = await resultBlob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
