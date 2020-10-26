# LibQuality API

Firstly, we’d like to thank you for taking the time to answer this test.

## Instructions:

**Extremely short description**:
your assignment consists in developing an endpoint that collects data from GitHub, consolidate, and make them available through a REST api.


**Long description**:
We will build a new tool called LibQuality whose main goal is to measure the quality of famous open source projects like React (https://github.com/facebook/react), Angular (https://github.com/angular/angular), Vue (https://github.com/vuejs/vue) among others. Check out the rough sketch of it.


LibQuality will collect metrics from GitHub projects and make them available in a consolidated dashboard. End users can query by Project name (like “React”) then they will see a #issues, average, and standard deviation time.

## Phase 1

Product Owner wants to know how many issues are currently opened for a given GitHub project and how long the issues are opened. Basically, the bottom table in the wireframe. 

Besides that, LibQuality should keep track of searches by project and by user visit. These data will be used later to create new features, however, in Phase 1 it should start being collected.


## Phase 2
Product Owner wants users to be able to see statistics about a set of libraries (that they choose) along time, day over day. In other words, a line chart should be displayed to end-users so they can see how the library team is handling their issues along project life.


## Phase 3 (not for implement in this test, only use as requirement when designing architecture)
Product Owner envision seeing other metrics like stars, forks, #contributors, and also allow users to see issues grouped by GitHub labels. We enforce that users will start to make requests after Phase I.

## Notes

You are responsible for designing and implementing the backend in Node of LibQuality.
Considering this scenario is downright expected that the architecture of this project allows it to grow healthy to fulfill new requirements.


## Your assignment:

You must design and present the architecture for LibQuality service. It does not need to be too sophisticated, but you must explain each element of it. Use flows and text to explain the architecture you designed. 
You must design and document LibQuality API to support the features described (it could be MD files, swagger, or whatever you find most appropriated)
You must implement LibQuality service using Node 10+. You can decide which framework/libraries to use.

          3.1  Phase I is mandatory

          3.2 Phase II is a nice to have

          3.3 Phase III does not need to be implemented

You must write tests.
You must write README.md file with all steps required to develop and test and deploy your code – make it simple.

       2.1 If necessary, create a docker-compose to setup all external services required to run LibQuality in development mode.

## Rules:

You have 1 week to complete this test.
You must use GitHub API https://developer.github.com/v3/ to collect raw data.
As soon as you finish your test you must generate a git tag named venturus-1.0.0.This tag must be generated before the end date of the test and will be used to evaluate your test.
When you are done, create a public repository on Github and submit the code for evaluation. 


## How we will evaluate your test:

We are going to evaluate the way you think, how you communicate your ideas and how you develop them. If there is no time to implement everything, it is just fine! Don’t worry. We will see:

How did you solve this problem? What services and libraries did you use and why?


## Considering architecture aspects:

       2.1 How performance matters were addressed?

       2.2 How raw data is collected, stored, and manipulated?

       2.3 Which database technology is chosen and why? How did you design your database? You might give us details in your architecture document.

       3.   How you prioritize your activities – the main goal is to have a working API for Phase I. In case you cannot implement all endpoints, make sure you are selecting the most relevant ones and make sure to consider future requirements.

       4.  How you code looks like regarding organization and documentation.


## IMPORTANT:

This test MUST run locally without the need of any cloud system like AWS, etc. In case it does not run locally it will not fully evaluate.