# Wikimedia Js Search: client-side search library

Js Search enables efficient client-side searches of JavaScript.
It is ES5 compatible and does not require jQuery or any other third-party libraries.



### Implementation

You can implement this component by importing the wikimedia css into you application.
Copy the wikimedia.css in the `css` folder of this project to the path of you application having;

```
    <link rel="stylesheet" href="./your-path/wikimedia.css">
```

Copy the wikimedia.js in the `js` folder of this project to the path of you application having;

For example, a simple use of JS Search would be as follows:
Add script type module to allow import  

```
<script type="module">
        import { wikiSearchComponent } from './your-path/wikimedia.js';
        wikiSearchComponent();
</script>
```

### Installation for development

You can install using either [Bower](http://bower.io/) or [NPM](https://www.npmjs.com/) like so:

```
git clone https://github.com/willypelz/wikimedia-search-component.git
cd wikimedia-search-component
npm install 
bower install 
```

### Running the application

```
   http-server .
```

### Accessing the application


```
http://127.0.0.1:8080/
```

