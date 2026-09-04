import { certificates } from "./sections/certificates";
import { contact } from "./sections/contact";
import { myLife } from "./sections/get-to-know-me";
import { ToolProps, tools } from "./sections/tools";
import { timelineData } from "./sections/timeline";

export interface AboutSectionProps {
    title: string
    content: any
}

export const sections: AboutSectionProps[] = [
    {
        title: "Get to Know Me",
        content: myLife,
    }, {
        title: "Achievements and Progress",
        content: timelineData,
    }, {
        title: "Certificates",
        content: certificates,
    }, {
        title: "Tech Tools",
        content: tools,
    }, {
        title: "Contact Me",
        content: contact
    }
]