"use client";
import React, { useEffect, useState } from "react";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";
import CodeEditorWindow from "./CodeEditorWindow";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import { languagesData, mockComments } from "@/constants";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import Timer from "./Timer";
import axios from "axios";
import Loader from "../shared/Loader";
import FontSizeDropdown from "./FontSizeDropdown";

const Playground = ({ problem=null, isForSubmission = true, setSubmitted }) => {
  
  const [customInput, setCustomInput] = useState(problem? problem.testCase.input[0] : '');
  const [outputDetails, setOutputDetails] = useState(null);
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [isCodeSubmitting, setIsCodeSubmitting] = useState(false);
  const [theme, setTheme] = useState({ value: "dark", label: "Dark" });
  const [language, setLanguage] = useState(languagesData[3]);
  const [code, setCode] = useState(mockComments[language.value]);
  const [fontSize, setFontSize] = useState({ value: '14', label: '14px' });
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    function exitHandler(e) {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, [isFullScreen]);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = async (input, forSubmisssion=false) => {
    if (!forSubmisssion) setIsCodeRunning(true);
    const options = {
      method: "POST",
      url: "https://jdoodle2.p.rapidapi.com/v1",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      },
      data: {
        language: language.value,
        version: "latest",
        code: code,
        input: input,
      },
    };

    try {
      const response = await axios.request(options);
      if (!forSubmisssion) {
        setOutputDetails(response.data)
        setIsCodeRunning(false);
      };
      return response.data.output;
    } catch (error) {
      setIsCodeRunning(false);
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    setIsCodeSubmitting(true); 
    try {
      const testcases = { ...problem.testCase };
      let allCorrect = true;
      for (let i=0; i<testcases.input.length; i++) {
        const ans = await handleCompile(testcases.input[i], true);
        if (ans!==testcases.output[i]) {
          allCorrect = false;
          setOutputDetails({
            submitted: true, accepted: false, output: ans
          })
          break;
        }
      }
      if (allCorrect) {
        setOutputDetails({
          submitted: true, accepted: true
        });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsCodeSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-2 justify-between flex-wrap">
        <div className="flex gap-2 flex-wrap">
          <LanguagesDropdown onSelectChange={(lang) => {setLanguage(lang);setCode(mockComments[lang.value])}} />
          <ThemeDropdown handleThemeChange={(th) => setTheme(th)} />
          <FontSizeDropdown onSelectChange={(f) => setFontSize(f)} />
        </div>
        <div className="flex gap-2 items-center">
          <Timer />
          <button onClick={handleFullScreen} className="hover:bg-light-3 hover:border-light-4 rounded-lg p-1">
            <div className="h-6 w-6 font-bold text-2xl text-dark-4">
              {!isFullScreen ? (
                <AiOutlineFullscreen />
              ) : (
                <AiOutlineFullscreenExit />
              )}
            </div>
          </button>
        </div>
      </div>

      <div className="!w-full flex-grow flex flex-col items-start pt-4">
        <CodeEditorWindow
          code={code}
          onChange={onChange}
          language={language.value}
          theme={theme.value}
          fontSize={fontSize.value}
          forProblemsPage={false}
        />

        <div className="!w-full min-h-[30%] flex flex-col">
          <div className="flex justify-end items-center gap-3">
            <button
              onClick={() => handleCompile(customInput)}
              disabled={!code}
              className={`px-4 py-2 bg-dark-4 text-light-1 mt-2 rounded-lg text-sm`}
            >
              {isCodeRunning ? <Loader /> : "Run"}
            </button>
            {isForSubmission && (
              <button
                onClick={handleSubmit}
                disabled={!code}
                className={`px-4 py-2 bg-green-600 text-light-1 mt-2 rounded-lg text-sm`}
              >
                {isCodeSubmitting ? <Loader /> : "Submit"}
              </button>
            )}
          </div>

          <div className="flex gap-5 flex-grow max-sm:flex-col">
            <div className="!w-full flex flex-col h-[250px]">
              <h1 className="font-bold text-lg">Custom Input</h1>
              <CustomInput
                customInput={customInput}
                setCustomInput={setCustomInput}
              />
            </div>
            <OutputWindow outputDetails={outputDetails} additionalStyles={'h-[250px]'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
