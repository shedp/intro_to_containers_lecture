## Intro to Containers Lecture 

### Study Notes
[Docker CLI Cheatsheet](https://github.com/getfutureproof/fp_guides_wiki/wiki/Docker-101-Cheatsheet)


## Demo Repo
- To run the demo repo code:
1. Fork and clone down the repo
2. `cd` into the folder
3. Install dependencies
    - `cd server`
    - `npm install`
4. Start your server
    - `npm run dev`

## To start the container 
1. Navigate to the directory you would like to mount
2. You can run the dev-container script as it has already installed
    `npm run dev-container`
3. start the containtainer docker with a specified container name, and bind mount the current directory to a `code` file on the node:latest image
    `docker run -it -p 3000:3000 --name <containter name> --mount type=bind,src="$(pwd)",dst=/code node:latest /bin/bash`