// Re-export the centralized firebase instances from the top-level src/firebase.js
// This keeps existing imports in this nested copy working while avoiding duplicate configs.
export * from '../../../../src/firebase';
