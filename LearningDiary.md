Lappeenrannan teknillinen yliopisto
School of Business and Management

Sofware Development Skills

**Miguel Ângelo, 000243854**

# Learning Diary, Back-End Module

## Learning Diary

##### 04/02/2021 - REST Intro

I started by checking the course structure and luckily I didn't have to set up anything since I already have `Git`, `GitHub Desktop` (alternative to `SourceTree`) and `VS Code` installed. I only had to create a new public repo in my `GitHub` account to commit everything regarding this course.

Next, I start following the module tasklists starting with **REST Intro**.

The [Introduction video](https://www.youtube.com/watch?v=7YcW25PHnAA) is a great intro to show how `REST API`'s (**RE**presentational **S**tate **T**ransfer **A**pplication **P**rogramming **I**nterface) and `HTTP Request Methods` work but I already knew it so nothing new there. However I wasn't aware of what one could do with [Facebook Graph API](https://graph.facebook.com/), [Google Maps API](https://maps.googleapis.com/maps/api/geocode/json), [Instagram Media Search API](https://api.instagram.com/v1/media/search) and [Twitter Status Update API](https://api.twitter.com/1.1/statuses/update.json) and its parameters. In addition,
I didn't know [Apigee](https://cloud.google.com/apigee/) and [ProgrammableWeb](https://www.programmableweb.com/category/all/apis) websites and I'm pretty sure I'll be using them in the future.
However, this video should be updated for a recent once since the Instagram API and Apigee websites don't work the same way it did when the video was created.

##### 05/02/2021 - NodeJS and MongoDB

Today let's get coding with the second tasklists module: **NodeJS**.
I knew the very basics of `NodeJS` and had seen some code in the past but since I wanted to learn `NodeJS` from scratch for a long time (the main reason I joined this course), the [NodeJS crash course](https://www.youtube.com/watch?v=fBNz5xF-Kx4) (without `Express`) was exactly what I was looking for.
Even before starting coding, I learned that `NodeJS` comes with `REPL`\* which allows running JavaScript code in the command line.

> (\*) `REPL` also known as Read Evaluate Print Loop is a programming language environment (Basically a console window) that takes single expression as user input and returns the result back to the console after execution.

In the next step, it was good to see a `JS class` being written because it's something that I haven't used in a long time. The quick overview of some of [Node's core modules](https://nodejs.org/dist/latest-v15.x/docs/api/) and having some small demos within the project was a great way to show how something works without going through the documentation or briefly explaining them while coding the project. Everything regarding `npm` and the reference files was committed before starting to code the simple version of a `Web Server` without `Express`. This was totally new for me and even the simplest version being ready to load webpage with different content types made this course even better. The cherry on top of the cake was to learn how to deploy our project to `Heroku`.

Let's commit everything before jumping to the next tasklists module, **MongoDB**.

I've used `MongoDB` in the past but it was "learning while coding" professionally so the [MongoDB Crash Course](https://www.youtube.com/watch?v=-56x56UppqQ) is a great opportunity to refresh my memory and start from scratch.
From the start, the `MongoDB` website change so the download section is no longer the same as seen on the video but it's hard to find where it is (for Windows users). One more nice touch is recommending installing `Homebrew`. I've been using it for years and it's the first tool that I install every time I have a new MacBook.
When it comes to the Mongo itself, the most "complex" methods were new to me and the cheat sheet it's super useful as a support in the future (committed in the repo). However, like in previous videos, I would have liked to see examples of how to use `Mongo` directly from our app instead of only the `shell`/`Compass`/`Atlas`.

##### 08/02/2021

Today I'll start with the **Express**, the third tasklists module of our course. Once, again, I already played around with it in the past in order to test a small idea. As stated in the video, the [NodeJSExpress JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE) is the next step of the `NodeJS` crash course seeing that `Express` is "the most popular web framework for `Node`".
Before coding, it was recommended to install `Postman`, a very good `HTTP Client` that I've been using for a long time. In the first coding part of the course, it was pretty cool to see how easy is to create in `Express` what we did in the `NodeJS` course with a lot less code. Next we created a logger to `log API` calls and afterwards created a `CRUD`(**C**eate **R**ead **U**pdate **D**elete) API. Something that I wasn't expecting was to learn how to `render templates` with a `template engine` such as [`Handlebars`](https://handlebarsjs.com/). Normally we won't create a `JSON API` and a `server rendering templates` in the same project but it was great the learn how to do both. One nice touch was using [`Bootstrap`](https://getbootstrap.com/) to give some styling to our app. This is something that I have been using throughout my career but normally `Backend` tutorials don't include anything regarding `Frontend`.
Something that I think it was missing from this course and it's quite important is security. I know this was a crash course but, even so, it could be dangerous to start doing something for others to use without knowing the minimum on how to make it safe.

##### 09/02/2021

Last but not least, the final tasklists module, **REST**.
From the title of the video [Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/watch?v=fgTGADljAeg), we'll use everything that we've learned so far to create a `REST API` and as fast as possible.
Despite not learning new things, the course is super useful to see how everything that we have learned so far work together.
By now, everyone attending the Software Development Skills: Back-End is more than equipped with all the tools and knowledge to complete the final project.

#### Notes:

I've followed the "new video" courses of all the tasklists module.

##### 10/02/2021

Since I've applied for this course to learn, I'll take the opportunity to do the final project with Frontend technologies that are very trendy and I've never had the chance to use them: `VueJS` and `Tailwind CSS`. I've decided to create a Todo List app with the `MEVN` (**M**ongoDB, **E**xpress, **V**ueJS and **N**odeJS) stack.
For learning `Vue`, I'll follow a tutorial from the same team called [Vue JS Crash Course](https://www.youtube.com/watch?v=Wy9q22isx3U). `Vue` comes with a `CLI` which is pretty cool since it provides a nice  `GUI` (**G**raphical **U**ser **I**nterface) to handle all `Vue` projects in the `Vue Project Manager`. In addition, using the `GUI`, you can install dependencies without having to stop the server, which saves a lot of time.
In this course, we use `Axios` to fetch data from an `API` and since I've never used it, I'll give a try.

##### 18/02/2021

Well, in the past days, I've been working only a couple of hours a day on creating the Frontend with `VueJS` and `Tailwind CSS`. I had to follow the three `Full Stack Vue.js, Express & MongoDB` videos: [[1] - Express API](https://www.youtube.com/watch?v=j55fHUJqtyw), [[2] - Vue Frontend](https://www.youtube.com/watch?v=X-JZ-QPApUs), [[3] - Prepare & Deploy](https://www.youtube.com/watch?v=W-b9KGwVECs) since the app folder structure needs to be different in order to have the client and server in the same project.
To be honest, given my experience with `React` and `Bootstrap`, I must say that I didn't become a big fan of what I've used. `VueJS` might be easier to learn than `React` and `Angular` but it seems a mixture of the last two, which I didn't like it. In addition, `Tailwind CSS` is a good tool for those who don't like `CSS` but it makes the the `HTML` code, especially the classes, ridiculously long and their documentation is kind of "spread of all over the place".
Now let's deploy our app to `Heroku` before creating the video of the project running and submitting the project.
