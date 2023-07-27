import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Footer } from "../containers/footer";
import { Seo } from "../components/seo";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "5% 20%",
        [theme.breakpoints.down("sm")]: {
            padding: "5% 2%",
        },
    },
}));

const privacyData = [
    {
        label: "Privacy Policy for Lindata, upwork gpt and auto refresh Chrome Extension",
        info: `Effective Date: 07/27/2023

        Thank you for using Lindata, upwork gpt and auto refresh, a Chrome extension developed by hamidnawaz. This privacy policy explains how we collect, use, and protect the information you provide while using our extension. By using Lindata, upwork gpt and auto refresh, you agree to the terms outlined in this privacy policy. If you do not agree with these terms, please do not use the extension.`,
    },
    {
        label: "Information We Collect",
        info: `Browser Data: Lindata, upwork gpt and auto refresh may collect non-personal information about your browser, including its version, language, and type. This data helps us optimize the extension's performance and troubleshoot technical issues.

        Search Queries: When you use Lindata, upwork gpt and auto refresh to search for information or websites, we may temporarily collect and store your search queries. This information is used solely to provide you with search results and improve the extension's functionality.`,
    },
    {
        label: "Data Usage",
        info: "Improving User Experience: The information collected is used to enhance the overall user experience, troubleshoot problems, and identify trends in user behavior to improve the functionality of the extension. No Personal Information Sharing: We do not share any personally identifiable information with third parties or use the collected data for marketing purposes.",
    },
    {
        label: "Data Protection",
        info: "Secure Data Storage: All data collected by Lindata, upwork gpt and auto refresh is securely stored and protected from unauthorized access. We implement industry-standard security measures to safeguard the information we collect. Limited Access: Only authorized personnel with a legitimate need for accessing user data have permission to do so. Anonymized Data: Any data shared externally for analytical or statistical purposes is anonymized to ensure that it cannot be traced back to individual users.",
    },
    {
        label: "Changes to Privacy Policy",
        info: "We reserve the right to modify this privacy policy at any time. Any changes will be reflected on this page, and the effective date will be updated accordingly. We encourage you to review this page regularly to stay informed about how we protect your data.",
    },
    {
        label: "Contact Us",
        info: "info@hamidnawaz",
    }
];

const ContactMe = () => {
    const { root } = useStyles();
    return (
        <div>
            <Seo
                description="Contact me page of hamid nawaz"
                pageTitle="Contact Me"
                contentTitle="Contact Hamid Nawaz"
                pageUrl="/contact-me"
            />
            <main>
                <div className={root}>
                    {privacyData.map((el, id) => {
                        return (
                            <div key={id}>
                                <Typography variant="h5">{el.label}</Typography>
                                <Typography variant="body1">{el.info}</Typography>
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default ContactMe;
