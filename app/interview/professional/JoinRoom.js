'use client'
import { useState } from "react"
import { v4 as uuidv4, validate } from 'uuid';
import { Toaster, toast } from 'react-hot-toast';
import './JoinRoom.css'
import { useRouter } from "next/navigation";

export default function JoinRoom() {
    const navigate = useRouter()
    const [roomId, setRoomId] = useState(() => "")
    const [username, setUsername] = useState(() => "")

    function handleRoomSubmit(e) {
        e.preventDefault()
        if (!validate(roomId)) {
            toast.error("Incorrect room ID")
            return
        }
        if (username) navigate.push(`/interview/professional/room/${roomId}?username=${username}`);
    }

    function createRoomId(e) {
        try {
            setRoomId(uuidv4())
            toast.success("Room created")
        } catch (exp) {
            console.error(exp)
        }
    }

    return (
        <div className="joinBoxWrapper bg-light-2">
            <form className="joinBox p-6 py-10" onSubmit={handleRoomSubmit}>
                <h1 className="font-medium">
                    Professional Interview
                </h1>

                <div className="joinBoxInputWrapper">
                    <input
                        className="joinBoxInput"
                        id="roomIdInput"
                        type="text"
                        placeholder="Invite Code"
                        required
                        onChange={(e) => { setRoomId(e.target.value) }}
                        value={roomId}
                        autoSave="off"
                        autoComplete="off"
                    />
                </div>

                <div className="joinBoxInputWrapper">
                    <input
                        className="joinBoxInput"
                        id="usernameInput"
                        type="text"
                        placeholder="Enter Guest Username"
                        required
                        value={username}
                        onChange={e => { setUsername(e.target.value) }}
                        autoSave="off"
                        autoComplete="off"
                    />
                </div>

                <button className="w-full text-light-1 bg-blue-500 hover:bg-blue-600 transition-all px-3 py-2 rounded-lg" type="submit">Join</button>
                <p>Don't have an invite code? Create your <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={createRoomId}
                >own room</span></p>
            </form>
            <Toaster />
        </div>
    )
}