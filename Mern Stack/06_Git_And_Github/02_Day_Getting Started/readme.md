
<!-- TOC -->

- [What is Git?](#what-is-git)
- [Installing Git](#installing-git)
    - [Installing Git on Linux:](#installing-git-on-linux)
    - [Installing Git on Windows:](#installing-git-on-windows)
- [Key Concepts of Git](#key-concepts-of-git)
- [First-Time Git Setup](#first-time-git-setup)
    - [Set Your Identity](#set-your-identity)
    - [Set Your Text  Editor](#set-your-text--editor)
- [Basic Git Commands](#basic-git-commands)

<!-- /TOC -->

# **What is Git?**

- Git is a distributed version control system (DVCS) that allows developers to track changes in their codebase, collaborate with others, and manage different versions of their projects efficiently.


- Git, ek version control system hai, jo 2005 mein Linus Torvalds ne develop kiya tha. Torvalds, jo Linux operating system ke creator ke roop mein jaane jaate hain, ne Git ko C programming language mein likha tha. C mein likhne ka mukhya karan yeh tha ki C language mein likha gaya software fast aur efficient hota hai, jo bade projects ko bhi jaldi se handle karne mein madad karta hai.

- Git ka mool uddeshya hai development process ko organize aur collaboration ko improve karna. Isse, developers alag-alag versions ke saath kaam kar sakte hain, unke changes ko compare aur merge kar sakte hain, aur zarurat padne par previous versions par bhi wapas ja sakte hain. Git ke alag-alag parts, jaise ki scripts aur utilities, ko Shell, Perl, aur Tcl jaise languages mein likha gaya tha, jisse Git ko aur bhi zyada powerful banane mein madad milti hai.



- Junio Hamano, ek important person hai Git community mein  Unhe Git ka maintainer banaya gaya kyunki unmein Git ke vikas aur suraksha ke prati vishesh gyaan aur samajh thi. Unke anubhav aur leadership skills ke karan unhe Git samuday mein ek pramukh sthan diya gaya. 
Unka kaam hai Git software ka sambhalna, aur unhe yeh ensure karne ka zimma hai ki Git stable, secure  aur improved rahe. Junio apne 
bade developers team ke saath mil kar kaam karte hain, taaki Git ko aur bhi behtar banaya ja sake. Unka uddeshya hai developers ke zarurat ko samajh kar unhein poora karna aur Git ko sabke liye adhik upyukt banane mein madad karna.





# Installing Git

## Installing Git on Linux:

1. **Using Package Manager:**
   - Open a terminal.
   - Use the package manager specific to your Linux distribution to install Git. For example:
     - On Ubuntu/Debian-based systems:
       ```bash
       sudo apt update
       sudo apt install git
       ```
     - On Fedora:
       ```bash
       sudo dnf install git
       ```
     - On CentOS/RHEL:
       ```bash
       sudo yum install git
       ```

2. **Verify Installation:**
   - After the installation is complete, you can verify it by typing:
     ```bash
     git --version
     ```
   - This command should display the installed version of Git.

## Installing Git on Windows:

1. **Using Git for Windows:**
   - Download the Git for Windows installer from the official Git website: [Git for Windows](https://git-scm.com/download/win)
   - Run the installer by double-clicking on the downloaded file.
   - Follow the on-screen instructions in the installation wizard:
     - Click "Next" to start the installation.
     - Choose the components you want to install (default selections are usually fine).
     - Choose the installation location (default is usually fine).
     - Select the desired options for the Start Menu shortcuts.
     - Choose the default editor (Vim is the default, but you can choose another editor if you prefer).
     - Choose the default behavior for line endings (usually "Checkout as-is, commit as-is" is recommended).
     - Choose the terminal emulator used by Git Bash (default is usually fine).
     - Click "Install" to begin the installation process.
     - Wait for the installation to complete, then click "Finish" to exit the installer.

2. **Verify Installation:**
   - After the installation is complete, open Command Prompt or PowerShell.
   - Type the following command to verify that Git is installed:
     ```
     git --version
     ```
   - This command should display the installed version of Git.
# Key Concepts of Git






# First-Time Git Setup


## Set Your Identity

```bash
$ git config --global user.name "your name"
$ git config --global user.email "your email"

```

- Aapko yeh setting ek baar hi karni hoti hai agar aap --global option use karte hain. Isse Git hamesha wahi information use karega jab bhi aap system pe kaam karenge. 

- Agar aap kisi specific project ke liye alag naam ya email address use karna chahte hain, toh aap project ke folder me jaake bina --global option ke command run kar sakte hain.



## Set Your Text  Editor

1. Configure Git to Use VS Code as the Default Editor


# Basic Git Commands


- When you use Git, you often need to write messages, like commit messages. By default, Git uses a basic text editor, but you can change it to any editor you like, such as Visual Studio Code (VS Code), Sublime Text, Atom, or others. Here's how you can do that:


- Jab aap Git use karte hain, to aksar aapko commit messages ya merge messages edit karne ki zaroorat padti hai. Default ke roop mein, Git ek basic text editor use karta hai, lekin aap ise configure karke apni pasand ka text editor use kar sakte hain, jaise Visual Studio Code (VS Code), Sublime Text, Atom, ya koi aur editor.


1. Set the Default Editor


To choose your preferred text editor, use the git config command. Here’s how to set it up for popular editors:


**Visual Studio Code (VS Code):**

1. Open Terminal or Command Prompt:

2. Enter this command:

````bash
$ git config --global core.editor "code --wait"
````

-  code is the command for VS Code.

- --wait makes sure VS Code waits until you close it before continuing.


**Sublime Text:**



1. Open Terminal or Command Prompt:

2. Enter this command:

````bash
$ git config --global core.editor "subl -n -w"
````

-  `subl` is the command for Sublime Text.

- `-n` opens a new window.


- `-w` makes Sublime Text wait until you close it.


**Atom:**


1. Open Terminal or Command Prompt:

2. Enter this command:

````bash
$ git config --global core.editor "atom --wait"
````

-  `atom` is the command for Atom.

-  `--wait` makes Atom wait until you close it.


