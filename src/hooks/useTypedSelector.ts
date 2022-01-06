import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RooteState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RooteState> = useSelector