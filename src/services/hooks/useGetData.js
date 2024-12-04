import { } from '../api';

export const useGetData = () => {
    const getInformations = async () => {
        try{
            const response = await api.get('/plansab')
            return response.data
        } catch (error) {
            console.log({ error })
            return { error }
        }
    }

    return{
        getInformations,
    }
}