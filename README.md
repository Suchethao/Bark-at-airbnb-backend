## About
Bark @Airbnb is an extension of airbnb that allows dog-owners to search in a UI-friendly server-side application which is responsive on both mobile and desktop. This  application allows a user to search amongst a database of dog friendly NYC airbnb's, and view dog parks in the same borough.
**Our team goal for this project was to create:**
* A functional and self-sufficient end-to-end application that combines two open-API's using Mongoose aggregator methods linking the API's by a common thread- their geography.
Highlight: Filtering out all airbnb listings without images (in the seed part of the process), so that the site only displays airbnb's with images.
* Accomplish a handsome aesthetic using a dependency called material-ui-icons, a well-known UI accessory to enhance the optics on the front-end.
Highlight: Developing a search bar (similar to the original airbnb site), that allows the user to filter airbnb's by borough.
* A bonus implementation of authentication, which works with a dependency called 'passport' to protect user information and provide secure access for the user.
## Front-end Installation instructions
1. **Clone the repo**
```
    -> Git clone
        $ git clone https://github.com/rafaelirangel/bark-at-airbnb-frontend
```
2. **Install dependencies**
```
    $ npm install
        - axios
        - @mui/icons-material @mui/material @emotion/styled @emotion/react
        - @icon-park/react
```
4. **Start the server**
```
    $ npx run start
```
5. **Open in browser**
    - Open [http://localhost:3000/airbnb](http://localhost:3000/airbnb) to view it in your browser.
## Back-end Installation instructions
1. **Clone the repo**
```
    -> Git clone
        $ git clone https://github.com/Suchethao/Bark-at-airbnb-backend
```
2. **Install dependencies**
```
    $ npm install
        - express
        - mongoose
        - nodemon
        - cors
        - passport
        - passport-jwt
        - jwt-simple
```
3. **Seed the data**
```
    $ node db/seed.js
```
4. **Start the server**
```
    -> Navigate into the repo file
        $ nodemon app.js ||
        $ node app.js
```
5. **Server Port**
```
    -> Server running on port 3001
```
## Technology Used
![REACT badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5 badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MATERIAL UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![NPM badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![EXPRESS badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JAVASCRIPT badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NODE JS badge](   https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MONGODB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
