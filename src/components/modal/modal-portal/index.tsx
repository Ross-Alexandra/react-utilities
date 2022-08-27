import React from "react";
import { DEFAULT_PORTAL_ID } from "../constants";

export const ModalPortal: React.FC<{id?: string}> = ({id=DEFAULT_PORTAL_ID}) => {
    return <div id={id} />;
}
