const Shimmer = (props) => {
   return <div  className="flex justify-between flex-wrap">
        {Array(14).fill("").map((e,index)=><div key ={index} className="w-[200px] h-[300px] bg-gray-200  my-3"></div>)}  
      </div>
};
export default Shimmer;