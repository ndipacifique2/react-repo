let CreateBlog = ({name,alerts}) => {
    return(
         <main className="Createblog">
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log("name:",name );
                alerts();
            }}>
    <input type="text" name="tittle" placeholder="tittle"/><br/>
    <input type="text" name="discription" placeholder="description"/><br/>
    <button type="submit">Submit</button> 
        </form>
         </main>
    )
}
export default CreateBlog;