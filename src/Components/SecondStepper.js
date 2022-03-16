import React from "react";
import {
    Grid,
    Typography,
    TextField
} from "@mui/material";
import { Validate } from "./ValidationSecond.js";


const SecondStepper = ({ setcurrentStep, setshowdiv1, setshowdiv2, setshowdiv3 }) => {

    const [email, setEmail] = React.useState("");

    //======Error States======//
    const [errorState, setErrorstate] = React.useState({
        isError: false,
        FieldName: "",
        Message: "",
    });
    const next1 = () => {

        const value = Validate(email);

        if (value) {
            setErrorstate({
                isError: value.isError,
                FieldName: value.FieldName,
                Message: value.Message,
            });
        } else {
            setErrorstate({
                isError: false,
                FieldName: "",
                Message: "",
            });

            setshowdiv1(false);
            setshowdiv2(false);
            setshowdiv3(true);
            setcurrentStep(2);

        }

    }


    const EnterKeynext = (evt) => {
        if (evt.keyCode == 13) {
            next1();
        }
    };

    const { isError, FieldName, Message } = errorState;
    return (
        <>
            <div className="form_body">
                <Grid container className="mt">
                    <Grid item xs={12} md={12} sm={12}>
                        <Typography className="mb" variant="h6">
                            General Form
                        </Typography>
                        <div className="form_back">
                            <div className="form_overlay">
                                <Typography className="pt mx" variant="subtitle1">
                                    Contact Information
                                </Typography>
                                <Grid container spacing={2} className="px py">

                                    <Grid item xs={12} md={6} sm={12}>
                                        <TextField
                                            className="form_textfield"
                                            label="Email*"
                                            variant="standard"
                                            name="email"
                                            inputProps={{ maxLength: 40, autoComplete: "none" }}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyUp={EnterKeynext}
                                            error={Boolean(isError && FieldName === "email")}
                                            helperText={FieldName === "email" && Message}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        sm={12}
                                        className="gray-text "
                                        style={{
                                            marginTop: "6px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Email address should be unique for each individual. If you
                                        do not have a unique email - you can get one for free at{" "}
                                        <a
                                            className="protonMail"
                                            style={{ color: "#4bd3c5" }}
                                            href="https://protonmail.com/signup"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Proton mail.
                                        </a>
                                    </Grid>
                                    <Grid item xs={12} md={12} sm={12} className="d-flex">
                                        <button className="btn" onClick={next1}>
                                            Next
                                        </button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default SecondStepper;
