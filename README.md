# Viewing this site on Github.io

The site URL is shown at  [https://eapostol.github.io/ng2-testdeploy/](https://eapostol.github.io/ng2-testdeploy/)

# Angular 2 Test Deployment

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



A Repository used to test deploy angular 2 projects on github.io

# Steps to Deploy on Github.io

You should test deploy a simple angular 2 CLI project to understand how deployment on github.io works. These are the steps that you can perform to test the process out. Once you test it. Then you can perform the same steps, starting at step 14 (assuming you have a project!)  on your own project.

Create a repository on Github for your project. Again make sure the repo name is simple enough so that it can also be used as a directory name...for example

`ra-ng2-testdeploy`

Note your project name can be whatever is appropriate. Choose no .gitignore, and no license.

2. Launch a terminal on your computer.
3. Go to your directory where your projects are stored.
4. At the terminal, in your projects directory, type

`ng new ra-ng2-testdeploy`

5. Wait while your new Angular 2 project is created.
6. Once its done, type at the terminal

`cd ra-ng2-testdeploy`

7. At the terminal type npm start or ng serve and make sure your default website works as http://localhost:4200  in a web browser.

8. At the terminal, press `control-c` to stop the server.
9. At the terminal, type in the following commands followed by the enter key

`git init`
`git add .`
`git commit -m "#001: first commit"`

10. In a web browser, return to your github repository for this project and copy the git url from the "clone or download" button.  It should look something like:

https://github.com/eapostol/ng2-testdeploy.git

11. Return to the terminal.
12. At the terminal, type

`git remote add origin https://github.com/eapostol/<yourprojectName>.git `

where yourProjectName is the project name added in the URL e.g. ng2-testdeploy

13. At the terminal type in the following commands:

`git remote -v`

`git push -u origin master`

`git pull`

If you have problems with push and pull, try 

`git branch --set-upstream-to=origin/master`

`git pull`

`git push -u origin master`


You can then proceed to develop code for the project.

14. Then at the terminal (when you are ready to deploy), type in the following at the terminal **AND THIS IS IMPORTANT!**

`ng github-pages:deploy`


15. Once its deployed, browse to the resultant github.io address that is shown in the terminal. It likely says something like 

Deployed! Visit https://eapostol.github.io//ra-ng2-testdeploy//

If you browse and the URL doesn't show anything...wait a few minutes, then try again. if it doesn't work still...

16. Go back to terminal, type in

`git branch -a`


and confirm that there is a remote branch that looks like 

`remotes/origin/gh-pages`


17. Once you confirm that the remote branch exists, at the terminal switch to the github io branch...

`git checkout gh-pages`


18. Open index.html in a text editor.

19. In index.html, note the  <base> tag. It may say something like <base href='/ra-ng2-deploy' > or something similar. change it to the base URL that matches the website address you are browsing to, for example.

<base href="https://eapostol.github.io/ng2-testdeploy/" />

20. Commit or push your change to the remote repository using either git push at the terminal or use github desktop.

21. Browse to the URL of your github.io project. For example.

https://eapostol.github.io/ng2-testdeploy/

22. Don't forget to update your README.MD to reference the URL of your live site.





