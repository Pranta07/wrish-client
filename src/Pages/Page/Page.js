import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import { Box } from "@mui/material";

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
    <>
        <Helmet>
            <title>{`${title} | Wrish`}</title>
            {meta}
        </Helmet>

        <Box ref={ref} {...other}>
            {children}
        </Box>
    </>
));

export default Page;
