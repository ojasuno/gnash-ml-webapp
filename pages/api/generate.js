import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = 
`
Write me a song lyrics in the style of Twenty One Pilots with the song title below. Please make sure the song goes viral, has a cyberpunk tone, and is a fun listen.

Song Title: 
`
const generateAction = async (req, res) => {
    // Run first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

    const baseCompletion = await openai.createCompletion({
        model: `text-davinci-002`,
        prompt: `${basePromptPrefix}${req.body.userInput}\n`,
        temperature: 0.7,
        max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    // build Prompt #2
    // start
    {/*
    
    const secondPrompt =
    `
    Take the song title and lyrics of the song below and generate an album name.

    Song Title: ${req.body.userInput}

    Song Lyrics: ${basePromptOutput.text}

    Album Name:
    `

    // Let's call the OpenAI API 2nd time w Prompt #2
    const secondPromptCompletion = await openai.createCompletion({
        model: 'text-davinci-002'.
        prompt: `${secondPrompt}`,
        temperature: 0.85,
        max_tokens: 125
    });

    // Get the output
    const secondPromptOutput = secondPromptCompletion.data.choices.pop();

    // Send over the Prompt #2's output to UI
    res.status(200).json({ output: secondPromptOutput });

    */}
    // end
    
    res.status(200).jsons({ output: basePromptOutput });
};

export default generateAction;