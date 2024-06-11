## Git

- **Distributed** version control software / system
- Version control is a way to save changes over time without overwriting previous versions.
- Being distributed means that every developer working with a Git repository has a copy of that entire repository - every commit, every branch, every file. If you're used to working with centralized version control systems, this is a big difference!
- Branches are lightweight and cheap, so it's OK to have many of them
  Git stores changes in SHA hashes, which work by compressing text files. That makes Git a very good version control system (VCS) for software programming, but not so good for binary files like images or videos.

### Installation

- For Windows: Click [Git for Windows](https://gitforwindows.org/)
- For Ubuntu: Open command prompt and run:

```
sudo apt-get install git-all
```

To check whether its installed, Open command prompt and run:
`git version`

### Configuration

Once you install next step is configuring username and email. Use following commands to do that.

```
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
```

### Getting Started

### 1. init

If you don't have a remote repo already you can start with following command:

```
git init
```

Transform the current directory into a Git repository. When you run this command there is .git folder that will be created in the directory.

### 2. clone

If the repository already exists on a remote, you would choose to git clone. Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.

Run the following command:

```
git clone https://github.com/username/reponame.git
```

If its a Git repo, it will ask you to put your username and **password**.

Git has stopped accepting actual password for this. You need to use personal token to authenticate here.

Follow the instructions here: [Git Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**NOTE: Keep this token secure.**

### 3. status

This command shows you what branch you're on, what files are in the working or staging directory, and any other important information.

```
git status
```

### 4. Connect local code to remote Git repo

- Initialize the current folder as git local repo with `git init` command mentioned below.
- Go to [GitHub.com](https://github.com/) and create a repo with appropriate name.
- Run below command to add remote

```
git remote add origin https://github.com/username/reponame.git

git branch -M master 	master / main is branch name

To push all the content of local and also publish the local branch to remote use below command.

git push -u origin master	master / main is branch name
```

Show the associated remote repositories and their stored name, like origin.

```
git remote -v
```

### 5. add and commit

Whenever you do any changes and want to push to repo (origin), there are couple of things (commands) you have to do. **Following command will add all (add, update, delete) operations.**

To add all the changed files (**recursively**) to **"index / stage section"**

```
git add [*/.]
```

or to add specific files use

```
git add filename filename2
```

The next thing here is commit.

```
git commit -m "commit message to reflect in git history"
```

You can above 2 operations together using following command (skips the staging phase):

```
git commit -am "commit message"
```

You can also amend (update) the commit using following command. This is generally used when you forget to add some file or put wrong commit message.

```
git add forgottenfile

git commit --amend "new commit message"
```

### 6. reset

This is a flexible and powerful command. One of its many use cases is to move changes out of the staging area. To do this, use the "mixed" level of reset, which is the default.

**Need to check further**

```
git reset
```

### 7. push

Uploads all local branch commits to the corresponding remote branch.

When pushing a branch for the first time, this type of push will configure the relationship between the remote and your local repository so that you can use git pull and git push with no additional options in the future.

Publish the repo and Push the change

```
git push -u origin branchname
```

From next time onwards do only

```
git push
```

### 8. pull

git pull updates your current local working branch with the remote changes.

```
git pull
```

it is a combination of get fetch and get merge.

```
Downloads all history from the remote tracking branches.
git fetch

Combines remote tracking branches into current local branch.
git merge
```

### 9. Show all git branches repos

```
git branch
```

### 10. Merge branch

This will merge feat/abc branch into master

```
git checkout master
git merge feat/abc
```

### 11. Delete remote branch

```
git push reomote-name --delete br-name

In most cases remote name is origin.
e.g.

git push origin --delete master-v2
```
