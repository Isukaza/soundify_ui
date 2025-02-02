import {Link as LinkRout} from "react-router-dom";

import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import {linkStyles} from "@/styles/login/styles.js";

export default function SignUpLink() {
    return (
        <Typography
            endDecorator={
                <Link
                    component={LinkRout}
                    href="#"
                    to="/InDevelop"
                    level="title-sm"
                    underline="none"
                    color="neutral"
                    sx={linkStyles}>
                    Sign up for Soundtify
                </Link>
            }
            sx={{
                fontSize: 'sm',
                alignSelf: 'center'
            }}
        >
            Don&apos;t have an account?
        </Typography>);
};