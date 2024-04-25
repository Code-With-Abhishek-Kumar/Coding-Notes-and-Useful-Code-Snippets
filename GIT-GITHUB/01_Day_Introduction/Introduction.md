
## About Version Control 


- Version control is a software that help to track 
changes to a code or set of files over time so that you can recall specific versions later. As a developer edits code, the version control system takes a snapshot of the files. It then saves that snapshot permanently so it can be recalled later if needed.

- It allows multiple people to work on the same codebase without overwriting each other's changes and makes it easy to track and revert changes.

- Version control ek system hain jo ki apke code ko track kr ne main help kr ta hain ye bta ta hain ki aap ne kub or kiss line main code main changing kiya hain. ye aap k code ka screen shot le k use save krta hain ki jub aap ko jarurt ho aap apne code ke changes ko revert kr sakte hain.
  
## Types of Version Control Systems: 
1. Local Version Control Systems
2.  Centralized Version Control Systems
3.  Distributed Version Control Systems

## 1) Local Version Control System

<img src="./Image/Screenshot at 2024-04-20 16-56-34.png">

- Local Version Control Systems are systems that operate on a single computer or device and track different versions of files. These systems work independently without the need for a central server
  
- Ek simple tarika local version control system kaam karta hai jaise ki ek folder mein multiple copies ya versions of a file rakhte hain. Har baar jab koi changes kiya jaata hai, ek naya version banaya jaata hai aur purana version ko preserve kiya jaata hai. Is tarah se, har ek version ka purana history milta hai, lekin yeh system kisi aur ke saath collaboration ke liye suitable nahi hota.
  

- Local version control systems ka istemal aksar personal projects ya small-scale development mein hota hai, jahan multiple logon ki collaboration ki zarurat nahi hoti. Examples of local version control systems include keeping multiple copies of files with different names (like adding a date or version number to the file name) or using simple scripts to create backups of files with timestamps..



### Problem with Local version control systems:


## 2) Centralized Version Control Systems:

<img src="./Image/Screenshot at 2024-04-20 16-57-07.png">

- Centralized Version Control Systems (CVCSs) jaise CVS, Subversion, aur Perforce, ek central server par saare versioned files ko store karte hain, aur kai clients hote hain jo files ko us central jagah se check out karte hain. Yeh system kaafi saalon se version control ka standard hai. Jab yeh server kuch samay ke liye band ho jata hai, tab us samay koi bhi collaborate nahi kar sakta ya versioned changes ko save nahi kar sakta. Yadi central database ki hard disk kharab ho jati hai aur proper backups nahi rakhe gaye hain, toh puri project ki poori history kho jaati hai.

- The next major issue that people encounter is that they need to collaborate with developers on
other systems. To deal with this problem, Centralized Version Control Systems (CVCSs) were
developed. These systems (such as CVS, Subversion, and Perforce) have a single server that contains
all the versioned files, and a number of clients that check out files from that central place. For many
years, this has been the standard for version control.


- Centralized Version Control Systems (CVCS) are a type of version control system where all the repositories and their history are stored on a central server. In this model, developers clone the repository from the central server to their local machines, make changes, and then push those changes back to the central server. This allows multiple developers to work on the same codebase, but only one developer can make changes to a particular file at a time.

- If that server goes down for an hour, then during that hour nobody can collaborate at all or save versioned changes to anything they’re working on. If the hard
disk the central database is on becomes corrupted, and proper backups haven’t been kept, you lose
absolutely everything — the entire history of the project except whatever single snapshots people
happen to have on their local machines. Local VCSs suffer from this same problem — whenever you
have the entire history of the project in a single place, you risk losing everything.

- Imagine you're working on a big group project, like a school presentation. In a centralized version control system, there's one main folder where everyone stores their work. When you want to make changes, you take a copy of the files from this main folder, do your edits, and then put your updated files back in the main folder for everyone to see.


## 3) Distributed Version Control Systems

<img src="./Image/Screenshot at 2024-04-25 12-36-27.png">

- Distributed Version Control Systems (DVCSs) like Git, Mercurial, or Darcs work differently from centralized systems. In a DVCS, when you download a project, you're not just getting the latest version of the files. Instead, you're making a complete copy of the entire project, including its entire history of changes.

- This means that if the main server where the project is stored goes down, it's not a big problem. Anyone who has a copy of the project can restore the server by uploading their copy. In essence, every copy of the project is like a full backup, so there's no single point of failure. DVCSs make collaboration and backup easier because everyone who works on the project has a complete copy of it.