import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useAuth();
    console.log(user)
    const [axiosSecure] = useAxiosSecure();
    console.log("axiosSecure: ", axiosSecure)
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
     enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response' , res)
            return res.data.admin;
        }
    })
    console.log(isAdmin)
    return [isAdmin , isAdminLoading]
}

export default useAdmin;