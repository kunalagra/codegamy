'use client'
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter, useParams, useSearchParams } from "next/navigation";
// import { useRouter as useLocation } from "next/router";
import { io } from "socket.io-client";

function addPropsToReactElement(element, props) {
    if (React.isValidElement(element)) {
        return React.cloneElement(element, props)
    }
    return element
}

function addPropsToChildren(children, props) {
    if (!Array.isArray(children)) {
        return addPropsToReactElement(children, props)
    }
    return children.map(childElement =>
        addPropsToReactElement(childElement, props)
    )
}

export default function SocketWrapper({ children }) {
    const socket = io.connect("https://quasar2-hack.onrender.com")

    const searchParams = useSearchParams()
    const navigate = useRouter()
    const { roomId } = useParams()
    const username = searchParams.get('username');


    useEffect(() => {
        function kickStrangerOut() {
            navigate.push("/", { replace: true });
            toast.error("No username provided")
        }

        username ? socket.emit("when a user joins", { roomId, username: username }) : kickStrangerOut()
    }, [socket, username, roomId, navigate])

    return username ? <div>{addPropsToChildren(children, { socket })}</div> : (
        <div className="room">
            <h2>No username provided. Please use the form to join a room.</h2>
        </div>
    )
}