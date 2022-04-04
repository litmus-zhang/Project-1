# How to contribute

### Clone the repo
git clone -b development https://github.com/Team-Nebula-blockgames/Project-1

### Move into cloned folder
cd Project-1

### Install dependencies
yarn install

### Install Frontend dependencies(only needed if you want to view or work on the frontend)
cd client

yarn install

# Pull latest changes and push changes to repo(make sure your in Project-1 directory)

### Always pull before making changes
git pull origin

### Push to the repo whenyour done with your changes(don't forget to commit first)
git push origin


# Scripts(make sure your in Project-1 directory)
### To run local blockchain
yarn node

### To deploy(to localhost)
yarn deploy

### to start frontend app
cd client

yarn start
