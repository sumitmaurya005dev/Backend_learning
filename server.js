const app= require('./src/app')


app.listen(3000,()=>{
    try {
        console.log("server is running on  port 3000")
    } catch (error) {
        console.log("Some Error Ocrred :",error);
        
    }
    
})