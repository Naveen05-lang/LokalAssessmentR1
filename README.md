# 💼 LokalApp - Job Listings (React Native)

A simple yet modern React Native app that fetches job listings from an API using **Axios**, displays them using **Zustand** for state management, and implements **infinite scroll**, with clean UI and robust handling of loading, error, and empty states.

---

## ✨ Features

- ⚡ Fast API data fetching using **Axios**
- 📦 Global state management with **Zustand**
- 🔁 Infinite scrolling with pagination support
- 🔃 Retry mechanism for failed requests
- 📴 Empty state and loading spinners
- 🎨 Clean, modern and responsive UI
- 📱 Designed for smooth mobile experience

---

## 🔗 API Endpoint

https://testapi.getlokalapp.com/common/jobs?page=1

---

## 📦 Tech Stack

- **React Native** (with Functional Components & Hooks)
- **Zustand** for global state
- **Axios** for network requests
- **FlatList** for infinite scroll

---
## Video Presentation link of Output
https://drive.google.com/file/d/1xDX7WS5gYbvuq0vDmUSBU6twG0cZNjU8/view?usp=sharing

## Output 
![Screenshot 2025-04-19 104058](https://github.com/user-attachments/assets/19bc448f-ea04-4ef7-b7f8-2bc9f5253db6)



## 🚀 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/lokalapp-joblistings.git
cd lokalapp-joblistings

# 2. Install dependencies
npm install

# 3. Start the project
npx react-native run-android # for Android
npx react-native run-ios     # for iOS
---
# 4. Folder Structure
.
├── App.js
├── /api
│   └── jobApi.js           # Axios wrapper for API
├── /store
│   └── useJobStore.js      # Zustand global store
├── /components
│   ├── JobCard.js          # Card UI for job item
│   └── StateViews.js       # UI components for loading, error, empty

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
