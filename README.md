## The Project

This is the React version of the previously made project. I've been working on Github API for a while before I get to start with React. I've created several projects where I used fetch-post requests to create resositories and display user infos by using their API. In this project I wanted to implement same idea by using React which was a great exercise for myself. 

Project consists of 5 components and app.js file. Basically on the home page there is a input field for user to search for Github usernames and also a navbar. In the navbar user can click on several programming languages and depending on the language most popular repositories of that language will be displayed. 

If the search is done user is redirected to another page where information about searched user is displayed. Along with personal information detailed repository informations are displayed too. On the column clicks I've made it possible to do sorting by the column. Assuming that description column is clicked, whole table will be sorted by description either ascending or descending depending on the click.

## Challenges

To form up main structure was not really difficult for me. I'm used to play with API's and thus don't have that much trouble with it. But to handle bad requests was the tricky part. For example imagine a scenario where user types a valid username and has been directed to repository information page, if the second search is invalid than component would crash. I had to find a way to handle with these sort of small problems. As one can imagine those small ones could cause really big troubles. That's why I've tried my best to handle bad requests. 

Live version of the project is here: https://react-github-userfinder.netlify.app/
