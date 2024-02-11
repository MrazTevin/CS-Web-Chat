# CS-Web-Chat
# README

## System Requirements

The system is a messaging application with the following requirements:

1. **Message and Response Models:** The system should have models for messages and responses. Messages represent incoming customer messages, and responses represent the replies from agents.

2. **API Endpoints:** The system should have API endpoints for creating and listing messages and responses.

3. **Real-Time Updates:** The system should support real-time updates, allowing agents to see new messages as they arrive without needing to refresh the page.

4. **Agent Identification:** The system should identify agents by their names and a new agent should be created if a name is used that doesn't already exist in the system.

5. **Work Division Among Agents:** The system should have a mechanism to help agents divide work amongst themselves and to prevent multiple agents from working on the same message at once.

## Achievements

The system has successfully implemented models for messages and responses, API endpoints for creating and listing these entities, and agent identification by name. 

The system has implemented real-time updates using Action Cable. This allows agents to see new messages as they arrive without needing to refresh the page. The messages are appended to the customer messages table

## Challenges

The main challenge faced during development was implementing a mechanism to prevent multiple agents from working on the same message at once and to help agents divide work. Despite several attempts, this feature could not be fully implemented due to issues with updating the agent's name in the database.

### Example GET Request

`GET "/api/messages"`

#### JSON Response
```
{
"id": 1,
"user_id": 208,
"message_body": "So it means if u pay ua loan before the due date is a disadvantage the last time I paid earlier it was still a problem",
"urgent": null,
"resolved": null,
"created_at": "2024-02-09T16:46:41.395Z",
"updated_at": "2024-02-09T16:46:41.395Z",
"timestamp": "2017-02-01T19:29:05.000Z",
"agent_id": null
},
```

### Future improvements
```
1. Improve the current implementation of real-time updates using Action cable to enhance performance and readability.
2. Enable bi-directional communication between agents and customers.
3. Ability to track the status of each message.
4. Group messages and responses into conversations while persisting their data and eventually enable users to refer back to them later.
5. Make the application more interactive.
## Installation
```

To install and run the application, follow these steps:

### General setup
1. Clone the repo `https://github.com/MrazTevin/CS-Web-Chat.git` to a desired directory
2. Change to source code directory `cd directory/CS-Web-Chat`
3. Set up and run the backend server on the subsequent steps

### Rails for backend setup

1. Change directory `cd messaging_app_server`
2. Run `bundle install` to install project dependencies
3. Run `rails db:migrate` to run database migrations.
4. Store the `GeneralistRails_Project_MessageData` in a desired folder which provides real customer service messages
5. Run `rails server-p 3001` to start the Rails server.
6. Open your web browser and visit `http://localhost:3000` to see the application.

### React for frontend setup

1. Change directory `cd messaging_app_frontend`
2. Run `npm install` to install the necessary Node.js packages.
3. Run `npm start` to start the React application.
4. Open your web browser and visit `http://localhost:3000` to see the application.

Please note that you'll need Ruby, Rails, Node.js, and npm installed on your machine to run these commands.
