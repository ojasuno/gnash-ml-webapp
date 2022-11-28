import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>Lyrics Writer | CyberBrokers | buildspace | GPT-3 | ML</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>GNASH-ML</h1>
          </div>
          <div className="header-subtitle">
            <h2>generate lyrics for your CyberBroker</h2>
          </div>
        </div>
        {/* new bits about a prompt container */}
        <div className="prompt-container">
          <textarea 
            className="promp-box" 
            placeholder="type here..." 
            value={userInput}
            onChange={onUserChangedText}
          />;
          {/* new bits about a button */}
          <div className="prompt-buttons">
            <a className="generate-button" onClick={null}>
              <div className="generate">
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>built w/ buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
