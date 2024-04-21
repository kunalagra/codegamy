"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { generateColor } from "./utils";
import Meeting from "@/components/interview/Meeting";
import "./Room.css";
import { languagesData } from "@/constants";
import Loader from "@/components/shared/Loader";
import CustomInput from "@/components/shared/CustomInput";
import OutputWindow from "@/components/shared/OutputWindow";
import LanguagesDropdown from "@/components/shared/LanguagesDropdown";
import ThemeDropdown from "@/components/shared/ThemeDropdown";
import FontSizeDropdown from "@/components/shared/FontSizeDropdown";
import Timer from "@/components/shared/Timer";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import CodeEditorWindow from "@/components/shared/CodeEditorWindow";
import axios from "axios";

export default function Room({ socket }) {
  const navigate = useRouter();
  const { roomId } = useParams();
  const [fetchedUsers, setFetchedUsers] = useState(() => []);
  const [fetchedCode, setFetchedCode] = useState(() => "");
  const [language, setLanguage] = useState({ "value": "python3", "label": "Python" });
  const [theme, setTheme] = useState({ value: "dark", label: "Dark" });
  const [fontSize, setFontSize] = useState({ value: "14", label: "14px" });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [isCodeRunning, setIsCodeRunning] = useState(false);

  function onChange(newValue) {
    setFetchedCode(newValue);
    socket.emit("update code", { roomId, code: newValue });
    socket.emit("syncing the code", { roomId: roomId });
  }

  function handleLanguageChange(e) {
    setLanguage(e);
    socket.emit("update language", { roomId, languageUsed: e });
    socket.emit("syncing the language", { roomId: roomId });
  }

  function handleLeave() {
    socket.disconnect();
    if (!socket.connected) navigate.push("/", { replace: true, state: {} });
  }

  function copyToClipboard(text) {
    try {
      navigator.clipboard.writeText(text);
    } catch (exp) {
      console.error(exp);
    }
  }

  useEffect(() => {
    socket.on("updating client list", ({ userslist }) => {
      setFetchedUsers(userslist);
    });

    socket.on("on language change", ({ languageUsed }) => {
      setLanguage(languageUsed);
    });

    socket.on("on code change", ({ code }) => {
      setFetchedCode(code);
    });

    socket.on("new member joined", ({ username }) => {});

    socket.on("member left", ({ username }) => {});

    const backButtonEventListner = window.addEventListener(
      "popstate",
      function (e) {
        const eventStateObj = e.state;
        if (!("usr" in eventStateObj) || !("username" in eventStateObj.usr)) {
          socket.disconnect();
        }
      }
    );

    return () => {
      window.removeEventListener("popstate", backButtonEventListner);
    };
  }, [socket]);

  const handleCompile = async (input) => {
    setIsCodeRunning(true);
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
        code: fetchedCode,
        input: input,
      },
    };

    try {
      const response = await axios.request(options);
      setOutputDetails(response.data);
      setIsCodeRunning(false);
      return response.data.output;
    } catch (error) {
      setIsCodeRunning(false);
      console.error(error);
    }
  };

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

  return (
    <div className="room">
      <div className="w-full flex flex-col">
        <div className="roomSidebarUsersWrapper mb-3">
          <p>Connected Users:</p>
          <div className="roomSidebarUsers">
            {fetchedUsers.map((each, index) => (
              <div key={index} className="roomSidebarUsersEach">
                <div
                  className="roomSidebarUsersEachAvatar"
                  style={{ backgroundColor: `${generateColor(each)}` }}
                >
                  {each.slice(0, 2).toUpperCase()}
                </div>
                <div className="roomSidebarUsersEachName">{each}</div>
              </div>
            ))}
          </div>
        </div>

        <Meeting roomId={roomId} />
        <div className="flex my-2 justify-center items-center gap-4">
          <button
            className="bg-blue-500 text-light-1  hover:bg-blue-600 transition-all px-4 py-2 rounded-lg"
            onClick={() => {
              copyToClipboard(roomId);
            }}
          >
            Copy Invite code
          </button>
          <button
            className="bg-red-500 text-light-1  hover:bg-red-600 transition-all px-4 py-2 rounded-lg"
            onClick={() => {
              handleLeave();
            }}
          >
            Leave
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex gap-2 justify-between flex-wrap">
          <div className="flex flex-wrap gap-2">
            <LanguagesDropdown
              value={language}
              onSelectChange={(e) => handleLanguageChange(e)}
            />
            <ThemeDropdown handleThemeChange={(th) => setTheme(th)} />
            <FontSizeDropdown onSelectChange={(f) => setFontSize(f)} />
          </div>
          <div className="flex gap-2 items-center">
            <Timer />
            <button
              onClick={handleFullScreen}
              className="hover:bg-light-3 hover:border-light-4 rounded-lg p-1"
            >
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
            code={fetchedCode}
            onChange={onChange}
            language={language.value}
            theme={theme.value}
            fontSize={fontSize.value}
            forProblemsPage={false}
            isInterview={true}
          />

          <div className="!w-full min-h-[30%] flex flex-col">
            <div className="flex justify-end items-center gap-3">
              <button
                onClick={() => handleCompile(customInput)}
                className={`px-8 py-2 bg-green-500 text-light-1 mt-2 rounded-lg text-sm`}
              >
                {isCodeRunning ? <Loader /> : "Run"}
              </button>
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
    </div>
  );
}
