import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const {user, loading} = useAuth();
    console.log(user)
    const [axiosSecure] = useAxiosSecure();
    console.log("axiosSecure: ", axiosSecure)
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
     enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            console.log('is student response' , res)
            return res.data.student;
        }
    })
    console.log(isStudent)
    return [isStudent , isStudentLoading]
};

export default useStudent;