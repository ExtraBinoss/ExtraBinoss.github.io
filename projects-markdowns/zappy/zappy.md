# [Zappy project 🔗](https://github.com/ExtraBinoss/ZappBee)

*Please refer to the documentation in the github project under /documentation/ folder.*

## Overview

Zappy is a multi-component project developed by students at Epitech. The goal of the project is to create a distributed, multiplayer game consisting of a server, a graphical user interface (GUI), and AI clients.

Each component of the project is implemented in different programming languages, showcasing a diverse range of skills and technologies.

## Components

### 1. Server (C)
The server is the core of the Zappy project, responsible for managing game logic, player connections, and communication between different clients. It is implemented in C, leveraging the language's efficiency and control over system resources.

### 2. GUI (C++ with SFML)
The graphical user interface provides a visual representation of the game, allowing players to interact with the game environment in real-time. The GUI is developed in C++ using the Simple and Fast Multimedia Library (SFML) for rendering graphics, handling events, and managing window operations.
 
 


 
<p float="left">
  <img src="../projects-markdowns/zappy/images/flat" width="400" />
  <img src="../projects-markdowns/zappy/images/iso" width="400" />
</p>
 




### 3. AI Clients (Python)
AI clients are designed to interact with the game autonomously, simulating intelligent behavior in the game world. These clients are implemented in Python, taking advantage of its simplicity and powerful libraries for AI development.

## Project Structure

The project is organized into the following directories:


- **server/**: Contains all the source code and headers for the server implementation.
- **gui/**: Contains the source code, headers, and assets for the GUI implementation.
- **ai/**: Contains the source code and scripts for the AI clients.

## Getting Started

### Prerequisites

- **Server**: GCC or Clang compiler, Make
- **GUI**: C++ compiler, SFML library
- **AI**: Python 3.x, required Python libraries

### Building the Project

#### Server
To build the server, navigate to the `server/` directory and run:

```sh
make re
```

#### GUI
To build the GUI, navigate to the `gui/` directory and run:

```sh
make re
```

#### AI
No build process is required for the AI clients, you may execute it using the Main.py located inside the ai folder, but for convenience you can still run the Make re command to have it in the root repository the same way as the other ones.

#### Overall Build
To build all components of the project, you can run the following command in the root directory:

```sh
make re
```

### Running the Project

#### Server
To run the server, execute the following command in the root directory:

```sh
./zappy_server -p [port] -x [width] -y [height] -n name1 name2 name3 [...] -c [number of clients] -f [frequency]
```

#### GUI
To run the GUI, execute the following command in the root directory:

```sh
./zappy_gui -p [port] -h [host]
```

#### AI
To run the AI client, execute the following command in the root directory:

```sh
./zappy_ai -p [port] -n [team name] -h [host]
```

*One may also connect manually to the server using a telnet client.*
 
 
 
 
 
 
 
 
 
 
 
## Epitech Project 2024
- **Project Type**: Zappy
- **Language**: C, C++, Python
- **Group Size**: 6
- **Official Duration**: 5 weeks
- **Deadline**: 23-06-2024
