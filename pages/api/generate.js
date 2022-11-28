import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "";
const generateAction = async (req, res) => {
    // Run first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

    const baseCompletion = await openai.createCompletion({
        model: `text-davinci-002`,
        prompt: `${basePromptPrefix}${req.body.userInput}`,
        temperature: 0.7,
        max_tokens: 250,
    });

    const basaePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).jsons({ output: basePromptOutput });
};

export default generateAction;