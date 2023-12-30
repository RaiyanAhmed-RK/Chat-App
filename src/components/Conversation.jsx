import React, { Component } from "react";

export class Conversation extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-center items-center border rounded p-2 h-[83vh]">
          {console.log(chatMessage)} <h6> i am {me.sender_id}</h6>
          <ul className="w-full p-3 overflow-scroll h-full">
            {chatMessage.map((message) => {
              return (
                <li
                  key={message.message_id}
                  className={
                    "bg-red-300" + message.sender_id === me.sender_id
                      ? "  text-end"
                      : " text-start"
                  }
                >
                  <h6 className="text-bold "> {me.sender_id}</h6>
                  <p>{message.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center border rounded p-2 h-[15%]">
          send button
        </div>
      </>
    );
  }
}

export default Conversation;

const me = { sender_id: "user123" };

const chatMessage = [
  {
    message_id: "1",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-29T12:34:56Z",
    content: "Hello!",
    is_read: false,
    attachments: [
      {
        type: "image",
        url: "https://example.com/image1.jpg",
      },
      {
        type: "video",
        url: "https://example.com/video1.mp4",
      },
    ],
    reactions: [
      {
        user_id: "user789",
        emoji: "👍",
      },
      {
        user_id: "user012",
        emoji: "❤️",
      },
    ],
    mentions: ["user789", "user012"],
    forwarded_from: "another_user",
    reply_to: {
      message_id: "parent_message_id",
      sender_id: "user456",
      content: "Original message content",
    },
  },
  {
    message_id: "2",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-29T13:45:30Z",
    content: "Hi there!",
    is_read: true,
    reactions: [
      {
        user_id: "user123",
        emoji: "👏",
      },
    ],
    mentions: ["user123"],
  },
  {
    message_id: "1",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-29T12:34:56Z",
    content: "Hello!",
    is_read: false,
    attachments: [
      {
        type: "image",
        url: "https://example.com/image1.jpg",
      },
      {
        type: "video",
        url: "https://example.com/video1.mp4",
      },
    ],
    reactions: [
      {
        user_id: "user789",
        emoji: "👍",
      },
      {
        user_id: "user012",
        emoji: "❤️",
      },
    ],
    mentions: ["user789", "user012"],
    forwarded_from: "another_user",
    reply_to: {
      message_id: "parent_message_id",
      sender_id: "user456",
      content: "Original message content",
    },
  },
  {
    message_id: "2",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-29T13:45:30Z",
    content: "Hi there!",
    is_read: true,
    reactions: [
      {
        user_id: "user123",
        emoji: "👏",
      },
    ],
    mentions: ["user123"],
  },
  {
    message_id: "3",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-29T14:22:10Z",
    content: "Hey!",
    is_read: false,
    forwarded_from: "another_user",
  },
  {
    message_id: "4",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-29T15:10:45Z",
    content: "How are you?",
    is_read: true,
    reactions: [
      {
        user_id: "user789",
        emoji: "😊",
      },
    ],
  },
  {
    message_id: "5",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-29T16:05:20Z",
    content: "I'm good, thanks!",
    is_read: false,
    mentions: ["user123"],
  },
  {
    message_id: "6",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-29T17:12:55Z",
    content: "What's up?",
    is_read: true,
    reactions: [
      {
        user_id: "user456",
        emoji: "👀",
      },
    ],
  },
  {
    message_id: "7",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-29T18:30:00Z",
    content: "Not much, just chilling.",
    is_read: false,
  },
  {
    message_id: "8",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-29T19:45:15Z",
    content: "Cool!",
    is_read: true,
  },
  {
    message_id: "9",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-29T20:55:30Z",
    content: "Any plans for the weekend?",
    is_read: false,
  },
  {
    message_id: "10",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-29T22:10:45Z",
    content: "Not sure yet. How about you?",
    is_read: true,
  },
  {
    message_id: "11",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-30T10:15:00Z",
    content: "I might go hiking!",
    is_read: false,
  },
  {
    message_id: "12",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-30T11:30:15Z",
    content: "That sounds fun!",
    is_read: true,
  },
  {
    message_id: "13",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-30T12:45:30Z",
    content: "Have you watched any good movies lately?",
    is_read: false,
    reactions: [
      {
        user_id: "user789",
        emoji: "🍿",
      },
      {
        user_id: "user456",
        emoji: "👎",
      },
    ],
  },
  {
    message_id: "14",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-30T14:00:45Z",
    content: "I just saw an amazing documentary!",
    is_read: true,
    attachments: [
      {
        type: "video",
        url: "https://example.com/documentary.mp4",
      },
    ],
    reactions: [
      {
        user_id: "user123",
        emoji: "👀",
      },
    ],
  },
  {
    message_id: "15",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-30T15:15:00Z",
    content: "I'm planning to travel next month. Any recommendations?",
    is_read: false,
    forwarded_from: "another_user",
  },
  {
    message_id: "16",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-30T16:30:15Z",
    content: "That sounds exciting! Where are you planning to go?",
    is_read: true,
  },
  {
    message_id: "17",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-30T17:45:30Z",
    content: "I'm thinking of visiting Europe.",
    is_read: false,
  },
  {
    message_id: "18",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-30T19:00:45Z",
    content: "Nice choice! You'll love it!",
    is_read: true,
  },
  {
    message_id: "19",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-31T09:15:00Z",
    content: "Good morning! How's your day going so far?",
    is_read: false,
  },
  {
    message_id: "20",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-31T10:30:15Z",
    content: "Morning! It's going well. Just working on some projects.",
    is_read: true,
  },
  {
    message_id: "21",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-31T11:45:30Z",
    content: "That's great! Anything exciting?",
    is_read: false,
  },
  {
    message_id: "22",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-31T13:00:45Z",
    content: "Just some new features for our app. How about you?",
    is_read: true,
  },
  {
    message_id: "23",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-31T14:15:00Z",
    content: "Working on a presentation. Busy day!",
    is_read: false,
  },
  {
    message_id: "24",
    sender_id: "user789",
    recipient_id: "user123",
    timestamp: "2023-12-31T15:30:15Z",
    content: "Make sure to take breaks! 😊",
    is_read: true,
  },
  {
    message_id: "25",
    sender_id: "user123",
    recipient_id: "user456",
    timestamp: "2023-12-31T16:45:30Z",
    content: "Absolutely! A quick coffee break does wonders.",
    is_read: false,
  },
  {
    message_id: "26",
    sender_id: "user456",
    recipient_id: "user789",
    timestamp: "2023-12-31T18:00:45Z",
    content: "Couldn't agree more. ☕",
    is_read: true,
  },
];
