import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "20px" }} />}
        {...props}
    />
))(({ theme }) => ({
    textAlign: "left",
    padding: theme.spacing(2),
    backgroundColor:
        theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
    color: theme.palette.mode === "dark" ? "white" : "#1976d2",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    textAlign: "left",
    padding: theme.spacing(3),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    color: theme.palette.mode === "dark" ? "white" : "black",
}));

const questions = [
    {
        id: "panel1",
        summery: "How Can I Buy A Watch Online?",
        details:
            "Torem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.Amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
    {
        id: "panel2",
        summery: "How Can I Pay After Buying A Watch?",
        details:
            "Torem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.Torem ipsum dolor sit amet. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
    {
        id: "panel3",
        summery: "How Can I Get My Watch Delivered In My Home?",
        details:
            "Forem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam.",
    },
    {
        id: "panel4",
        summery: "Does WRISH Provide Home Delivery?",
        details:
            "Aorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
    {
        id: "panel5",
        summery: "Is There Any Refund Policy?",
        details:
            "Qorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam, voluptatem doloribus reiciendis dolore quis maxime Worem ipsum dolor sit amet consectetur adipisicing elit atque sit.",
    },
    {
        id: "panel6",
        summery: "How Can I Track My Ordered Products?",
        details:
            "Worem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam et ullam,Worem ipsum dolor sit amet consectetur adipisicing elit. voluptatem doloribus reiciendis dolore quis maxime atque sit.",
    },
];

export default function FAQ() {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {questions.map((ques) => (
                <Accordion
                    expanded={expanded === ques.id}
                    onChange={handleChange(ques.id)}
                >
                    <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            {ques.summery}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{ques.details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}{" "}
        </div>
    );
}
