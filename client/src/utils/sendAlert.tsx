import axios from "axios";

const LINE_API_URL = "https://api.line.me/v2/bot/message/push"
const apiUrl = process.env.REACT_APP_ACCESS_TOKEN

interface LineMessage {
    to: string;
    message: { type: string; text: string} [];
}

export const sendLineAlert = async (groupId: string, alertMessage: string) => {
    const data: LineMessage = {
        to: groupId,
        message: [{type: "text", text: alertMessage}],
    }

    try {
        await axios.post(LINE_API_URL, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiUrl}`,
            }
        })
        console.log("Alert sent successfully")
    } catch (error) {
        console.error("Error sending alert:", error)
    }
}