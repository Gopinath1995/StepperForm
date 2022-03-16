export const Validate = (value) => {

    let errors = false;
    if (value.trim() == "" && value.trim().length === 0) {
        errors = {
            isError: true,
            FieldName: "email",
            Message: "Email Id cannot be blank",
        };
        return errors;
    } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.trim()) &&
        value.trim() != ""
    ) {
        errors = {
            isError: true,
            FieldName: "email",
            Message: "Please enter the valid Email",
        };
        return errors;
    }
};
