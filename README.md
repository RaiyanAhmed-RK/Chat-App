# Chat- Application

This is a chat application built using Node.js, Express.js, Socket.io and MongoDB. It allows users to create chat rooms and chat with other users in real time. It also allows users to share their location with other users.

## Features

- Create chat rooms
- Join chat rooms
- Chat in real 23:42
- Share location with other users

```json
{
  "message_id": "unique_message_identifier",
  "sender_id": "user123",
  "recipient_id": "user456",
  "timestamp": "2023-12-29T12:34:56Z",
  "content": "Hello!",
  "is_read": false,
  "attachments": [
    {
      "type": "image",
      "url": "https://example.com/image.jpg"
    },
    {
      "type": "video",
      "url": "https://example.com/video.mp4"
    }
  ],
  "reactions": [
    {
      "user_id": "user789",
      "emoji": "👍"
    },
    {
      "user_id": "user012",
      "emoji": "❤️"
    }
  ],
  "mentions": ["user789", "user012"],
  "forwarded_from": "another_user",
  "reply_to": {
    "message_id": "parent_message_id",
    "sender_id": "user456",
    "content": "Original message content"
  }
}
```

\***\*Copyright (c) 2023 Ray. All Rights Reserved.\*\***
