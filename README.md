# Chef Claude

## Description

Front-end application built with React + Vite which uses the anthropic API for generating recipe suggestions based on the users existing ingredients.

## Setup

To start using the application, follow the steps below.

1. **Clone the repository onto your system:**

    First, open your terminal. Go to the folder where you want the project. Run this command:

    ```bash
    git clone https://github.com/jilagannn/chef-claude.git
    ```

2. **Install packages and dependencies:**

    Install the required node packages and dependencies:

    ```bash
    npm install
    ```

3. **Navigate to project directory:**

    Next, go into the project folder you just cloned:

    ```bash
    cd chef-claude
    ```

4. **Create .env:**

    Create a .env in the root project directory for storing the API key.

    ```bash
    touch .env
    ```

5. **Add .env variables:**

    Inside the .env file, add the following keys:

    ```bash
    VITE_ANTHROPIC_API_KEY=<YOUR_KEY_GOES_HERE>
    ```

6. **Initialize application:**

    Start up the application by executing the command below:

    ```bash
    npm run dev
    ```
