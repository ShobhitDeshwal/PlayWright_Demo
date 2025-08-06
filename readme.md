About the project

The repo has test framework for public website:
The framework has both UI and API test case.
The registration testcases are to be run first as the rest of the testcases- login, product order, end to end uses the data created during registration. 
The data created has mock email address as the registered user gets deleted from the client server after sometime so limits the scope of repurposing. Therefore, each registration testcase run will add the user in json format. And at any only point in time there is only 1 user to test other scenarios.

Prerequisite
git node.js

Getting the project to local
In terminal : git clone https://github.com/ShobhitDeshwal/PlayWright_Demo.git

Installation
Run the below command in terminal to install all the node-modules npm install 
npx playwright install

Running the tests
To run all the tests run the below command
npm run test

Report
