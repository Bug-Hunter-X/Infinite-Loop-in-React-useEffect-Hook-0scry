# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook.  The bug arises from attempting to update the state within the `useEffect`'s dependency array, leading to continuous re-renders and an infinite loop.

The solution provided correctly addresses this issue, showing how to properly manage state updates within `useEffect` to avoid such scenarios.