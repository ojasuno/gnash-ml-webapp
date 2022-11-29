import Head from 'next/head';
import Image from 'next/image';
import ojasLogo from '../assets/ojas-hr-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>GNASH ML</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>GNASH ML</h1>
          </div>
          <div className="header-subtitle">
            <h2>generate lyrics for your CyberBrokers</h2>
          </div>
        </div>
        {/* new bits about a prompt container */}
        <div className="prompt-container">
          <textarea 
            className="prompt-box" 
            placeholder="type your CyberBroker name | Song title here..." 
            value={userInput}
            onChange={onUserChangedText}
          />
          {/* new bits about a prompt button */}
          <div className="prompt-buttons">
            <a 
              className={isGenerating ? 'generate-button loading' : 'generate-button'} 
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span class="loader"></span> : <p>Generate</p>}
              </div>
            </a>
          </div>

          {/* new bits about displaying results from OpenAI */}
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://github.com/ojasuno/gnash-ml-webapp"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={ojasLogo} alt="ojas logo" />
            <p>❤️ code</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
