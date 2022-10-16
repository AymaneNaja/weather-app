
import axios from "axios"
import { useState,useEffect } from "react"

const useAxios = (url,path=null) => {
    const Axios=axios.create({
        baseURL:url
    })
    const [data,setData]=useState([{}])
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState(null)
    useEffect(() => {
        const fetchData=async()=>{
        try{
            setLoading(true)
            const response=await Axios.get(path)
            const data=response.data
            setData(await data.data)
            setErr(null)
        }catch(err){
                setErr(err)
            }
            setLoading(false)
        }
        fetchData()
    }, []);
    function Refetch(){
        const fetchData=async()=>{
            try{
            setLoading(true)
            const response=await Axios.get(path)
            setData((await response.data))
            setErr(null)
            }catch(err){
                setErr(err)
            }
            setLoading(false)
        }
        fetchData()
    }
  return {data,Refetch,loading,err}
}

export default useAxios