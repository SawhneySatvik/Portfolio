import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socials = [
    {
        name: 'GitHub',
        path: 'https://github.com/SawhneySatvik',
        icon: <FaGithub />,
    },
    {
        name: 'Linkedin',
        path: 'https://www.linkedin.com/in/sawhneysatvik/',
        icon: <FaLinkedin />,
    },
    {
        name: 'Instagram',
        path: 'https://www.instagram.com/sawhneysatvik/',
        icon: <FaInstagram />,
    },
    {
        mail: 'Mail',
        path: 'mailto:satvik.sawhney2005@gmail.com',
        icon: <FiMail />,
    }
];

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
    textStyles: string;
}

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
    return (
        <div className={containerStyles}>
            {socials.map((social) => {
                return (
                    <Link href={social.path} key={social.name} target="_blank" rel="noreferrer" className={iconStyles}>
                        {social.icon}
                    </Link>
                );
            })}
        </div>
    );
}
