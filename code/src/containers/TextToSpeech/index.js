import React from 'react';
// const textToSpeech = require('@google-cloud/text-to-speech');
// const fs = require('fs');
// const util = require('util');
// const client = new textToSpeech.TextToSpeechClient();

export default class TextToSpeech extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick = () => {
    // this.quickStart();
  }

  async quickStart() {
    console.log('click');
    const text = 'hello, world!';
    // const request = {
    //     input: {text: text},
    //     // Select the language and SSML voice gender (optional)
    //     voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    //     // select the type of audio encoding
    //     audioConfig: {audioEncoding: 'MP3'},
    //   };
    // const [response] = await client.synthesizeSpeech(request);
    // // Write the binary audio content to a local file
    // const writeFile = util.promisify(fs.writeFile);
    // await writeFile('output.mp3', response.audioContent, 'binary');
    // console.log('Audio content written to file: output.mp3');

    console.log('request');
  }

  sendTokenToServer = (token) => {
    console.log(1111, token);
  }

  setTokenSentToServer = (token) => {
    console.log(2222, 'ERROR', token);
    return false;
  }

  receivedMessage = (payload) => {
    console.log('data: ', payload.data);
    console.log('noti: ', payload.notification);
  }
  render() {
    return (
      <div>
        <button className="js-push-button" onClick={this.handleClick}>
            text to speech - school
          </button>
       </div>
    );
  }
}
