import Document, { Html , Head , Main , NextScript} from "next/document"


class MyDocument extends Document {

 render() {
    return(
        <Html lang="fa" dir="rtl">
            
           <Head/>

           

             <body className="bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('/images/BG.jpg')" }}>
                <Main/>
                <NextScript/>
             </body>
        </Html>

        
    );
 }

}


export default MyDocument;