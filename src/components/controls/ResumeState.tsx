﻿import { EditorMode } from "../LoadComponent";
import { SectionHeaderPosition } from "../Section";
import { SelectedNodeProps } from "../ResumeComponent";
import { IdType } from "../utility/HoverTracker";

export interface ResumeSaveData {
    children: Array<object>;
    css: string;
}

export default interface ResumeState extends ResumeSaveData {
    mode: EditorMode;
    sectionTitlePosition: SectionHeaderPosition;

    activeTemplate?: string;
    clipboard?: object;

    hoverNode?: IdType;
    selectedNode?: SelectedNodeProps;
}