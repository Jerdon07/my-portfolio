
export interface CertificateProps {
    id: number
    title: string
    authority: string
    abbreviation: string
    image: string
    url: string
}

export const certificates: CertificateProps[] = [
    {
        id: 1,
        title: "Web Development NC3",
        authority: "Technical Education and Skills Development Authority",
        abbreviation: "TESDA",
        image: '/certificates/web-development-nc3.JPG',
        url: 'https://t2mis.tesda.gov.ph/Learners/S/680034004D00500068003500390063006400710036003500420061007A00430064007700640049004D004D003900660078006C007900450059004E007A0032002F00520049004E006D0031006A0034006C00760049003D00'
    }
]