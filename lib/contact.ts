export interface ContactProps {
    platform: string
    link: string
    iconClass: string
}[]

export const contact: ContactProps[] = [
    {
        platform: "GitHub",
        link: "https://github.com/Jerdon07",
        iconClass: 'devicon-github-original'
    }, {
        platform: "Google",
        link: "https://mail.google.com/mail/?view=cm&to=jdlitaoen@gmail.com",
        iconClass: 'devicon-chrome-plain'
    }, {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/jerdon-litaoen/",
        iconClass: 'devicon-linkedin-plain'
    }
]