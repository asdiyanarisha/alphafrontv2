import axiosInstance from "@/lib/axios";

const LoginSubmitAction = async (email: string, password: string) => {
    return await axiosInstance.post("/login", {
        username: email, password: password,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log("success")
        return {code: response.status, status: "success"};
    }).catch(function (err) {
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}

export default LoginSubmitAction;