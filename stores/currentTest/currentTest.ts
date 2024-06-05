import { createStore, createEvent } from "effector";

export const changeTest = createEvent();
export const $currentTest = createStore(0).on(changeTest, (_,state) => state);