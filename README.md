# GitHub Profile Search Application
![Screenshot 2024-02-11 at 11 36 27 PM](https://github.com/IbkEhinmowo/Github-Profile-finder/assets/142057631/9e6555be-7e05-4744-8aa7-738ac4bd6d2c)


## Demo URL
The live, deployed instance of your application: [link-to-live-demo](https://codesandbox.io/p/github/IbkEhinmowo/Github%20Profile%20finder)



## Table of Contents
- [Overview](#overview)
- [User Stories](#user-stories)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Challenges and Lessons Learned](#challenges-and-lessons-learned)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview
This web application provides an interface for users to search for GitHub profiles and gather relevant information. Key features include:

- Seamless profile searching by username
- Displaying follower count, following count, and user location
- Comprehensive repository listing for each profile
- Repository detail views that open in new tabs
- Responsive design for optimal viewing across devices

## Potential User Stories
- As a developer, I want to easily find other developers on GitHub to connect with or explore their portfolios of work.
- As a recruiter, I want to search for potential candidates on GitHub and assess their skills based on their public projects.
- As a GitHub enthusiast, I want to discover fascinating profiles and the repositories people contribute to.

## Technologies
- React.js - Interactivity and data fetching
- GitHub REST API - Fetching profile and repository data

## Setup
1. open Sandbox link or Clone the repository: 

## Usage
1. Enter a GitHub username in the search field.
2. Click "Search" or press Enter.
3. View comprehensive profile information and repository details.

## Challenges and Lessons Learned
- Understanding GitHub API rate limits and implementing solutions to handle potential exceeding limits.
- Structuring API calls for optimized application performance.
- Designing a user-friendly interface for clear display of relevant information.

## Future Improvements
- Advanced Search Filters such as searching by language, location, or number of stars on repositories.
- Repository Filtering and Sorting within a user's profile.
- Error Handling for cases of invalid or missing data.
- Pagination for extensive repository lists.

## License
none
## Limitations
- **API Rate Limits:** The GitHub REST API has rate limits to prevent abuse. If you exceed these limits, the application may temporarily stop fetching data until the rate limit resets.


