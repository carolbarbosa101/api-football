import { Button, Nav } from "components";

export function WriteNowPage(){
    
    return (
        <>
            <Nav/>

            <div className="container">

            <h1>Se Cadastre para saber informações do seu time</h1>
            <form className="form">

                <label htmlFor="destinationName"> Nome Completo:  </label>
                <input type="text" placeholder="seu nome completo"/>
              
                <label htmlFor="destinationAddress"> E-mail: </label>
                <input type="text" placeholder="Ex. joao@email.com" />
                
                <label htmlFor="key">Key Auntetication: </label>
                <input type="password" placeholder="**********"/>
                <label htmlFor="dueDate"></label>
                <input type="date" />
                <Button type="submit" variant="primary"> Login</Button>
                
            </form>
            </div>
        </>
    );
} 