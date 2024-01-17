// src/components/Chat.tsx
import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Grid, LinearProgress, CircularProgress } from "@mui/material";
import Message from "./Message";
import OpenAI from "openai";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
    const [isWaiting, setIsWaiting] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [assistant, setAssistant] = useState(null);
    const [thread, setThread] = useState(null);
    const [openai, setOpenai] = useState(null);

    useEffect(() => {
        initChatBot();
    }, []);

    useEffect(() => {
        setMessages([
            {
                content: "Bonjour ! Je suis ton coach personnel, as-tu des questions ?",
                isUser: false,
            },
        ]);
    }, [assistant]);

    const initChatBot = async () => {
        const openai = new OpenAI({
            apiKey: process.env.API_KEY,
            dangerouslyAllowBrowser: true,
        });

        // Create an assistant
        const assistant = await openai.beta.assistants.create({
            name: "Coach de Salle de sport",
            instructions: "Tu es coach dans une salle de sport, les gens peuvent te poser des questions sur les exercices à faire, les machines à utiliser, les programmes d'entrainement, etc.  Réponds avec des réponses assez courtes",
            tools: [{ type: "code_interpreter" }],
            model: "gpt-3.5-turbo",
        });

        // const assistant = await openai.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //       {
        //         "role": "user",
        //         "content": ""
        //       }
        //     ],
        //     temperature: 1,
        //     max_tokens: 256,
        //     top_p: 1,
        //     frequency_penalty: 0,
        //     presence_penalty: 0,
        //   });

        // Create a thread
        const thread = await openai.beta.threads.create();

        setOpenai(openai);
        setAssistant(assistant);
        setThread(thread);
    };

    const createNewMessage = (content, isUser) => {
        const newMessage = { isUser, content };
        return newMessage;
    };

    const handleSendMessage = async () => {
        messages.push(createNewMessage(input, true));
        setMessages([...messages]);
        setInput("");

        // Send a message to the thread
        await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: input,
        });

        // Run the assistant
        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: assistant.id,
        });

        // Create a response
        let response = await openai.beta.threads.runs.retrieve(thread.id, run.id);

        // Wait for the response to be ready
        while (response.status === "in_progress" || response.status === "queued") {
            console.log("waiting...");
            setIsWaiting(true);
            await new Promise((resolve) => setTimeout(resolve, 5000));
            response = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        }

        setIsWaiting(false);

        // Get the messages for the thread
        const messageList = await openai.beta.threads.messages.list(thread.id);

        // Find the last message for the current run
        const lastMessage = messageList.data
            .filter((message) => message.run_id === run.id && message.role === "assistant")
            .pop();

        console.log(lastMessage);

        // Print the last message coming from the assistant
        if (lastMessage) {
            console.log(lastMessage.content[0]["text"].value);
            setMessages([...messages, createNewMessage(lastMessage.content[0]["text"].value, false)]);
        }
    };

    // detect enter key and send message
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <Container>
            <Grid container direction="column" spacing={2} paddingBottom={2}>
                {messages.map((message, index) => (
                    <Grid item alignSelf={message.isUser ? "flex-end" : "flex-start"} key={index}>
                        <Message key={index} message={message} />
                    </Grid>
                ))}
            </Grid>
            <Grid container direction="row" paddingBottom={5} justifyContent={"space-between"}>
                <Grid item sm={11} xs={9}>
                    <TextField
                        label="Votre question"
                        variant="outlined"
                        disabled={isWaiting}
                        fullWidth
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    {isWaiting && <LinearProgress color="inherit" />}
                </Grid>
                <Grid item sm={1} xs={3}>
                    <Button variant="contained" size="large" color="primary" onClick={handleSendMessage} disabled={isWaiting}>
                        {isWaiting && <CircularProgress color="inherit" />}
                        {!isWaiting && <SendIcon fontSize="large" />}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;