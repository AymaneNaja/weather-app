import { useState,useEffect} from "react";



const useFetch = (url='') => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [err,setErr]=useState(false)
    const [errMES,setErrMes]=useState('')

    useEffect(() => {
        const fetchData=async()=>{
        try{
            const response=await fetch(url)
            const Data=await response.json()
            if(response.ok){
                setData([Data])    
                setErr(false)
            }
            if(!response.ok){
                setErr(true)
            }
        }catch(error){
            setErrMes(error)
        }
        finally{
            setLoading(false)
        }
    }
    fetchData()
},[])

function refetch(url){
        const fetchData=async()=>{
            try{
                setLoading(true)
                const response=await fetch(url)
                const Data=await response.json()
                if(response.ok){
                    setData([Data])   
                    setErr(false) 
                }
                if(!response.ok){
                    setErr(true)
                }
            }catch(err){
                setErrMes(err)
            }finally{
                setLoading(false)}
            }
            fetchData()}

    return {data,loading,err,refetch}
}

export default useFetch

