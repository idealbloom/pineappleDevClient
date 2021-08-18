/* eslint-disable react/jsx-props-no-spreading */
// import { isEmpty } from 'lodash';
import React, { useCallback, useState, useEffect } from 'react';
import Presenter from './Presenter';

export default function AudioMergeTest() {
  const [buffers, setBuffers] = useState();
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    console.log('buffers:', buffers);
  }, [buffers]);

  const record = (renderer, fps = 25, ms = 3000, mediaElement) =>
    new Promise(resolve => {
      if (recording) {
        resolve(false);
      }
      setRecording(true);
      try {
        const stream = mediaElement.captureStream(fps);
        const recorder = new MediaRecorder(stream);
        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => resolve(new Blob(chunks));
        recorder.start();
        setTimeout(() => recorder.stop(), ms);
      } catch (err) {
        console.log('failed to record', err);
        resolve(false);
      }
      setRecording(false);
    });

  const recordHandler = async () => {
    console.log('[recordHandler]: ', await record());
  };

  const onDrop = useCallback(acceptedFiles => {
    setBuffers(
      (() => {
        const array = [];
        acceptedFiles.forEach(file => {
          const reader = new FileReader();

          reader.onabort = () => console.log('file reading was aborted');
          reader.onerror = () => console.log('file reading has failed');
          reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result;
            array.push(binaryStr);
            console.log('function called');
          };
          reader.readAsArrayBuffer(file);
        });
        return array;
      })(),
    );
  }, []);

  return <Presenter onDrop={onDrop} recordHandler={recordHandler} />;
}
