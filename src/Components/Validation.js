export const Validate = (value) => {
    const {
        firstName,
        lastName,       
        dobmonth,
        dobdate,
        dobyear,
    } = value;
    let errors = false;

    if (firstName.trim() == "" && firstName.trim().length === 0) {
        errors = {
            isError: true,
            FieldName: "firstName",
            Message: "First Name cannot be blank",
        };
        return errors;
    } else if (lastName.trim() == "" && lastName.trim().length === 0) {
        errors = {
            isError: true,
            FieldName: "lastName",
            Message: "Last Name cannot be blank",
        };
        return errors;
    } else if (dobmonth == "") {
        errors = {
            isError: true,
            FieldName: "dobmonth",
            Message: "DOB Month cannot be blank",
        };
        return errors;
    } else if (dobdate == "") {
        errors = {
            isError: true,
            FieldName: "dobdate",
            Message: "DOB Date cannot be blank",
        };
        return errors;
    } else if (dobyear == "") {
        errors = {
            isError: true,
            FieldName: "dobyear",
            Message: "DOB Year cannot be blank",
        };
        return errors;
    }
};
