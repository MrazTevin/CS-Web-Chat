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

### Future improvements
1. Improve the current implementation of real-time updates using Action cable to enhance performance and readability.
2. Enable bi-directional communication between agents and customers.
3. Ability to track the status of each message.
4. Group messages and responses into conversations while persisting their data and eventually enable users to refer back to them later.
## Installation

To install and run the application, follow these steps:

### Rails

1. Navigate to the Rails application directory.
2. Run `bundle install` to install the necessary Ruby gems.
3. Run `rails db:migrate` to run database migrations.
4. Run `rails server` to start the Rails server.

### React

1. Navigate to the React application directory.
2. Run `npm install` to install the necessary Node.js packages.
3. Run `npm start` to start the React application.

Please note that you'll need Ruby, Rails, Node.js, and npm installed on your machine to run these commands.
