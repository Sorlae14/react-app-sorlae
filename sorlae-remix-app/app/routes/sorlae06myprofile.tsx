import { useState,useEffect } from "react";
export default function MyProfile(){
    const [data,setData] = useState({
    fname:'Natthasit',
    lname:'Srikaeo',
    email:'Natthasit.sri@rmutto.ac.th',
    major:'เทคโนโลยีสารสนเทศ'
});
    const [loading,setloading]=useState(true);
    
    useEffect(() => {
    const fetchData = async () => {
        const myProf = await fetch('http://localhost:3000/api/getProfile'); 
        if(myProf.ok){
            const result = await myProf.json();
            setData(result);
            setloading(false);
        }else{
        alert('Error: Call getProfile api.');
    }
    };
    fetchData();
});

if(loading) return <p className='m-4 p-4'>Loading..</p>

return(
    <div className="m-4 p-4">
    <h1>โปรไฟล์ของฉัน</h1>
    {/*JSON.stringify(data,null,2)*/}
   <br  /> ชื่อจริง:{data.fname} 
   <br  /> นามสกุล:{data.lname} 
   <br  /> Email:{data.email} 
   <br  /> สาขา:{data.major}    
    </div>
);
}