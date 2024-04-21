import { createClient } from "redis";

const client = createClient();

async function processSubmission(submission: string) {
  const { problemId, code, language } = JSON.parse(submission);

  console.log(problemId);
  console.log(code);
  console.log(language);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("finished");
}

async function startWorker() {
  try {
    await client.connect();
    console.log("Connected to Redis");

    while (true) {
      try {
        const submission = await client.brPop("submissions", 0);
        console.log(submission)
        //@ts-ignore
        // await processSubmission(submission.element);
      } catch (e) {
        console.error(e);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

startWorker();
