import React, { useState, useEffect } from "react";
import "./Form.css";
import Stepper from "react-stepper-horizontal";
import CircularProgress from "@mui/material/CircularProgress";
import { Validate } from "./Validation.js";
import FirstStepper from "./FirstStepper";
import SecondStepper from "./SecondStepper";
import Success from "./Success";
import moment from "moment";

const Form = () => {

    useEffect(() => {
        let year_array = [];
        for (var i = moment(new Date()).format("yyyy"); i - 1909; i--) {
            year_array.push(i);
        }
        SetYear(year_array);

        let date_array = [];
        for (var j = 1; j <= 31; j++) {
            let number = j < 10 ? "0" + j : j;
            date_array.push(number);
        }
        SetDate(date_array);
    }, []);

    //======Stepper States======//
    const [currentStep, setcurrentStep] = useState(0);
    console.log(currentStep)
    const [steps, Setsteps] = useState([
        {
            title: "First Form",
        },
        {
            title: "Second Form",
        },
        {
            title: "Success",
        },
    ]);

    //======Show DIV States======//
    const [showdiv1, setshowdiv1] = useState(true);
    const [showdiv2, setshowdiv2] = useState(false);
    const [showdiv3, setshowdiv3] = useState(false);


    //======Date of birth States======//
    const [month] = useState([
        { id: "01", month: "January" },
        { id: "02", month: "February" },
        { id: "03", month: "March" },
        { id: "04", month: "April" },
        { id: "05", month: "May" },
        { id: "06", month: "June" },
        { id: "07", month: "July" },
        { id: "08", month: "August" },
        { id: "09", month: "September" },
        { id: "10", month: "October" },
        { id: "11", month: "November" },
        { id: "12", month: "December" },
    ]);
    const [year, SetYear] = useState([]);
    const [date, SetDate] = useState([]);

    //======First Stepper States======//
    const [loader, setloader] = React.useState(false);

    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        dobmonth: "",
        dobdate: "",
        dobyear: "",
    });



    //======Error States======//
    const [errorState, setErrorstate] = useState({
        isError: false,
        FieldName: "",
        Message: "",
    });

    //=========================================================//

    //======On Change Functionalities======//
    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };


    //======First Stepper Validation & API Call======//
    const next1 = () => {
        let firstFormDetails = {
            ...details,
        };
        const value = Validate(firstFormDetails);
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
            setshowdiv2(true);
            setcurrentStep(1);
        }
    };

    const EnterKeynext = (evt) => {
        if (evt.keyCode == 13) {
            next1();
        }
    };

    const Backbtn = () => {
        Setsteps([
            {
                title: "First Form",
            },
            {
                title: "Second Form",
            },
            {
                title: "Success",
            },
        ]);
        localStorage.clear();
        setcurrentStep(0);
        setshowdiv1(true);
        setshowdiv2(false);
        setshowdiv3(false);

        setDetails({
            firstName: "",
            lastName: "",
            middleName: "",
            email: "",
            dobmonth: "",
            dobdate: "",
            dobyear: "",
        });
    }

    return (
        <div className="form_container">
            <div className="stepper">
                <Stepper
                    size={41}
                    circleFontSize={15}
                    steps={steps}
                    activeStep={currentStep}
                    activeColor="#4bd3c5"
                    completeColor="#4bd3c5"
                />
            </div>
            {showdiv1 ? (
                <>
                    {loader === true ? (
                        <div className="loaderAdj">
                            <CircularProgress />
                        </div>
                    ) : (
                        <FirstStepper
                            details={details}
                            year={year}
                            date={date}
                            month={month}
                            errorState={errorState}
                            onChange={onChange}
                            EnterKeynext={EnterKeynext}
                            next1={next1}
                        />
                    )}
                </>
            ) : showdiv2 ? (
                <>
                    {loader === true ? (
                        <div className="loaderAdj">
                            <CircularProgress />
                        </div>
                    ) : (
                        <SecondStepper
                            setcurrentStep={setcurrentStep}
                            setshowdiv1={setshowdiv1}
                            setshowdiv2={setshowdiv2}
                            setshowdiv3={setshowdiv3}
                        />
                    )}
                </>
            ) : showdiv3 ? (
                <>
                    {loader === true ? (
                        <div className="loaderAdj">
                            <CircularProgress />
                        </div>
                    ) : (
                        <Success
                            Backbtn={Backbtn}
                        />
                    )}
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Form;
