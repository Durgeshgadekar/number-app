# Number Control App

This is a simple web application built using React.js that allows users to control a number between 0 and 150. The app includes features for incrementing and decrementing the number, a progress bar that visually represents the current value, and undo/redo functionality for the operations performed.

## Features

- **Add/Subtract Buttons**: Increase or decrease the number by 1. The number is constrained between 0 and 150.
- **Progress Bar**: Displays the current number as a percentage of 150, with smooth transitions when the number changes.
- **Undo/Redo**: Allows users to undo the last operation or redo it if undone.

## Technologies Used

- **React.js**: For building the user interface and managing application state.
- **CSS**: For styling the components and adding animations to the progress bar.

## Installation

To run this app locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/durgeshgadekar/number-control-app.git
    cd number-control-app
    ```

2. **Install Dependencies**:

    Make sure you have Node.js installed. Then, install the necessary dependencies:

    ```bash
    npm install
    ```

3. **Start the Application**:

    Run the development server:

    ```bash
    npm start
    ```

4. **Open the App**:

  wait

## Usage

- **Add/Subtract**: Click on the "Add" button to increment the number or the "Subtract" button to decrement it.
- **Undo/Redo**: Use the "Undo" button to revert the last change, or the "Redo" button to apply the undone action.
- **Progress Bar**: Watch the progress bar update as the number changes, reflecting the current state.

## Project Structure

- **src/**
  - **App.js**: Main component that contains the logic for rendering the UI and managing state.
  - **App.css**: Contains the styling for the app, including the progress bar and buttons.
  - **index.js**:
