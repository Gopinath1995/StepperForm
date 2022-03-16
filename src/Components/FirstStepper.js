import React, { useEffect } from "react";
import {
    Grid,
    Typography,
    TextField,
    InputLabel,
    FormHelperText,
} from "@mui/material";
import { MenuItem } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const FirstStepper = ({
    details,
    year,
    date,
    month,
    onChange,
    EnterKeynext,
    errorState,
    next1,
}) => {
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
                                            label="First Name*"
                                            variant="standard"
                                            name="firstName"
                                            inputProps={{ maxLength: 30 }}
                                            value={details.firstName}
                                            autoComplete="off"
                                            onChange={onChange}
                                            onKeyUp={EnterKeynext}
                                            error={Boolean(isError && FieldName === "firstName")}
                                            helperText={FieldName === "firstName" && Message}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4} sm={12}>
                                        <TextField
                                            className="form_textfield"
                                            label="Last Name*"
                                            variant="standard"
                                            name="lastName"
                                            inputProps={{ maxLength: 30, autoComplete: "none" }}
                                            value={details.lastName}
                                            onChange={onChange}
                                            onKeyUp={EnterKeynext}
                                            error={Boolean(isError && FieldName === "lastName")}
                                            helperText={FieldName === "lastName" && Message}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} sm={12}>
                                        <InputLabel>Date Of Birth *</InputLabel>
                                        <FormControl
                                            className="form-dropdown dob-dropdown"
                                            variant="standard"
                                        >
                                            <InputLabel>Month</InputLabel>
                                            <Select
                                                name="dobmonth"
                                                label="Month"
                                                value={details.dobmonth}
                                                onChange={onChange}
                                            >
                                                {month.map((item) => (
                                                    <MenuItem key={item.id} value={item.id}>
                                                        {item.month}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        <FormControl
                                            className="form-dropdown dob-dropdown"
                                            variant="standard"
                                        >
                                            <InputLabel>Day</InputLabel>
                                            <Select
                                                label="Day"
                                                name="dobdate"
                                                value={date.length ? details.dobdate : ""}
                                                onChange={onChange}
                                            >
                                                {date.map((item) => (
                                                    <MenuItem key={item} value={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl
                                            className="form-dropdown dob-dropdown"
                                            variant="standard"
                                        >
                                            <InputLabel>Year</InputLabel>
                                            <Select
                                                name="dobyear"
                                                label="Year"
                                                value={year.length ? details.dobyear : ""}
                                                onChange={onChange}
                                            >
                                                {year.map((item) => (
                                                    <MenuItem key={item} value={item}>
                                                        {item}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                        {FieldName === "dobmonth" ? (
                                            <FormHelperText className="errorText">
                                                {Message}
                                            </FormHelperText>
                                        ) : (
                                            <div></div>
                                        )}
                                        {FieldName === "dobdate" ? (
                                            <FormHelperText className="errorText">
                                                {Message}
                                            </FormHelperText>
                                        ) : (
                                            <div></div>
                                        )}
                                        {FieldName === "dobyear" ? (
                                            <FormHelperText className="errorText">
                                                {Message}
                                            </FormHelperText>
                                        ) : (
                                            <div></div>
                                        )}
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

export default FirstStepper;
