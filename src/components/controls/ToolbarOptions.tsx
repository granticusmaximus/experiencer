﻿import Entry, { EntryProps, BasicEntryProps } from "../Entry";
import { ResumeNode } from "../utility/NodeTree";
import { IdType } from "../utility/HoverTracker";
import { ResumeNodeProps } from "../ResumeNodeBase";

export default function ToolbarOptions(
    type: string,
    node: ResumeNode,
    updateNode: (key: string, value: string | string[]) => void) {

    const addTitleField = (node: BasicEntryProps) => {
        let arr = node.title || [];
        arr.push('');
        return arr;
    }

    const addSubtitleField = (node: BasicEntryProps) => {
        let arr = node.subtitle || [];
        arr.push('');
        return arr;
    }

    switch (type) {
        case Entry.name:
            return [
                {
                    text: 'Title Options',
                    actions: [
                        {
                            text: 'Add another title field',
                            action: () =>
                                updateNode('title', addTitleField(node))
                        },
                        {
                            text: 'Add another subtitle field',
                            action: () =>
                                updateNode('subtitle', addSubtitleField(node))
                        }/*
                        {
                            text: 'Remove title field (from right)',
                            action: this.removeTitleField,
                        },
                        {
                            text: 'Remove subtitle field (from right)',
                            action: this.removeSubtitleField,
                        }*/
                    ]
                }
            ];

        default:
            return [];
    }
}