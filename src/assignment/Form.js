
function Form(){
    return(

    <body>
        <div className="container">
        <form>
            <h2>Get In Touch</h2>
            <input type="text" name="name" placeholder="Enter your Name"/>
            <input type="email" name="email" placeholder="Enter your Email"/>
            <textarea type="mesage" name="name" placeholder="Enter your message"/>
            <button >send</button>

        </form>
       
        <ul className="info">
            <h2>Contact Info</h2>
            
                <li><span>32, Avenue ve Newyork<br/>
                321995 Newyork</span></li>
                <li><span>hello@loremipsum.com</span></li>
                <l> <span>+3356 1589 2105</span></l>
                <li><span>3356 1589 2100</span></li>
            </ul>
            
        </div>
       
       </body> 
       
    )
}
export default Form;